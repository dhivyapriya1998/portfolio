import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  isMenuOpen: boolean = false;
  routes: Route[];

  constructor(private router: Router) {
    this.routes = this.router.config;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  navigateToRoute(path: string | undefined) {
    this.router.navigate([path]);
  }
}
