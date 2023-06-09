import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { BooksComponent } from './pages/books/books.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'app', 
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'books',
        component: BooksComponent,
      },
      { 
        path: '',   
        redirectTo: 'home', 
        pathMatch: 'full' 
      }
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
