import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DicionarioService } from '../dicionario/dicionario.service';
import { Dicionario } from '../dicionario/dicionario.model';

@Component({
  selector: 'app-foto-registro',
  templateUrl: './dicionario-registro.component.html',
  styleUrls: []
})
export class DicionarioRegistroComponent implements OnInit {
   
  dicForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dicionarioService:DicionarioService, private router: Router) {}

  ngOnInit(): void {
    this.dicForm = this.formBuilder.group({
      palavra: ['', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30)
      
      ]
    ],
      sinonimo: ['', Validators.required,
                      
    
    ],
    antonimo: ['', Validators.required,
                   

    
    ],
      significado: ['', Validators.required
    
    ]
    
    });
  }

  addPalavra() {
    const novaPalavra = this.dicForm.getRawValue() as Dicionario;
    this.dicionarioService
    .adcPalavra(novaPalavra)
    .subscribe(
      ()=> this.router.navigateByUrl('/list'),
      err => {
        console.log(err)
        this.dicForm.reset();
      }
    );
  }

  

  }