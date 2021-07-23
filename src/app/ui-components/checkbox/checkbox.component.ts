import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Output() itemCompleted: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  toggleCheckbox(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.itemCompleted.emit(this.checked);
    }
  }

}
