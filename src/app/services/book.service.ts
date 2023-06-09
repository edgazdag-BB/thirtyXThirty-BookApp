import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API_URL: string = "https://json-server-vercel-five-chi.vercel.app/";
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.API_URL}books/`);
  }

  createBook(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>(`${this.API_URL}books/`, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.API_URL}books/${book.id}`, book);
  }

  deleteBook(id: string) {
    return this.http.delete<string>(`${this.API_URL}books/${id}`);
  }
}
