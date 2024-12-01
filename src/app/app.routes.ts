import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'chat',
        pathMatch:'full'
    },
    {
        path:'chat',
        loadChildren:()=> import('./modules/chat-feature/chat.routes').then((m)=> m.chatRoutes)
    },
];
