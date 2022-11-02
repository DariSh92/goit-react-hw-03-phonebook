import { PropTypes } from 'prop-types';
import { FilterWrap, FilterInput, FilterLabel } from 'components/FilterField/Filter.styled';

export const Filter = ({ value, onFilterChange }) => {
    return (
        <FilterWrap>
            <FilterLabel htmlFor="text">Find contacts by name</FilterLabel>
             <FilterInput
                type="text"
                name="filter"
                value={value}
                onChange={onFilterChange}
            />
        </FilterWrap>

    );
    
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};