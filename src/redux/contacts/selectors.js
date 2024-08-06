import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from '../filters/selectors';

export const selectLoading = (state) => state.contacts.loading;

export const selectFilter = (state) => state.contacts.filter;

export const selectAllContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectFilterValue, selectAllContacts],
  (filterValue, contacts) => {
    filterValue = filterValue.toLowerCase().trim();

    if (!filterValue) {
      return contacts;
    }

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filterValue) ||
        contact.number.includes(filterValue)
    );
  }
);