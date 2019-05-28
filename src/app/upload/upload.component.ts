import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private router: Router) { }

  onSubmit(form: NgForm) {

    if (!form.valid) {
      return false;
    }
    this.router.navigate(['WAPPEASY/GConstent/Upload']);

  }

  updateList = function() {

    
   
    let input = document.getElementById('file');
    let output = document.getElementById('fileList');
  
    output.innerHTML = '<ul>';
    for (let i = 0; i < this.input.files.length; ++i) {
      output.innerHTML += '<li>' + this.output.files.item(i).name + '</li>';
    }
    output.innerHTML += '</ul>';      
  } 

  ngOnInit() {
  }

}
