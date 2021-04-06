import { Component } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public appCounterService: AppCounterService) {}
}
