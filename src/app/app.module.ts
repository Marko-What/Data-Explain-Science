import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Pipe, PipeTransform, enableProdMode } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule,
         DxBulletModule,
         DxTemplateModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';

import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { DataGridComponent } from './data-grid/data-grid.component';


import { ApiDataService } from './api-data.service';
import { DatabaseLabelsComponent } from './database-labels/database-labels.component';
import { ModalCComponent } from './modal-c/modal-c.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LineGraphComponent,
    DataGridComponent,
    DatabaseLabelsComponent,
    ModalCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
		DxChartModule,
    DxSelectBoxModule,
		FormsModule
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
