import { Component, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart, ActivationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string = '';
  public tituloSubs$: Subscription;

  constructor(private router: Router) {

    this.tituloSubs$ = this.getArgumentosRuta()
      .subscribe((data) => {
        if (data !== null) {
          this.titulo = data;
          document.title = `AdminPro - ${this.titulo}`;
        }
      });
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events
      .pipe(
        map((event: Event) => {
          if (event instanceof ActivationEnd && event.snapshot.firstChild === null) {
            return event.snapshot.data['titulo'];
          }
          return null;
        })
      );
  }

}
