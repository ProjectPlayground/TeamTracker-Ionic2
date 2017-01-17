import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {

    teams: any[] = [];
    teamNames: String[];
    constructor() {
        this.teamNames = ['Red', 'Blue', 'Green', 'Yellow', 'Black'];

        for (var index = 0; index < 5; index++) {
            this.teams.push({
                name: this.teamNames[index],
                subtitle: `Nisi cupidatat commodo commodo in sint culpa cillum in officia.`,
                description: `Qui deserunt minim elit consequat est esse. Nulla laboris occaecat eu elit non proident esse incididunt aliqua sit sint. Do quis commodo labore ea dolore minim duis ullamco ad. Nisi consequat proident ut sunt sit labore dolor laboris esse duis anim. Veniam anim irure sit laborum et culpa culpa aute.`,
                avatar: 'assets/avatars/avatar' + index + '.jpg',
                image: 'assets/cards/card' + index + '.jpg',
                logo: 'assets/team_logo/team' + index + '.png',
                members: [
                    { name: 'Member' + (index + Math.floor((Math.random() * 100))), location: { lat: 42.69070043, lon: 23.33013296 } },
                    { name: 'Member' + (index + Math.floor((Math.random() * 100))), location: { lat: 42.69016419, lon: 23.33112001 } }
                ]
            })



        }
    }

    getTeams() {
        return this.teams;
    }
}