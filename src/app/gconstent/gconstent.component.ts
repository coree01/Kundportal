import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gconstent',
  templateUrl: './gconstent.component.html',
  styleUrls: ['./gconstent.component.css']
})
export class GConstentComponent implements OnInit {
  isSubmitted = false;
  constructor(private router: Router) { }

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return false;
    }
    this.router.navigate(['WAPPEASY/GConstent/Upload']);

  }
  ngOnInit() {
  }
}
