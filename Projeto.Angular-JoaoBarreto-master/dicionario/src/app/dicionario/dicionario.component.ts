import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dicionario',
    templateUrl: './dicionario.component.html'
})
export class DicionarioComponent {
@Input() palavra:string;
@Input() sinonimo:string;
@Input() antonimo:string;
@Input() significado:string;


}