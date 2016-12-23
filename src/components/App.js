import React, { Component, PropTypes } from 'react';
import update from 'react-addons-update';

const propTypes = {
};

const defaultProps = {
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Contacts />
    );
  }
}

class ContactCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick() {
    this.props.onInsert(this.state.name, this.state.phone);
    this.setState({
      name: '',
      phone: ''
    });
  }

  render() {
    return(
      <div>
        <p>
          <input
            type="text" name="name" placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
          <input
            type="text" name="phone" placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            />
          <button onClick={this.handleClick}>
            Insert
          </button>
        </p>
      </div>
    );
  }
}

class ContactRemover extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onRemove();
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        >
        Remove selected contact
      </button>
    )
  }
}

class ContactEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    if (!this.props.isSelected) {
      console.log('Contact not selected');
      return;
    }
    this.props.onEdit(this.state.name, this.state.phone);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.contact.name,
      phone: nextProps.contact.phone
    });
  }

  render() {
    return (
      <div>
        <p>
          <input
            type="text" name="name" placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
          <input
            type="text" name="phone" placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            />
          <button onClick={this.handleClick}>
            Edit
          </button>
        </p>
      </div>
    )
  }
}

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        { name: 'Abet', phone: '010-0000-0001'},
        { name: 'Betty', phone: '010-0000-0002'},
        { name: 'Charlie', phone: '010-0000-0003'},
        { name: 'David', phone: '010-0000-0004'}
      ],
      selectedKey: -1,
      selected: {
        name: '',
        phone: ''
      }
    };
    this.insertContact = this.insertContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  insertContact(name, phone) {
    let newState = update(this.state, {
      contactData: {
        $push: [{
          'name': name,
          'phone': phone
        }]
      }
    });
    this.setState(newState);
  }

  removeContact() {
    if (this.state.selectedKey == -1) {
      console.log('Contact not selected');
      return;
    }

    this.setState({
      contactData: update(
        this.state.contactData,
        {
          $splice: [[this.state.selectedKey, 1]]
        }
      ),
      selectedKey: -1
    })
  }

  editContact(name, phone) {
    this.setState({
      contactData: update(
        this.state.contactData,
        {
          [this.state.selectedKey]: {
            name: { $set: name },
            phone: { $set: phone }
          }
        }
      ),
      selected: {
        name: name,
        phone: phone
      }
    });
  }

  onSelect(key) {
    if (key == this.state.selectedKey) {
      console.log('key select cancelled');
      this.setState({
        selectedKey: -1,
        selected: {
          name: '',
          phone: ''
        }
      });
      return;
    }

    this.setState({
      selectedKey: key,
      selected: this.state.contactData[key]
    });
    console.log(key + ' is selected');
  }

  isSelected(key) {
    if (this.state.selectedKey == key) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ul>
          {
            this.state.contactData.map((contact, i) => {
              return (
                <ContactInfo
                  name={contact.name}
                  phone={contact.phone}
                  key={i}
                  contactKey={i}
                  onSelect={this.onSelect}
                  isSelected={this.isSelected(i)}
                  />
              )
            })
          }
        </ul>
        <ContactCreator onInsert={this.insertContact}/>
        <ContactRemover onRemove={this.removeContact}/>
        <ContactEditor
          onEdit={this.editContact}
          isSelected={(this.state.selectedKey != -1)}
          contact={this.state.selected}
          />
      </div>
    )
  };
}

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onSelect(this.props.contactKey);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (JSON.stringify(nextProps) != JSON.stringify(this.props));
  }

  render() {
    console.log('rendered: ' + this.props.name);
    let getStyle = (isSelect) => {
      if (!isSelect) return {};
      let style = {
        fontWeight: 'bold',
        backgroundColor: '#4efcd8'
      };
      return style;
    }

    return (
      <li
        style={getStyle(this.props.isSelected)}
        onClick={this.handleClick}
        >
        {this.props.name} {this.props.phone}
      </li>
    )
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
