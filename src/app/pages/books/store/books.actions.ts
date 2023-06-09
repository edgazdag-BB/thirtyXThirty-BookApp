import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/models/book";


export const loadAllBooks = createAction('[Books] Load All Books');
export const loadAllBooksSuccess = createAction('[Books] Load All Books Success', props<{ books: Book[] }>());
export const loadAllBooksFailure = createAction('[Books] Load All Books Failure', props<{ error : any}>());
export const addBook = createAction('[Books] Add Book', props<{ book: Book }>());
export const addBookSuccess = createAction('[Books] Add Book Success', props<{ book: Book }>());
export const addBookFailure = createAction('[Books] Add Book Failure', props<{ error : any }>());
export const updateBook = createAction('[Books] Update Book', props<{ book: Book }>());
export const updateBookSuccess = createAction('[Books] Update Book Success', props<{ book: Book }>());
export const updateBookFailure = createAction('[Books] Update Book Failure', props<{ error: any }>());
export const deleteBook = createAction('[Books] Delete Book', props<{ id: string }>());
export const deleteBookSuccess = createAction('[Books] Delete Book', props<{ id: string }>());
export const deleteBookFailure = createAction('[Books] Delete Book Failure', props<{ error: any}>());
