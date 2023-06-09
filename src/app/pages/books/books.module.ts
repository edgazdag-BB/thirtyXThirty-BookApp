import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { booksReducer } from './store/books.state';
import { BooksEffects } from './store/books.effects';
 
@NgModule({
  imports: [
    StoreModule.forFeature('books', booksReducer),
    EffectsModule.forFeature([BooksEffects])
  ],
})
export class BooksModule {}