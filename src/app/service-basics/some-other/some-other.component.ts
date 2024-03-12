import {Component, inject} from '@angular/core';
import {GlobalServiceComponent} from '../global-service/global-service.component';
import {GlobalService} from '../global-service/global.service';
import {LocalService} from '../local-service/local.service';

@Component({
  selector: 'app-service-basics',
  standalone: true,
  imports: [
    GlobalServiceComponent
  ],
  templateUrl: './some-other.component.html',
  styleUrl: './some-other.component.scss',
  providers: [LocalService]

})
export class SomeOtherComponent {
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
