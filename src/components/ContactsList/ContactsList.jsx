import { PropTypes } from 'prop-types';
import { ContactListMarkup, ContactListItem, ContactListHeader, ContactListText, ContactListButton } from 'components/ContactsList/ContactsList.styled';

export const ContactsList = ({ requiredCard, deleteCard }) => {

    return (
        <ContactListMarkup>
            {requiredCard.map(({ name, number, id }) => {
                return (
                    <ContactListItem key={id}>
                        <ContactListHeader>{name}</ContactListHeader>
                        <ContactListText>{number}</ContactListText>
                        <ContactListButton type='button' onClick={() => deleteCard(id)}>Delete</ContactListButton>
                    </ContactListItem>
                );
            })}
        </ContactListMarkup>
    );
};


ContactsList.propTypes = {
  requiredCard: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteCard: PropTypes.func.isRequired,
};