import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-operations',
  templateUrl: './last-operations.component.html',
  styleUrls: ['./last-operations.component.scss']
})
export class LastOperationsComponent implements OnInit {

  operations = [
    {
      id: 1,
      marque: "Samsung",
      modele: "S23",
      status: "added"
    },
    {
      id: 2,
      marque: "Huawei",
      modele: "Y8",
      status: "edited"
    },
    {
      id: 3,
      marque: "Oneplus",
      modele: "11 pro",
      status: "deleted"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
