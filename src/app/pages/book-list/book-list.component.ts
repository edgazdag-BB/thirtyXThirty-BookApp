import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  @Input() books!: Book[];
  @Input() displayedColumns!: string[];
  @Output() addBook: EventEmitter<Book> = new EventEmitter<Book>()
  @Output() updateBook: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() deleteBook: EventEmitter<string> = new EventEmitter<string>();
  
  delete(event: any, id: string) {
    event.stopPropagation();
    this.deleteBook.emit(id);
  }
}
