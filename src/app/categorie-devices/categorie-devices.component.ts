import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-categorie-devices',
  templateUrl: './categorie-devices.component.html',
  styleUrls: ['./categorie-devices.component.scss']
})
export class CategorieDevicesComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category of devices'
    },
    xAxis: {
      categories: [
        'Samsung',
        'OnePlus',
        'Huawei',
        'Xiaomi',
        'Oppo',
      ]
    },
    yAxis: {
      title: {
        text: '% of users'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Samsung',
          y: 41.0,
          color: '#044342',
        },
        {
          name: 'OnePlus',
          y: 33.8,
          color: '#7e0505',
        },
        {
          name: 'Huawei',
          y: 6.5,
          color: '#ed9e20',
        },
        {
          name: 'Xiaomi',
          y: 15.2,
          color: '#6920fb',
        },
        {
          name: 'Oppo',
          y: 3.5,
          color: '#121212',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}
