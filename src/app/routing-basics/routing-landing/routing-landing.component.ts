import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-routing-landing',
  standalone: true,
  imports: [],
  templateUrl: './routing-landing.component.html',
  styleUrl: './routing-landing.component.scss',
})
export class RoutingLandingComponent {

  private activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.data.subscribe(console.log);
  }
}
