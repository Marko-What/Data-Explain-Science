import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiDataService } from '../api-data.service';

import { Subscription } from 'rxjs';
import  { medicalGraphType } from '../typings/dataTypings';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit, OnDestroy {

 	 	types: string[] = ["spline", "stackedspline", "fullstackedspline"];

		architecturesInfo:medicalGraphType[];
  
		private subscription:Subscription;


		constructor(private _ApiDataService: ApiDataService) {
      // 		this.architecturesInfo = _ApiDataService.getGraphData();
    }








  ngOnInit(): void {
			this.subscription = this._ApiDataService.notifyMessageC().subscribe(message => {
						this.architecturesInfo = message;
			});

  }


	ngOnDestroy() {
		if (this.subscription) {
		this.subscription.unsubscribe();
  	}
	}




	

}
