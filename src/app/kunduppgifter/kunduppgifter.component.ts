import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { WappApiService } from '../wapp-api.service';

@Component({
  selector: 'app-kunduppgifter',
  templateUrl: './kunduppgifter.component.html',
  styleUrls: ['./kunduppgifter.component.css']
})






export class KunduppgifterComponent implements OnInit {

  constructor(private router: Router, private wappS: WappApiService) {  }

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return false;
    }
    this.router.navigate(['/WAPPEASY']);
  }

  ngOnInit() {
  }
  
  
  

}
