import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnimalComponent } from '../../shared/animal/animal.component';
import { AnimalsService } from '../../core/services/animals.service';
import { Animal } from '../../core/services/animals.models';

@Component({
  selector: 'app-animals-list',
  standalone: true,
  imports: [CommonModule, AnimalComponent],
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.scss',
})
export class AnimalsListComponent implements OnInit {
  public animals: Animal[] = [];
  constructor(private animalsService: AnimalsService) {}
  ngOnInit(): void {
    this.animals = this.animalsService.getAnimals();
  }
}
