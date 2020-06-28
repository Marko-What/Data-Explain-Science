import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiDataService } from '../api-data.service';


@Component({
  selector: 'app-database-labels',
  templateUrl: './database-labels.component.html',
  styleUrls: ['./database-labels.component.css']
})
export class DatabaseLabelsComponent implements OnInit, OnDestroy {

    private subscription:Subscription;
		 public databaseLabels:string;		

  constructor(private _ApiDataService: ApiDataService) {
		 
  }/* end of constructor */









  ngOnInit(): void {
			this.subscription = this._ApiDataService.notifyMessageE().subscribe(message => {
					this.databaseLabels = message;
			});

  }

  
	
	ngOnDestroy() {
		if (this.subscription) {
		this.subscription.unsubscribe();
  	}
	}








}
