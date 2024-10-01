import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Animal } from '../../core/services/animals.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent {
  @Input() animal?: Animal;

  constructor(private router: Router) {}

  public onSeeMoreInfo(): void {
    if (!this.animal) {
      return;
    }
    this.router.navigate(['animal', this.animal.id]);
  }
}
