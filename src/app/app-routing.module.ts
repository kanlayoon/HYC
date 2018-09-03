import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
    { path: 'crisis-center', component: LoginPageComponent },
   
    {
      path: 'heroes',
      component: HeroListComponent,
      data: { title: 'Heroes List' }
    },
    { path: '',
      redirectTo: '/heroes',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
    ...
  })
  export class AppRoutingModule { }