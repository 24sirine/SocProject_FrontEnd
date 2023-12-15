import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Par Cause ',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Par gouvernorat',  icon:'pe-7s-global', class: '' },
    { path: '/typography', title: 'Par Mois',  icon:'pe-7s-date', class: '' },
    { path: '/icons', title: 'Par Heure',  icon:'pe-7s-clock', class: '' },
    { path: '/table', title: 'Par Route',  icon:'pe-7s-graph3', class: '' },

   // { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
   // { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
  //  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
