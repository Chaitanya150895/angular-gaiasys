import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {
  tableHeaders = [
    "Id",
    "Name",
    "Calories",
    "Cost",
    "Location",
    "ConsumedAt",
    "Action"
  ]

  details = [];
  loading = false;
  showMsg: boolean;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.loading = true;
    this.http.getHttp("details.json").subscribe(data => {
      this.loading = false;
      console.log(data);
      this.details = data['data'];
    });
    
  }
  deleteDetail(id, detailId) {
    this.loading = true;
    this.http.deleteHttp("details/" + id + ".json").subscribe(data => {
      console.log(data);
      this.details.splice(detailId, 1);
      this.loading = false;
    });
  }
}
