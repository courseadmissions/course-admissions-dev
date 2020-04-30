import { Component, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'Course Admissions';
  
    ngAfterViewChecked(): void {
      window['isViewRendered'] =true;
    }
}
