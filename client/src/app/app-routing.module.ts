import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUrlsComponent } from './list-urls/list-urls.component';
import { OpenUrlComponent } from './open-url/open-url.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListUrlsComponent
  },
  {
    path: 'open/:code',
    component: OpenUrlComponent
  },
  {
    path: '**',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
