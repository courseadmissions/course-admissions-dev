import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmailService {
    emailSeviceUrl: string = "https://courseadmissionapi.azurewebsites.net/api/email/";

    constructor(private http: HttpClient) {
    }

    public sendContactUsEmail(data: any) {
        this.http.post(this.emailSeviceUrl + 'contact',data)
            .subscribe(data => {
                return true;
            });
    }

    public sendRegisterEmail(data: string) {
        this.http.post(this.emailSeviceUrl + 'enquiry', data)
            .subscribe(data => {
                return true;
            });
    }
}