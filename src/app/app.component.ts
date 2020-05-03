import { Component, AfterViewChecked } from '@angular/core';
import { Regsiter } from './models/register.model';
import { ContactUs } from './models/contact-us.model';
import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  public title = 'Course Admissions';
  public registerForm: Regsiter;
  public contactUsForm: ContactUs;

  constructor(private emailService:EmailService) {    
    this.registerForm = new Regsiter();
    this.contactUsForm = new ContactUs();
  }

  ngAfterViewChecked(): void {
    window['isViewRendered'] = true;
  }

  public submitContactUs(): void {
    this.emailService.sendContactUsEmail(this.contactUsForm);
  }
}
