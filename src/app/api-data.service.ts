import { Injectable } from '@angular/core';
import  *  as  medicalDataC  from  '../assets/sampleDataC.json';
import  *  as  medicalGraphD  from  '../assets/sampleDataD.json';
import { Observable, Subject, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';
import  { medicalDataType, medicalGraphType } from './typings/dataTypings';

var medicalData = (medicalDataC  as  any).default;
let medicalGraph = (medicalGraphD  as  any).default;

var medicalDataRecord;
var searchKeyWord:string;

@Injectable()
export class ApiDataService {

	 private subjectC = new Subject<any>();
   private subjectD = new Subject<any>();
   private subjectE = new Subject<any>();
	 private subjectF = new Subject<any>();
	


		 notifyMessageC(): Observable<any> {
        return this.subjectC.asObservable();
    }

		 notifyMessageD(): Observable<any> {
        return this.subjectD.asObservable();
    }

    notifyMessageE(): Observable<any> {
        return this.subjectE.asObservable();
    }

		 notifyMessageF(): Observable<any> {
        return this.subjectF.asObservable();
    }


	
	  	getDataSource(searchKeyWord?: string):void { 
				 
				 medicalData.filter(function(record) {		
						if(record.searchKeyword == searchKeyWord){	
								medicalDataRecord = record; 					
							}		
					});
			
					this.subjectD.next(medicalDataRecord["data"]);
				 		this.subjectE.next(medicalDataRecord.databaseSources); 


   	 } // end of getDataSource





	
	getGraphData(wawData: medicalDataType):void {
	
		
		let recordById = medicalGraph.filter(function(record) {
				if(record.id == wawData.id){	return record; }
		});

				this.subjectC.next(recordById[0].data);
					this.subjectF.next(wawData);return;
		
    } /* end of getGraphData */







	
	
		searchAndRetrieve(searchData: string):void {
    	this.getDataSource(searchData);
    } /* end of searchQueryRetrieve */










}
