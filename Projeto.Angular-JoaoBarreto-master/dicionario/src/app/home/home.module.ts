import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [ 
        HomeComponent,
        
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class HomeModule {}