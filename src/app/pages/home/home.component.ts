import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnimalComponent } from '../../shared/animal/animal.component';
import { Animal } from '../../core/services/animals.models';
import { AnimalsService } from '../../core/services/animals.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnimalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public topAnimals: Animal[] = [];

  constructor(private animalsService: AnimalsService) {}

  ngOnInit(): void {
    this.topAnimals = this.getTopAnimals();
  }

  public getTopAnimals(): Animal[] {
    return this.animalsService.getTopAnimals();
  }
}
