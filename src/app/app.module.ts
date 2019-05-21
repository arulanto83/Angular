import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

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
import { ConsumeparentComponent } from './consume/consumeparent/consumeparent.component';
import { Consumechild1Component } from './consume/consumechild1/consumechild1.component';
import { Consumechild2Component } from './consume/consumechild2/consumechild2.component';
import { ChildComponent } from './consume/child/child.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Nospec10Component } from './delete/nospec10/nospec10.component';
import { Flatcomponent1Component } from './delete/componentNotInFolder/flatcomponent1.component';
import { Flatcomponent2Component } from './delete/componentNotInFolder/flatcomponent2/flatcomponent2.component';
import { FlatcomponentComponent } from './delete/componentNotInFolder/flatcomponent.component';
import { TemplateformComponent } from './Forms/templateform/templateform.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';
import { AnimationComponent } from './animate/animation/animation.component';
import { RemoteComponent } from './restapi/remote/remote.component';

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
    BadrouteComponent,
    ConsumeparentComponent,
    Consumechild1Component,
    Consumechild2Component,
    ChildComponent,
    Nospec10Component,
    Flatcomponent1Component,
    Flatcomponent2Component,
    FlatcomponentComponent,
    TemplateformComponent,
    ReactiveFormsComponent,
    AnimationComponent,
    RemoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

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
        path:'consume', component: ConsumeparentComponent,
        children:[
          {
            path:'Child1',
            component:Consumechild1Component
          },
          {
            path:'Child2',
            component:Consumechild2Component
          }
        ]
      }, 
      {
        path: 'template',
        component:TemplateformComponent
      },     
      {
        path: 'reactive',
        component:ReactiveFormsComponent
      },  
      {
          path: 'Animation',
          component:AnimationComponent
      }, 
      {
        path: 'remote',
        component:RemoteComponent
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
