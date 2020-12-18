import { HttpClient } from '@angular/common/http';
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
  contactForm!: FormGroup;
  mailSent = false;
  @ViewChild('contact') contact!: ElementRef;

  constructor(
    private builder: FormBuilder,
    private http: HttpClient,
    private navigationService: NavigationService
  ) {}

  get name() {
    return this.contactForm.get('name')!;
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get message() {
    return this.contactForm.get('message')!;
  }

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void {
    this.navigationService.content[4] = this.contact;
  }

  onSubmit(input: message): void {
    if (this.contactForm.valid) {
      this.http.post('https://formspree.io/f/mwkwrdgw', input).subscribe();
      this.mailSent = true;
      setTimeout(() => {
        this.mailSent = false;
      }, 4000);
      this.contactForm.reset();
    }
  }
}
