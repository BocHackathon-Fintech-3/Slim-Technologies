import {Component} from '@angular/core';
import {ToastaService} from 'ngx-toasta';
import {MatChipInputEvent, MatDialogRef} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-user-access-request',
  templateUrl: './user-access-request.component.html',
  styleUrls: ['./user-access-request.component.scss']
})
export class UserAccessRequestComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
  ];

  constructor(private toastService: ToastaService,
              private dialogRef: MatDialogRef<UserAccessRequestComponent>) {

  }

  copy() {
    this.toastService.success({
      title: 'Done',
      msg: 'Your link has been copied!'
    });
  }

  invite() {
    this.toastService.success({
      title: 'Done',
      msg: 'Request has been successfully sent!'
    });
    this.dialogRef.close();
  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}
