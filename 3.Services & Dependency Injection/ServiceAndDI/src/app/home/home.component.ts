import { Component, OnInit } from '@angular/core';
import { HomeData } from './home.data';
import { MailService } from './mail.service';
import { GitHubProfileInfo } from './gitHubProfileInfo';


@Component({
    selector:'home',
    providers: [HomeData, MailService],
    template: `<h1>Home - {{gitHubProfileInfo?.login}} - {{gitHubProfileInfo?.public_repos}}</h1>`
})

export class HomeComponent implements OnInit {
    gitHubProfileInfo : GitHubProfileInfo;

    constructor(private homeData: HomeData){
    }

    ngOnInit(){
       this.homeData
        .getData()
        .then(profileInfo => {
            console.log(profileInfo);
            this.gitHubProfileInfo = profileInfo;
        });
    }
}