import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  valorBusca:string

  msgNoConsole(){
    console.log('Elemento clicado')
  }
}