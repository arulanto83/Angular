import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { DaughterComponent } from './nuclearfamily/daughter/daughter.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { AllcomponentsComponent } from './assignment/allcomponents/allcomponents.component';
import { ReviewComponent } from './assignment/allcomponents/review/review.component';
import { TitleComponent } from './assignment/allcomponents/title/title.component';
import { ThumbnailComponent } from './assignment/allcomponents/thumbnail/thumbnail.component';
import { DescriptionComponent } from './assignment/allcomponents/description/description.component';
import { DirectiveComponent } from './superhtml/directive/directive.component';
import { InbuildPipesComponent } from './pipes/inbuild-pipes/inbuild-pipes.component';
import { BadrouteComponent } from './notfound/badroute/badroute.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    FamilyComponent,
    FatherComponent,
    MotherComponent,
    DaughterComponent,
    SonComponent,
    AllcomponentsComponent,
    ReviewComponent,
    TitleComponent,
    ThumbnailComponent,
    DescriptionComponent,
    DirectiveComponent,
    InbuildPipesComponent,
    BadrouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo: 'pipes', pathMatch: 'full'
      },
      {
        path:'family', component: FamilyComponent,
        children: [
          {
            path:'', redirectTo: 'mother', pathMatch: 'full'
          },
          {
          path: 'father', component: FatherComponent
          },
          {
            path: 'mother', component: MotherComponent
          },
          {
            path: 'daughter', component: DaughterComponent
          },
          {
            path: 'son', component: SonComponent
          }
      ]
      },
      {
        path:'review', component: ReviewComponent
      },
      {
        path:'directive', component: DirectiveComponent
      },
      {
        path:'pipes', component: InbuildPipesComponent
      },
      {
        path: '**', component: BadrouteComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
