import {Component, inject} from '@angular/core';
import {HttpDemoDataService} from './http-demo-data.service';
import {AsyncPipe} from '@angular/common';
import {forkJoin, map, tap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-http-demo-landing',
  standalone: true,
  imports: [
    AsyncPipe,
  ],
  templateUrl: './http-demo-landing.component.html',
  styleUrl: './http-demo-landing.component.scss',
})
export class HttpDemoLandingComponent {

  private httpDemoDataService = inject(HttpDemoDataService);
  public demoData$ = this.httpDemoDataService.getDemoData();
  public demoRelatedData$ = this.httpDemoDataService.getDemoRelatedData();
  public combined$ = forkJoin([this.demoData$, this.demoRelatedData$])
    .pipe(
      takeUntilDestroyed(),
      map((joinedSource) => {
        const demo = joinedSource[0];
        const related = joinedSource[1];
        return related.map(r => {
          const foundDemoData = demo.find(d => d.id === r.demoId);
          if (foundDemoData) {
            return {
              id: foundDemoData.id,
              title: foundDemoData.title,
              relatedId: r.id,
              text: r.text
            };
          }
          return null;
        }).filter(x => x);
      }),tap(console.log));
}
