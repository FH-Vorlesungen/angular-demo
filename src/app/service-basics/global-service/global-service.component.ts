import {Component, inject} from '@angular/core';
import {GlobalService} from './global.service';
import {LocalService} from '../local-service/local.service';

@Component({
  selector: 'app-global-service',
  standalone: true,
  imports: [],
  templateUrl: './global-service.component.html',
  styleUrl: './global-service.component.scss',
  providers: [{provide: LocalService, useClass: LocalService}]
})
export class GlobalServiceComponent {

  private globalService: GlobalService = inject(GlobalService);
  private localService: LocalService = inject(LocalService);

  constructor() {
    this.globalService.state += 1;
    this.localService.state += 1;
  }

  get globalServiceState(): number {
    return this.globalService.state;
  }

  whenIncreaseGlobalState(number: number) {
    this.globalService.state += number;
  }
  whenIncreaseLocalState(number: number) {
    this.localService.state += number;
  }

  get localServiceState(): number {
    return this.localService.state;
  }
}
