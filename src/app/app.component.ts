import { Component, OnInit } from '@angular/core';
import { ApiService } from './api-service.service';
import { IData } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // content: any;
  _dataArray: IData[];

  constructor(private _apiService: ApiService) {
    // this._apiService.getData()
    //   .subscribe((res) =>  {
    //     this.content = res;
    //   });
   }

   getData(): void {
     this._apiService.getData()
          .subscribe(
            (resultArray) => {
              this._dataArray = resultArray;
              console.log(resultArray);
            },
            error => console.log('Error :: ' + error)
          );
   }

   ngOnInit(): void {
     this.getData();
   }

}
