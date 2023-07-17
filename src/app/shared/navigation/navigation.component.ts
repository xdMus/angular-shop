import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isXSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
    map((result) => result.matches),
    shareReplay()
  );
}
