import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ClownService } from '../../services/clown.service';
import { Clown } from '../../shared/models/Clown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  fullStars: number[] = [];
  emptyStars: number[] = [];
  clown?: Clown;

  constructor(
    private route: ActivatedRoute,
    private clownService: ClownService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clownService.getClownById(id).subscribe(clown => {
        this.clown = clown;

        if (this.clown?.stars) {
          const stars = this.clown?.stars ?? 0;
          const total = Math.min(stars, 5);
          this.fullStars = Array(total).fill(0);
          this.emptyStars = Array(5 - total).fill(0);
        }
      });
    }
  }
}
