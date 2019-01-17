import {Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { MenuComponent } from './app/menu/menu.component';

export const routes:Routes=[
    { path: 'home',component: HomeComponent  },
    { path: 'about',component: AboutComponent  },
    { path: 'contact',component: ContactComponent  },
    { path: 'menu',component: MenuComponent },
    { path: '',redirectTo:'/home',pathMatch:'full'  }
]