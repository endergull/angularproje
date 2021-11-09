import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';

import { RouterModule, Routes } from '@angular/router';

import { HakkindaComponent } from './hakkinda.component';
import { CalisanlarimizComponent } from './calisanlarimiz/calisanlarimiz.component';  


const routes: Routes = [
  { path: '', redirectTo: 'firmamiz', pathMatch: "full" },
  {path: '' ,component:LayoutComponent,children:[
    { path: "firmamiz", component: HakkindaComponent },
    { path: "calisanlarimiz", component: CalisanlarimizComponent }
  ]}
  
];
 
@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],exports: [RouterModule]
})
export class HakkimizdaModule { }
