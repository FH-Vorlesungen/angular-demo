import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {ChildHooksComponent} from './child-hooks/child-hooks.component';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-component-hooks',
  standalone: true,
  imports: [
    ChildHooksComponent,
    AsyncPipe
  ],
  templateUrl: './hooks-basics.component.html',
  styleUrl: './hooks-basics.component.scss'
})
export class HooksBasicsComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  @Input() number!: number | null;
  constructor() {
    console.log('constructor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes', changes);
  }

  ngOnInit(): void {
    const style = 'background-color: darkblue;color: white';
    console.log('%cOn Init', style);
  }

  ngAfterContentInit(): void {
    const style = 'background-color: yellow;';
    console.log('%cAfter Content Init', style);
  }

  ngAfterContentChecked(): void {
    const style = 'background-color: red;';
    console.log('%cAfter Content Checked', style);
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('After View Checked');
  }


}
