import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiDataService } from '../api-data.service';

@Component({
  selector: 'app-modal-c',
  templateUrl: './modal-c.component.html',
  styleUrls: ['./modal-c.component.css']
})
export class ModalCComponent implements OnInit, OnDestroy  {
	
	 private subscription:Subscription;
	 public types:string;
	 public cureScaleAvg:string;
   public clinicTrials:string;
	 public medicalReports:string;

  constructor(private _ApiDataService: ApiDataService) {
			this.subscription = this._ApiDataService.notifyMessageF().subscribe(message => {
						this.types = message.types; this.cureScaleAvg = message.cureScaleAvg;
						this.clinicTrials = message.clinicTrials; this.medicalReports = message.medicalReports;
			});
 }



  ngOnInit(): void {
  }

  
	
	ngOnDestroy() {
		if (this.subscription) {
		this.subscription.unsubscribe();
  	}
	}
 
	


}
