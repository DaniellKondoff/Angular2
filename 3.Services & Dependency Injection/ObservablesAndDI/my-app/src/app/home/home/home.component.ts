import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { GitHubProfile } from './gitHubProfile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile: GitHubProfile;
  someData: string;

  constructor(private homeService: HomeService,) {
    this.someData = homeService.getData();
   }

  ngOnInit() {
    this.homeService
    .getGitHubProfile('nakov')
    .subscribe(data => this.profile = data);
  }

}
