import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PnldataApi } from '../../shared/sdk';
import { PivotService } from '../../shared/services/pivot.service';


//this is javascript function connected in angular-cli.json to produce better json array
declare function pivot(data, rowNames, columnNames, userOptions): any;

declare function $(obj: any): any;


@Component({
  selector: 'my-businesplans',
  templateUrl: 'my-businesplans.component.html',
  styleUrls: ['my-businesplans.component.scss']
})
export class MyBusinesplansComponent implements OnInit, AfterViewInit {

  //real
  @ViewChild('pivot_pricelist') pivot_pricelistRef: ElementRef;
  @ViewChild('pivot_seasonality') pivot_seasonalityRef: ElementRef;
  @ViewChild('pivot_quantityandacceleration') pivot_quantityandaccelerationRef: ElementRef;
  @ViewChild('pivot_volume') pivot_volumeRef: ElementRef;
  @ViewChild('pivot_grosssales') pivot_grosssalesRef: ElementRef;
  @ViewChild('pivot_discounts') pivot_discountsRef: ElementRef;
  @ViewChild('pivot_rebatesreturns') pivot_rebatesreturnsRef: ElementRef;
  @ViewChild('pivot_netsales') pivot_netsalesRef: ElementRef;

  @ViewChild('optionsModal') optionsModal: any;

  list = [];
  racingMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];


  constructor(
    private pnlDataApi: PnldataApi
  ) {
  }

  ngOnInit() {
    this.pnlDataApi.find(
      {
        //fields: any;
        //include: any;
        //include: "userprofile",
        order: 'datehappened ASC',
        limit: 100000,
        skip: 0,
        //offset?: any;
        where: {
          and: [{typeofdata: 'businessplan', createdbyid: null}]
        }
      }
    ).subscribe(resp => {
      // this is to re-group array
      let resultquery = pivot(resp, ['pnlrow'], ['typeofdata'], {});


      // this calculates id of necessary header.
      let allPnLHeaders = resultquery['rowHeaders'];
      console.log('All headers: ' + allPnLHeaders);

      //this brings data to pivot table:
      //let result = resp;

      //Show prices:
      let result_pricelist = resultquery[allPnLHeaders.map(function (e) {
        return e[0];
      }).indexOf('Price')];
      console.log('Prices: ');
      console.log(result_pricelist);
      //Show seasonality:
      let result_seasonality = resultquery[allPnLHeaders.map(function (e) {
        return e[0];
      }).indexOf('Seasonality')];
      console.log('Seasonality indices: ');
      console.log(result_seasonality);
      //Show Acceleration Quantity:
      let result_quantityandacceleration = resultquery[allPnLHeaders.map(function (e) {
        return e[0];
      }).indexOf('Quantity')];
      console.log('Quantity with acceleration: ');
      console.log(result_quantityandacceleration);
      //Show Final Forecasted Volume:
      let result_volume = resultquery[allPnLHeaders.map(function (e) {
        return e[0];
      }).indexOf('Volume')];
      console.log('Final Forecasted Volume: ');
      console.log(result_volume);
      //Show Gross Sales:
      let result_grosssales = resultquery[allPnLHeaders.map(function (e) {
        return e[0];
      }).indexOf('Gross Sales')];
      console.log('Gross Sales: ');
      console.log(result_grosssales);
      //Show Discounts:
      let result_discounts = resultquery[allPnLHeaders.map(function (e) {
        return e[0];
      }).indexOf('On-invoice')];
      console.log('Discounts: ');
      console.log(result_discounts);
      //Show Rebates:
      let result_rebatesreturns = resultquery[allPnLHeaders.map(function (e) {
        return e[0];
      }).indexOf('Off-invoice/Rebate')];
      console.log('Rebates/Returns: ');
      console.log(result_rebatesreturns);
      //Show Net Sales:
      let result_netsales = result_grosssales[0].concat(result_discounts[0], result_rebatesreturns[0]);
      console.log('Flat Net Sales Read-only-Data: ');
      console.log(result_netsales);


      //render:
      this.renderpivot_pricelist(result_pricelist[0]);
      this.renderpivot_seasonality(result_seasonality[0]);
      this.renderpivot_quantityandacceleration(result_quantityandacceleration[0]);
      this.renderpivot_volume(result_volume[0]);
      this.renderpivot_grosssales(result_grosssales[0]);
      this.renderpivot_discounts(result_discounts[0]);
      this.renderpivot_rebatesreturns(result_rebatesreturns[0]);
      this.renderpivot_netsales(result_netsales);


    });
  }

  ngAfterViewInit(): void {
    this.optionsModal.open();
  }

  //real pivots start here

  renderpivot_pricelist(data) {
    const pivotEl: HTMLDivElement = this.pivot_pricelistRef.nativeElement;

    $(document).ready(function () {
      $(pivotEl).jbPivot({
        fields: {
          itemcode: {field: 'itemcode', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Date: {field: 'datehappened', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Average: {field: 'valueofmoney', agregateType: 'average', groupType: 'none'}
        },
        xfields: ['itemcode'],
        yfields: ['Date'],
        zfields: ['Average'],
        data: data
      });
    });
  }

  renderpivot_seasonality(data) {
    const pivotEl: HTMLDivElement = this.pivot_seasonalityRef.nativeElement;

    $(document).ready(function () {
      $(pivotEl).jbPivot({
        fields: {
          itemcode: {field: 'itemcode', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Date: {field: 'datehappened', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Average: {field: 'valueofmoney', agregateType: 'average', groupType: 'none'}
        },
        xfields: ['itemcode'],
        yfields: ['Date'],
        zfields: ['Average'],
        data: data
      });
    });
  }

  renderpivot_quantityandacceleration(data) {
    const pivotEl: HTMLDivElement = this.pivot_quantityandaccelerationRef.nativeElement;

    $(document).ready(function () {
      $(pivotEl).jbPivot({
        fields: {
          itemcode: {field: 'itemcode', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Date: {field: 'datehappened', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Sum: {field: 'valueofmoney', agregateType: 'sum', groupType: 'none'}
        },
        xfields: ['itemcode'],
        yfields: ['Date'],
        zfields: ['Sum'],
        data: data
      });
    });
  }

  renderpivot_volume(data) {
    const pivotEl: HTMLDivElement = this.pivot_volumeRef.nativeElement;

    $(document).ready(function () {
      $(pivotEl).jbPivot({
        fields: {
          itemcode: {field: 'itemcode', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Date: {field: 'datehappened', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Sum: {field: 'valueofmoney', agregateType: 'sum', groupType: 'none'}
        },
        xfields: ['itemcode'],
        yfields: ['Date'],
        zfields: ['Sum'],
        data: data
      });
    });
  }

  renderpivot_grosssales(data) {
    const pivotEl: HTMLDivElement = this.pivot_grosssalesRef.nativeElement;

    $(document).ready(function () {
      $(pivotEl).jbPivot({
        fields: {
          itemcode: {field: 'itemcode', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Date: {field: 'datehappened', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Sum: {field: 'valueofmoney', agregateType: 'sum', groupType: 'none'}
        },
        xfields: ['itemcode'],
        yfields: ['Date'],
        zfields: ['Sum'],
        data: data
      });
    });
  }

  renderpivot_discounts(data) {
    const pivotEl: HTMLDivElement = this.pivot_discountsRef.nativeElement;

    $(document).ready(function () {
      $(pivotEl).jbPivot({
        fields: {
          itemcode: {field: 'itemcode', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Date: {field: 'datehappened', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Sum: {field: 'valueofmoney', agregateType: 'sum', groupType: 'none'}
        },
        xfields: ['itemcode'],
        yfields: ['Date'],
        zfields: ['Sum'],
        data: data
      });
    });
  }

  renderpivot_rebatesreturns(data) {
    const pivotEl: HTMLDivElement = this.pivot_rebatesreturnsRef.nativeElement;

    $(document).ready(function () {
      $(pivotEl).jbPivot({
        fields: {
          itemcode: {field: 'itemcode', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Date: {field: 'datehappened', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Sum: {field: 'valueofmoney', agregateType: 'sum', groupType: 'none'}
        },
        xfields: ['itemcode'],
        yfields: ['Date'],
        zfields: ['Sum'],
        data: data
      });
    });
  }

  renderpivot_netsales(data) {
    const pivotEl: HTMLDivElement = this.pivot_netsalesRef.nativeElement;

    $(document).ready(function () {
      $(pivotEl).jbPivot({
        fields: {
          itemcode: {field: 'itemcode', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Date: {field: 'datehappened', sort: 'asc', showAll: true, agregateType: 'distinct'},
          Sum: {field: 'valueofmoney', agregateType: 'sum', groupType: 'none'}
        },
        xfields: ['itemcode'],
        yfields: ['Date'],
        zfields: ['Sum'],
        data: data
      });
    });
  }

}

