import { Component } from '@angular/core';
import { DummyServiceService } from './dummy-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stepValues = ["Expired", "Active", "Future", "All"];
  restValues = ["users", "posts", "todos", "comments"];
  title = 'app';
  minValue=1;
  maxValue=4;
  step=1;
  responseData = [];

  constructor(private dummyService: DummyServiceService) { 
    this.makeGetCall(this.stepValues[0]);
  }

  sliderChange(sliderValue) {
    this.makeGetCall(sliderValue);
  }


  makeGetCall(param) {
    let call  = null;
    for(let step in this.stepValues) {
      if(this.stepValues[step] == param) {
        call = this.restValues[step];
      }
    }
    alert("making call to backend for " + call);
    this.dummyService.getCall(param).subscribe(res => {
     this.responseData = res;
    })
  }
}
