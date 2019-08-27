import { Component, OnInit } from '@angular/core';
import { DicionarioService } from '../dicionario/dicionario.service';
import { Dicionario } from '../dicionario/dicionario.model';

@Component({
  selector: 'app-foto-list',
  templateUrl: './dicionario-list.component.html',
  styleUrls: []
})
export class DicionarioListComponent implements OnInit {

  dicionario:Dicionario[];

  constructor(private dicionarioService: DicionarioService){
    dicionarioService.listaDicionario().subscribe(
      dicionarioDB => this.dicionario = dicionarioDB,
      erroDB => console.log(erroDB)
    );
  }

  ngOnInit() {
  }

}