import { Component, OnInit } from '@angular/core';
import { Clown } from '../../shared/models/Clown';
import { ClownService } from '../../services/clown.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  clowns: Clown[] = [];

  constructor(
    private clownService: ClownService
  ) { }

  ngOnInit() {
    this.clownService.getClowns().subscribe(data => {
      this.clowns = data;
    });
  }
}
