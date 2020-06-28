import { NgModule, Component, Pipe, PipeTransform, enableProdMode, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule, DxBulletModule, DxTemplateModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

import { ApiDataService } from '../api-data.service';

import  { medicalDataType, medicalGraphType } from '../typings/dataTypings';




@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit, OnDestroy {


    private subscription:Subscription;
	   
    dataSource: DataSource;
    collapsed = false;
    contentReady = (e) => {
        if(!this.collapsed) {
            this.collapsed = true;
            e.component.expandRow(["EnviroCare"]);
        }
    };
    customizeTooltip = (pointsInfo) => {
        return { text: parseInt(pointsInfo.originalValue) + "%" };
    }

	


  
  constructor(private _ApiDataService: ApiDataService) {
       // this.dataSource = _ApiDataService.getDataSource();

    }








  ngOnInit(): void {
		 this.subscription = this._ApiDataService.notifyMessageD().subscribe(message => {
				this.dataSource = message;
			});
  }




   getgraph(wawData: medicalDataType) {
		$('#exampleModal').modal('show');
			 this._ApiDataService.getGraphData(wawData);
    }



	ngOnDestroy() {
		if (this.subscription) {
		this.subscription.unsubscribe();
  	}
	}


}
