import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./main/main-routing').then((m) => m.MAIN_ROUTES),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routing').then((m) => m.AUTH_ROUTES),
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];
