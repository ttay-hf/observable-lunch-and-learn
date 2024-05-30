import { Component } from '@angular/core';
import { delay, first, map, Observable, of, tap } from 'rxjs';

interface ApiResponse {
  id: number;
  //name: string;
  description: string;
}

interface GUIDisplay {
  id: number;
  name: string;
}

@Component({
  selector: 'app-map-example',
  standalone: true,
  imports: [],
  templateUrl: './map-example.component.html',
  styleUrl: './map-example.component.scss'
})
export class MapExampleComponent {
  mappedData: GUIDisplay[] = [];

  fakeApiResponse(): Observable<ApiResponse[]> {
    // creation operator
    return of([
      {
        id: 1,
        //name: 'test 1',
        description: 'test 1',
      },
      {
        id: 2,
        //name: 'test 2',
        description: 'test 2',
      },
      {
        id: 3,
        //name: 'test 3',
        description: 'test 3',
      },
      {
        id: 4,
        //name: 'test 4',
        description: 'test 4',
      },
    ]).pipe(first());
  }

  callApi() {
    return this.fakeApiResponse().pipe(
      delay(1000),
      first(),
      map((data: ApiResponse[]): GUIDisplay[] => data.map((d) => ({
        id: d.id,
        name: d.description,
      }))),
      tap((data) => {
        this.mappedData = data;
      }),
    ).subscribe();
  }
}
