import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BooksState, selectAll } from "./books.state";


export const booksFeatureSelector = createFeatureSelector<BooksState>('books');

export const selectAllBooks = createSelector(
  booksFeatureSelector,
  selectAll
);
