import { TeamService } from '../../utils/teams.service';
import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { PageMap } from '../map/map';

@Component({
    selector: 'page-teams',
    templateUrl: 'teams.html'
})
export class PageTeams {

    teams: any[];
    team;
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public teamService: TeamService
    ) {
        this.team = this.navParams.get('team');
        this.teams = this.teamService.getTeams();
    }
    opemMapWithMembers(members) {
        this.navCtrl.push(PageMap, {
            members: members
        })
    }
    teamTapped(event, team) {
        console.log(team);
        this.navCtrl.push(PageTeams, {
            team: team
        })
    }


}
