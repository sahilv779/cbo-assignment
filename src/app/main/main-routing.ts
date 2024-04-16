import {MainComponent} from './main.component';
import {Routes} from '@angular/router';

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        component: MainComponent,
    },
    { path: '', redirectTo: 'section', pathMatch: 'full' },
];
