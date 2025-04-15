import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, Router  } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private router: Router) {}

  get isDetailRoute(): boolean {
    return ['/detail', '/about', '/rules'].some(path => this.router.url.includes(path));
  }

}
