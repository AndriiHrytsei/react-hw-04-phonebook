export default function ContactList({items, filterVal, deleteContact}){
    return(
        <ul className="contactList">
          {items.filter(contact => { 
            return filterVal.toLowerCase() === ''
              ? contact
              : contact.name.toLowerCase().includes(filterVal)
          }).map(contact => {
            return (
              <li key={contact.id}>
                <p>{contact.name}: {contact.number}</p>
                <button type="button" onClick={() => deleteContact(contact.id)}>Delete</button>
              </li>
            )
          })}
        </ul>
    )
}