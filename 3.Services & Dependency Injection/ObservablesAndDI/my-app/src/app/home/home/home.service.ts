import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GitHubProfile } from "./gitHubProfile.model";

@Injectable()
export class HomeService {
    constructor( private httpClient: HttpClient)
    {
    }
    getData() {
        return 'Hello from the Service!';
    }

    getGitHubProfile(profile: string) {
        return this.httpClient
        .get<GitHubProfile>(`https://api.github.com/users/${profile}`)
    }
}