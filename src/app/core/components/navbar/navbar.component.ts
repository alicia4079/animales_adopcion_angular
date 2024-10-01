import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  public goToAnimals(): void {
    this.router.navigate(['/animals']);
  }

  public goToHome(): void {
    this.router.navigate(['/']);
  }

  goToAdoption(animalId: number): void {
    this.router.navigate(['/adoptar', animalId]);
  }
}
