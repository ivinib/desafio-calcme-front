import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDadosComponent } from './components/list-dados/list-dados.component';
import { AddDadoComponent } from './components/add-dado/add-dado.component';


const routes: Routes = [
  { path: '', redirectTo: 'dados', pathMatch: 'full' },
  { path: 'dados', component: ListDadosComponent },
  { path: 'add', component: AddDadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
