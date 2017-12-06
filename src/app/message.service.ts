import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class MessageService {

  constructor(private snackbar: MatSnackBar) { }

  showSnackBar(message: string) {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.horizontalPosition = 'center';
    config.verticalPosition = 'bottom';
    config.panelClass = ['red', 'accent-4', 'text-center', 'white-text'];

    setTimeout(() => {
      this.snackbar.open(message, 'Dismiss', config);
    });
  }
}
