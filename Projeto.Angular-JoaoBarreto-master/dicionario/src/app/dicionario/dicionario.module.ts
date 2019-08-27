import { NgModule } from "@angular/core";
import { DicionarioComponent } from './dicionario.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DicionarioRegistroComponent } from '../dicionario-registro/dicionario-registro.component';
import { DicionarioListComponent } from '../dicionario-list/dicionario-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DicionarioComponent,
        DicionarioRegistroComponent,
        DicionarioListComponent
    ],
    // são os modulos que serão incorporados nesse arquivo
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    // são os componentes que serão permitido 'acesso por terceiros'
    exports: [
        DicionarioComponent
    ]
})
export class DicionarioModule {}