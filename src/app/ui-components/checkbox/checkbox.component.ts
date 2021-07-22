import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() checked: boolean;
  @Input() disabled: boolean;
  
  constructor() { }

  ngOnInit(): void { }

  toggleCheckbox(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

}
