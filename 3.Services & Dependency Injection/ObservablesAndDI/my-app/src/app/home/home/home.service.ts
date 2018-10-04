import { Injectable } from "@angular/core";

@Injectable()
export class HomeService {
    getData() {
        return 'Hello from the Service!';
    }
}