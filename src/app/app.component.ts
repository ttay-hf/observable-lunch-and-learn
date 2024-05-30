import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ObservableCompletionComponent } from './components/observable-completion/observable-completion.component';
import { SwitchMapExampleComponent } from './components/switch-map-example/switch-map-example.component';
import { CommonModule } from '@angular/common';
import { CoolRouterPages } from './routing-enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ObservableCompletionComponent, SwitchMapExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-observables';
  showSwitchMapExample = true;
  CoolRouterPages = CoolRouterPages;
  page: CoolRouterPages = CoolRouterPages.Start;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.showSwitchMapExample = false;
    }, 3000);
  }

  routeToPage(page: CoolRouterPages) {
    this.router.navigate([page]);
  }
}
