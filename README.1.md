
## instalar node 8.11.2



## instalar angular cli
npm install -g @angular/cli

## vamos criar um app
## criar pasta do app
C:\victor\labs\

## criar app
ng new ng-site

## serve application
cd ng-site
ng serve --open

## já temos um app rodando

## Para o serve
Ctrl+C

## Vamos criar os componentes
ng generate component home
ng generate component sobre
ng generate component produtos
ng generate component contato

## vamos criar rotas
## --flat : coloca o arquivo em src / app em vez de sua própria pasta.
## --module=app : informa ao CLI para registrá-lo no array imports do AppModule.
ng generate module app-routing --flat --module=app

## Configurando o src/app/app-routing.module.ts (v1)
´´´
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
´´´

## adicionando rotas
import { HomeComponent }      from './home/home.component';
import { SobreComponent }      from './sobre/sobre.component';
import { ProdutosComponent }      from './produtos/produtos.component';
import { ContatoComponent }      from './contato/contato.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'contato', component: ContatoComponent }
];

## Primeiro você deve inicializar o roteador e iniciá-lo ouvindo as alterações de localização do navegador.
imports: [ RouterModule.forRoot(routes) ],

## Add RouterOutlet
## src/app/app.component.html (router-outlet)
<h1>{{title}}</h1>
<router-outlet></router-outlet>
<app-messages></app-messages>

## execute
ng serve

## tem que aparecer => Compiled successfully.

## Add navigation link
```
<h1>{{title}}</h1>
<nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/sobre">sobre</a>
  <a routerLink="/produtos">produtos</a>
  <a routerLink="/contatos">Contatos</a>
</nav>
<router-outlet></router-outlet>
<app-messages></app-messages>
```

## criando seo service

ng g service seo --module app