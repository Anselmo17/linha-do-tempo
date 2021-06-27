import { Component, OnInit } from '@angular/core';
import { steps } from '../steps/mockSteps';
import { ISteps } from 'src/app/Interface/ISteps';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  steps: ISteps[] = [];
  constructor() { }

  ngOnInit() {
    this.steps = steps;
  }

}
