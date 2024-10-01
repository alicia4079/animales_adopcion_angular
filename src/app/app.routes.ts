import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'animals',
    loadComponent: () =>
      import('./pages/animals-list/animals-list.component').then(
        (m) => m.AnimalsListComponent
      ),
  },
  {
    path: 'animal/:id',
    loadComponent: () =>
      import('./pages/animal-detail/animal-detail.component').then(
        (m) => m.AnimalDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
