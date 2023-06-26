/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: ''
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
  handleDeleteContact = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) =>  contact.id !== contactId)
    })
  }
  handleFilter = (e) => {
    this.setState({      
      [e.target.name]: e.target.value,
      contacts: this.state.contacts.find(contact => contact.name.includes(this.state.filter))
    })
  }
  reset = () => {
    this.setState({
      contacts: [],
      name: '',
      number: '',
      filter: ''
    })
  }
  render() {
    const { contacts, filter } = this.state
    return (
      <div>
        <h1>Phonebook</h1>
        <form className="contactForm" onSubmit={this.handleAddContact}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
          />
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            id='number'
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
          />
          <button type="submit" >Add contact</button>
        </form>
        <h1>Contacts</h1>
        <label htmlFor="filter">Find contacts by name</label>
        <input type="text" name="filter" id='filter' onChange={this.handleFilter}/>
        <ul className="contactList">
          {contacts.map(contact => (
            <li key={nanoid()}> 
              <p>{contact.name}: {contact.number}</p> 
              <button type="button" onClick={()=> this.handleDeleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
