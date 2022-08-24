import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
	selector: 'app-authentication',
	templateUrl: './authentication.component.html',
	styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

	constructor(private local: LocalService) { }

	ngOnInit(): void {
		this.local.saveData("id", "123123123");
	}

}
