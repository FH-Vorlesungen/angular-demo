import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, Input,
  OnChanges,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child-hooks',
  standalone: true,
  imports: [],
  templateUrl: './child-hooks.component.html',
  styleUrl: './child-hooks.component.scss'
})
export class ChildHooksComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  @Input() number!: number | null;
  constructor() {
    console.log('CHILD: constructor',this.number)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHILD: On Changes', changes['number'],this.number);
  }

  ngOnInit(): void {
    const style = 'background-color: darkblue;color: white';
    console.log('CHILD: %cOn Init', style,this.number);
  }

  ngAfterContentInit(): void {
    const style = 'background-color: yellow;';
    console.log('CHILD: %cAfter Content Init', style,this.number);
  }

  ngAfterContentChecked(): void {
    const style = 'background-color: red;';
    console.log('CHILD: %cAfter Content Checked', style,this.number);
  }

  ngAfterViewInit(): void {
    console.log('CHILD: After View Init');
  }

  ngAfterViewChecked(): void {
    console.log('CHILD: After View Checked');
  }


}

