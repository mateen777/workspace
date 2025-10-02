import { Routes } from '@angular/router';
import { TextEditorComponent } from './shared/components/text-editor/text-editor.component';

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
    {
        path:'editor',
        loadComponent: () => TextEditorComponent
    },
];
