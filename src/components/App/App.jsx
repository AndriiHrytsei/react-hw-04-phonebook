/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleAddContact = (e) => {
    e.preventDefault()
    this.setState({
      contacts: [{id: nanoid(), name:this.state.name, number:this.state.number}, ...this.state.contacts]
    })
  }
  render() {
    const {contacts, name, number} = this.state

    return (
      <div>
        <h1>Phonebook</h1>
        <form className="contactForm" onSubmit={this.handleAddContact}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
          />
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
          />
          <button type="submit" >Add contact</button>
        </form>
        <h1>Contacts</h1>
        <ul className="conractList">
          {contacts.map((contact) => (
            <li key={nanoid()}>{contact.name} {contact.number}</li>
          ))}
        </ul>
      </div>
    )
  }
}
