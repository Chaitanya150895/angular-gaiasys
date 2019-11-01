import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

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

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.httpService.postHttp("details.json", this.customForm.value)
      .pipe(
      ).subscribe(data => {
        console.log(data);
        this.customForm.reset();
      });
  }

}
