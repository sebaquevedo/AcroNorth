import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { MenuBarComponent } from './components/MenuBar/MenuBar.component';
import { Galleria } from 'primeng/galleria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images: any[] | undefined;
  items: MenuItem[] | undefined;

  title = 'northAcro';

  responsiveOptions: any[] | undefined;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.images = [
      {
        itemImageSrc:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
        thumbnailImageSrc:
          'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Update',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
          },
        ],
      },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Angular',
            icon: 'pi pi-external-link',
            url: 'http://angular.io',
          },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload',
          },
        ],
      },
    ];
  }
}
