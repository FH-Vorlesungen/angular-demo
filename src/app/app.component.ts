import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {interval, take} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {HooksBasicsComponent} from './hooks-basics/hooks-basics.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HooksBasicsComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-demo';
  public componentBasicsInput = interval(5).pipe(take(5))
}
