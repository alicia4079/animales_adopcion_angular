import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Animal } from '../../core/services/animals.models';
import { AnimalsService } from '../../core/services/animals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from './validators';

@Component({
  selector: 'app-animal-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss'],
})
export class AnimalDetailComponent implements OnInit {
  public animal?: Animal;
  public enrolementForm?: FormGroup;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listenRouteParamsChanges();
  }

  private listenRouteParamsChanges(): void {
    this.activatedRoute.params.subscribe((params) => {
      const animalId = +params['id'];
      if (!animalId) {
        return;
      }

      this.animal = this.animalsService.getAnimalById(animalId);
      if (this.animal) {
        this.initializeEnrolementForm();
      } else {
        console.error('Animal no encontrado');
      }
    });
  }

  private initializeEnrolementForm(): void {
    this.enrolementForm = new FormGroup({
      nombre: new FormControl(this.animal?.nombre || '', Validators.required),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      DNI: new FormControl('', [
        Validators.required,
        CustomValidators.dniValidator(),
      ]),
      age: new FormControl('', [
        Validators.required,
        CustomValidators.ageValidator(),
      ]),
      other_animals: new FormControl(false),
    });

    this.enrolementForm
      .get('other_animals')
      ?.valueChanges.subscribe((hasOtherAnimals) => {
        if (hasOtherAnimals) {
          this.enrolementForm?.addControl(
            'animal_description',
            new FormControl('', Validators.required)
          );
        } else {
          this.enrolementForm?.removeControl('animal_description');
        }
      });
  }

  public enroleAnimal(): void {
    if (!this.enrolementForm || !this.enrolementForm.valid || !this.animal) {
      return;
    }
    this.animalsService.enroleAnimals(this.animal.id);
    this.enrolementForm.reset();
    this.router.navigate(['/animals']);
  }
}
