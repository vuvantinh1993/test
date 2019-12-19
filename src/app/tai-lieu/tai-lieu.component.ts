import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tai-lieu',
  templateUrl: './tai-lieu.component.html',
  styleUrls: ['./tai-lieu.component.scss']
})
export class TaiLieuComponent implements OnInit {

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
