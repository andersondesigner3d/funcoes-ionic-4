import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  pet : string = 'puppies';//tem q ser string
  
  constructor() { }

  ngOnInit() {
  }

  segmentButtonClicked(ev: any) {
    console.log('Segment button clicked', ev);
  }

}
