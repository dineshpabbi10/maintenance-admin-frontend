import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public sidebarSubject = new BehaviorSubject<boolean>(false);
  public sidebarSubject$ = this.sidebarSubject.asObservable();
  constructor() { }
}
