import { Component, OnInit } from '@angular/core';
import { of, Observable} from 'rxjs';
import { getParam } from './utils/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Australia';
  ngOnInit() {
  }

}
