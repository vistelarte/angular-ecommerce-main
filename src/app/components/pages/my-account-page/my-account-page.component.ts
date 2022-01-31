import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-my-account-page',
    templateUrl: './my-account-page.component.html',
    styleUrls: ['./my-account-page.component.scss']
})
export class MyAccountPageComponent implements OnInit {

    private API_URL = environment.API_URL;
    private readonly notifier: NotifierService;

    regForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    logForm = this.formBuilder.group({
        identifier: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private http: HttpClient,
        notifierService: NotifierService
    ) {
        this.notifier = notifierService;
    }

    ngOnInit(): void {
    }

    /**
    * User Regestration
    */
    onRegister(): void {
        let userData = this.regForm.value;
        const {username,email,password} = userData;
        let url = `${this.API_URL}/auth/local/register`;
        this.http
            .post<any>(url, {
                username,
                email,
                password
            })
            .subscribe((response) => {
                this.notifier.notify('success', 'Congratulations! Registration successful. Please log in using the credential.');
            },
            (e) => {
                this.notifier.notify('error', e.error.data[0].messages[0].message);
            });
    }

    /**
    * User Login
    */
    onLogin(): void {
        let userData = this.logForm.value;
        const {identifier,password} = userData;
        let url = `${this.API_URL}/auth/local`;
        this.http
            .post<any>(url, {
                identifier,
                password
            })
            .subscribe((response) => {
                localStorage.setItem('vaxim_users', JSON.stringify(response));
                this.notifier.notify('success', 'Congratulations! Login successful.');
                this.router.navigate(['/'])
                .then(() => {
                    window.location.reload()
                })
            },
            (e) => {
                this.notifier.notify('error', e.error.data[0].messages[0].message);
            });
    }

}