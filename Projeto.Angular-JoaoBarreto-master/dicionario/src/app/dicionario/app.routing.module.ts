import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';

import { DicionarioRegistroComponent } from '../dicionario-registro/dicionario-registro.component';
import { DicionarioListComponent } from '../dicionario-list/dicionario-list.component';

const routes:Routes = [
    { path: '', component: HomeComponent },
    { path: 'form', component: DicionarioRegistroComponent },
    { path: 'list', component: DicionarioListComponent },
    { path: '**', component: NotFoundPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}