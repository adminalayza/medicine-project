import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InjectionComponent } from './injection/injection.component';
import { ProductComponent } from './product/product.component';
import { PeptideComponent } from './peptide/peptide.component';
import { OralComponent } from './oral/oral.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    InjectionComponent,
    ProductComponent,
    PeptideComponent,
    OralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'injection',
        component: InjectionComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'peptide',
        component: PeptideComponent
      },
      {
        path: 'oral',
        component: OralComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
