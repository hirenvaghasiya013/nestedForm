import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  { path: '', redirectTo:'', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'template', component: TemplateDrivenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
