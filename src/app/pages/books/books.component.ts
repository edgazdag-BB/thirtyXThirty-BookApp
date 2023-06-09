import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import { selectAllBooks } from './store/books.selectors';
import { loadAllBooks } from './store/books.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'year', 'delete'];
  books$ = this.store.pipe(select(selectAllBooks));
  
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadAllBooks());
  }

  addBook() {

  }

  updateBook(book: Book) {

  }

  deleteBook(id: string) {

  }
}
