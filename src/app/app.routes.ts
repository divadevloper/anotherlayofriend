import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'message/:id', component: MessageComponent },
];
