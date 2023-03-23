import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponentComponent } from './layout-component/content-component/content-component.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponentComponent,
  },
  {
    path: 'home',
    component: ContentComponentComponent,
  },
  {
    path: 'info', loadChildren: () => import('./layout-component/info/info-module/info.module').then((m) =>  m.InfoModule)
  },
  { 
    path: 'collaborations', loadChildren: () => import('./layout-component/collaborations/collaborations.module').then(m => m.CollaborationsModule) 
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
