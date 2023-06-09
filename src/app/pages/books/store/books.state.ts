import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Book } from "src/app/models/book";
import { loadAllBooksSuccess } from "./books.actions";


export interface BooksState extends EntityState<Book>{
  selectedBookId: number | null
}

export const bookAdapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialBooksState: BooksState =  bookAdapter.getInitialState({
  ids: [],
  entities: {},
  selectedBookId: null
});

export const booksReducer = createReducer<BooksState>(
  initialBooksState,
  on(loadAllBooksSuccess, (state, { books }) => bookAdapter.setAll(books, state)),

);

export const getSelectedBookId = (state: BooksState) => state.selectedBookId;

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = bookAdapter.getSelectors();