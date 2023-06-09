import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BookService } from "src/app/services/book.service";
import { addBook, deleteBook, loadAllBooks, loadAllBooksFailure, loadAllBooksSuccess, updateBook } from "./books.actions";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class BooksEffects {
  
  constructor(
    private actions$: Actions,
    private bookSvc: BookService
  ) {}

  loadAllBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAllBooks),
      switchMap(() => 
        this.bookSvc.getAllBooks().pipe(
          map((books) => loadAllBooksSuccess({books})),
          catchError((error) => of(loadAllBooksFailure(error)))
        )
      )
    )
  );

  addBook$ = createEffect(() => 
    this.actions$.pipe(
      ofType(addBook),

    )
  )

  updateook$ = createEffect(() => 
    this.actions$.pipe(
      ofType(updateBook),

    )
  )

  deleteBook$ = createEffect(() => 
    this.actions$.pipe(
      ofType(deleteBook),

    )
  )

}