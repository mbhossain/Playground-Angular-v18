import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'selector',
        loadComponent: () => import('./features/selector/common/common.component').then(m => m.CommonComponent)
    }
];
