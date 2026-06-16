import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.css']
})
export class OtpInputComponent {
  otp = Array(6).fill('');

  updateOtp(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '').slice(-1);
    this.otp[index] = input.value;
    if (input.value) (input.nextElementSibling as HTMLInputElement | null)?.focus();
  }
}
