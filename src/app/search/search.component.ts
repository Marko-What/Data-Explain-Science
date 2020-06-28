import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	
  constructor(private _ApiDataService: ApiDataService) { 	}



  ngOnInit(): void {
  }



	searchQuery(data): void { 
		this._ApiDataService.searchAndRetrieve(data.search);
		
	}








}
