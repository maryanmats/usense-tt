import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  easyColor: string = 'gray';
  mediumColor: string = 'gray';
  strongColor: string = 'gray';
  password: string = '';

  checkPasswordStrength() {
    const password = this.password;

    this.easyColor = 'gray';
    this.mediumColor = 'gray';
    this.strongColor = 'gray';

    if (password.length === 0) {
      return;
    }
    if (password.length < 8) {
      this.easyColor = 'red';
      this.mediumColor = 'red';
      this.strongColor = 'red';
      return;
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    if (hasNumbers || hasLetters || hasCharacters) {
      this.easyColor = "red";
      this.mediumColor = "gray";
      this.strongColor = "gray";
    }

    if (hasNumbers && hasLetters && hasCharacters) {
      this.easyColor = "green";
      this.mediumColor = "green";
      this.strongColor = "green";
    } else if (
      (hasNumbers && hasLetters) ||
      (hasNumbers && hasCharacters) ||
      (hasLetters && hasCharacters)
    ) {
      this.easyColor = "yellow";
      this.mediumColor = "yellow";
      this.strongColor = "gray";
    }
  }
  sendPassword() {
    if (this.password.length < 8) {
      alert("Please enter at least 8 digits")
    }
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(this.password);

    if (hasNumbers && hasLetters && hasCharacters) {
      alert("Your password is strong");
    } else if (hasNumbers && (hasLetters || hasCharacters) || hasLetters && hasCharacters) {
      alert("Your password is medium");
    } else if (this.password.length >= 8 && (hasNumbers || hasLetters || hasCharacters)) {
      alert("Your password is easy");
    }

  }
}
