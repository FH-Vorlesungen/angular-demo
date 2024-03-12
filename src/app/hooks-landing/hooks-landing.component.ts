import {Component} from '@angular/core';
import {HooksBasicsComponent} from '../hooks-basics/hooks-basics.component';
import {interval, take} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-hooks-landing',
  standalone: true,
  imports: [
    HooksBasicsComponent,
    AsyncPipe
  ],
  templateUrl: './hooks-landing.component.html',
  styleUrl: './hooks-landing.component.scss'
})
export class HooksLandingComponent {
  title = 'angular-demo';
  public componentBasicsInput = interval(5).pipe(take(5));
}
