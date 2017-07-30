import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todas-actas',
  templateUrl: './todas-actas.component.html'
})
export class TodasActasComponent implements OnInit {

    isCopied1: boolean = false;
  isCopied2: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
