import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DummyServiceService } from '../dummy-service.service';

@Component({
  selector: 'app-event-slider',
  templateUrl: './filter-slider.component.html',
  styleUrls: ['./filter-slider.component.css']
})
export class EventSliderComponent implements OnInit {

  @Output() sliderChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() step: number;
  @Input() stepValues: number[];
  @Input() responseData;
  sliderIntegerValue = 1;
  stepClass;

  constructor(private dummyService: DummyServiceService) { 

  }

  ngOnInit() {

    if (this.maxValue) {
      this.stepClass = 'n n' + this.maxValue;
    }

    console.log(this.minValue, this.maxValue, this.step, this.stepClass,this.stepValues[this.sliderIntegerValue - 1], this.responseData);
  }


  callApi(input) {
  console.log('sliderinoutva', this.sliderIntegerValue);
  alert('Selected ' + this.stepValues[this.sliderIntegerValue - 1]);
    this.sliderChange.emit(this.stepValues[input.target.value - 1]);
  }

}
