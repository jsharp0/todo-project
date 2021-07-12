import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  checked: boolean;
  @Input() disabled: boolean;
  
  constructor() { }

  ngOnInit(): void { }

  toggleCheckbox(): void {
    this.checked = !this.checked;
  }

}
