import { Routes } from '@angular/router';
import { CoolRouterPages } from './routing-enum';
import { IntroductionComponent } from './learn/introduction/introduction.component';
import { StartComponent } from './start/start.component';
import { ObservableCompletionComponent } from './components/observable-completion/observable-completion.component';
import { SwitchMapExampleComponent } from './components/switch-map-example/switch-map-example.component';
import { SubscriptionsComponent } from './learn/subscriptions/subscriptions.component';
import { OperatorsComponent } from './learn/operators/operators.component';
import { SubjectsComponent } from './learn/subjects/subjects.component';
import { AsyncPipeExampleComponent } from './examples/async-pipe-example/async-pipe-example.component';
import { MapExampleComponent } from './examples/map-and-filter-example/map-example.component';
import {
  SwitchMapAndDebounceExampleComponent
} from './examples/switch-map-and-debounce-example/switch-map-and-debounce-example.component';
import { CombineLatestExampleComponent } from './examples/combine-latest-example/combine-latest-example.component';
import { ForkJoinExampleComponent } from './examples/fork-join-example/fork-join-example.component';
import { InputHandlingComponent } from './practice/input-handling/input-handling.component';
import { MorePracticeComponent } from './practice/more-practice/more-practice.component';

export const routes: Routes = [
  {
    path: ``,
    component: StartComponent
  },
  {
    path: `${CoolRouterPages.Start}`,
    component: StartComponent
  },
  {
    path: `${CoolRouterPages.Introduction}`,
    component: IntroductionComponent
  },
  {
    path: `${CoolRouterPages.Subscriptions}`,
    component: SubscriptionsComponent
  },
  {
    path: `${CoolRouterPages.Operators}`,
    component: OperatorsComponent
  },
  {
    path: `${CoolRouterPages.Subjects}`,
    component: SubjectsComponent
  },


  {
    path: `${CoolRouterPages.ObservableCompletion}`,
    component: ObservableCompletionComponent
  },
  {
    path: `${CoolRouterPages.ExampleSwitchMap}`,
    component: SwitchMapExampleComponent
  },
  {
    path: `${CoolRouterPages.AsyncPipeExample}`,
    component: AsyncPipeExampleComponent
  },
  {
    path: `${CoolRouterPages.MapAndFilterExample}`,
    component: MapExampleComponent
  },
  {
    path: `${CoolRouterPages.SwitchMapAndDebounceExample}`,
    component: SwitchMapAndDebounceExampleComponent
  },
  {
    path: `${CoolRouterPages.ConbineLatestExample}`,
    component: CombineLatestExampleComponent
  },
  {
    path: `${CoolRouterPages.ForkJoinExample}`,
    component: ForkJoinExampleComponent
  },

  // practice
  {
    path: `${CoolRouterPages.PracticeInputHandling}`,
    component: InputHandlingComponent
  },
  {
    path: `${CoolRouterPages.MorePracticeIdeas}`,
    component: MorePracticeComponent
  },
];
