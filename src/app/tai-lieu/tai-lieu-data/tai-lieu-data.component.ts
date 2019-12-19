import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tai-lieu-data',
  templateUrl: './tai-lieu-data.component.html',
  styleUrls: ['./tai-lieu-data.component.scss']
})
export class TaiLieuDataComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
