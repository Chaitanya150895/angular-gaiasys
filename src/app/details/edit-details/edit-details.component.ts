import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  formData = [
    { for: "name", control: "input", type: "text", label: "name", placeholder: "Enter name", id: "name", control_name: "name" },
    { for: "calories", control: "input", type: "number", label: "calories", placeholder: "Enter calories", id: "calories", control_name: "calories" },
    { for: "cost", control: "input", type: "number", label: "cost", placeholder: "Enter cost", id: "cost", control_name: "cost" },
    { for: "location", control: "input", type: "text", label: "location", placeholder: "Enter location", id: "location", control_name: "location" }
  ]

  customForm = this.fb.group({
    name: [''],
    calories: [''],
    cost: [''],
    location: ['']
  });

  constructor(private fb:FormBuilder, private httpService: HttpService, 
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['detailId']
      this.httpService.getHttp("details/"+id+".json").subscribe(data => {
        console.log(data);
       let detail = data['data'];
       this.customForm.patchValue(detail)
      });
    });
  }

  onSubmit() {
    console.log(this.customForm.value);
    this.httpService.putHttp("details/"+ this.customForm.value.id +".json", this.customForm.value)
      .pipe().subscribe(data => {
        console.log(data);
        this.customForm.reset();
      });
  }
}
