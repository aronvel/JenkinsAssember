import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return[{
      name: 'Asia',
      data: [502,635,809,947,1402,3634,5268]
    },{
      name: 'Africa',
      data: [111,222,333,444,42,56,60]
    },{
      name: 'Europ',
      data: [205,536,908,749,2401,4363,8645]
    }
  ]}
}
