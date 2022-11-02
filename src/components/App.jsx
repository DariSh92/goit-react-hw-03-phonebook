import { Component } from 'react'; 
import { ContactForm } from 'components/ContactForm/ContactForm';
import { nanoid } from 'nanoid'
import { Container } from 'components/App.styled';
import { Filter } from 'components/FilterField/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';




export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = (values, { resetForm }) => {
    resetForm();
  
    const { name, number } = values;

    const contact = {
      name,
      number,
    };
   
    const dublicateContact = this.findDublicateContact(
      contact,
      this.state.contacts
    );

    dublicateContact
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...values, id: nanoid() }],
      }));
  };

  findDublicateContact = (contact, contactsList) => {
    return contactsList.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };
  
  
  
  onFilterChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };
  
  getRequiredCard = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  deleteCard = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const requiredCard = this.getRequiredCard();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
        <ContactsList requiredCard={requiredCard} deleteCard={this.deleteCard} />
      </Container>
    );
  }
};
