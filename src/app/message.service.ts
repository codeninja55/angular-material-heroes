import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { MessagesComponent } from './messages/messages.component';

@Injectable()
export class MessageService {
  // messages: string[] = [];
  message: string;

  constructor(private snackbar: MatSnackBar) { }

  showSnackBar(message: string) {
    this.message = message;
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.horizontalPosition = 'center';
    config.verticalPosition = 'bottom';
    config.panelClass = ['red', 'accent-4', 'white-text'];

    // this.snackbar.open(message, 'Dismiss', { duration: 2000 });
    // setTimeout(() => {
    //   this.snackbar.open(message, 'Dismiss', { duration: 2000 });
    // });

    // this.snackbar.openFromComponent(MessagesComponent, { duration: 2000 });
    // this.snackbar.openFromComponent(MessagesComponent, config);
    setTimeout(() => {
      this.snackbar.openFromComponent(MessagesComponent, config);
    });
  }

  // add(message: string): void {
  //   this.messages.push(message);
  // }

  // clear(): void {
  //   this.messages = [];
  // }
}
