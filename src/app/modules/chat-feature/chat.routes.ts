import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const chatRoutes: Routes = [
    {
        path:'',
        redirectTo:'',
        pathMatch:'full'
    },
    {
        path:'',
        component:LayoutComponent
    },
];
