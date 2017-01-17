import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { AuthService } from '../../utils/auth.service';

import { User } from '../../shared/user';
import { PageTeams } from '../teams/teams';


@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    public user: User;

    todo = {};

    constructor(public navCtrl: NavController, auth: AuthService, public loadingCtrl: LoadingController) {
        this.user = new User('admin@test.com', 'test123@');

    }


    submitForm() {
        let loader = this.loadingCtrl.create({
            content: "Logging in...",
            duration: 1000
        });
        loader.present().then(() => {
            setTimeout(() => {
                this.navCtrl.setRoot(PageTeams);

            }, 900);
        });
        console.log(this.user);
    }

}