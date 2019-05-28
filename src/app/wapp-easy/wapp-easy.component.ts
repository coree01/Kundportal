import { Component, OnInit, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wapp-easy',
  templateUrl: './wapp-easy.component.html',
  styleUrls: ['./wapp-easy.component.css']
})
export class WAPPEASYComponent implements OnInit {
  isSubmitted = false;
  constructor(private router: Router) { }

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return false;
    }
    this.router.navigate(['WAPPEASY/GConstent']);
  }
  ngOnInit() {
  }


}
