import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importando os componentes para criar as rotas
import { HomeComponent }      from './home/home.component';
import { SobreComponent }      from './sobre/sobre.component';
import { ProdutosComponent }      from './produtos/produtos.component';
import { ContatoComponent }      from './contato/contato.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  { path: 'sobre', redirectTo: '/sobre/a-mycap', pathMatch: 'full' },
  { path: 'sobre/:page', component: SobreComponent },
  
  { path: 'produtos', component: ProdutosComponent },
  
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  
}
