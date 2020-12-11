import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { message } from './message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  messageForm!: FormGroup;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.messageForm = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(input: message): void {
    console.log(input);
    this.messageForm.reset();
  }
}
