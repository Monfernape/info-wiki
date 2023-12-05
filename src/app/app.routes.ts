import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.component';
import { DashboardPage } from './pages/dashboard/dashboard.component';
import { ContactsPage } from './pages/contacts/contacts.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'dashboard',
        component: DashboardPage

    },
    {
        path: 'contacts',
        component: ContactsPage,
    }
];
