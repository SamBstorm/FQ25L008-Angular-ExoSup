import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ivoiture } from '../demo-reactiveForms/models/ivoiture';
import { checkMajority } from '../../../../core/validators/check-majority';

@Component({
  selector: 'app-demo-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './demo-reactive-forms.html',
  styleUrl: './demo-reactive-forms.scss'
})

export class DemoReactiveForms {
  private readonly _fb : FormBuilder = inject(FormBuilder);

  conductors = this._fb.array([
    this._fb.group({
      firstname : [null,[Validators.required]],
      lastname : [null,[Validators.required]],
      birthdate : [null, [Validators.required, checkMajority()]]
    })
  ]);

  voitureForm : FormGroup = this._fb.group({
    matricule : [null,[Validators.required, Validators.pattern(/^[A-Z0-9]-[A-Z]{3}-[0-9]{3}$/)]],      //formControl : 2 valeurs dans le tableau : 
    brand : [null,[Validators.required, Validators.minLength(4), Validators.maxLength(10)]],          //              - première valeur : valeur initiale de l'input
    model : [null,[Validators.required, Validators.minLength(4), Validators.maxLength(10)]],           //              - seconde valeur : tableau de Validators
    conductors : this.conductors
  });

  onSubmit(): void{
    if(this.voitureForm.invalid) throw new Error('Formulaire invalide');
    let newVoiture : Ivoiture = {
      matricule : this.voitureForm.value.matricule,
      brandModel : `${this.voitureForm.value.brand} ${this.voitureForm.value.model}`,
      conductors : this.conductors.value.map(c => `${c.firstname} ${c.lastname}`)
    };

    console.log(newVoiture);
  }

  addNewConductor() : void{
    this.conductors.push(
      this._fb.group({
      firstname : [null,[Validators.required]],
      lastname : [null,[Validators.required]],
      birthdate : [null, [Validators.required, checkMajority()]]
    }));
  }

  removeConductor(index : number) : void{
    if(index < 0) throw new Error('Mauvais indice');
    this.conductors.removeAt(index);
  }
}
