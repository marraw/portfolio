import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavigationService } from 'src/app/core/navigation/navigation.service';

import { message } from './message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {
  messageForm!: FormGroup;
  @ViewChild('contact') contact!: ElementRef;

  constructor(
    private builder: FormBuilder,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.messageForm = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
    this.navigationService.content[4] = this.contact;
  }

  onSubmit(input: message): void {
    console.log(input);
    this.messageForm.reset();
  }
}
