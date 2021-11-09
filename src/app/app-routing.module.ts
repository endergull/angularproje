import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { GecmisComponent } from './routes/gecmis/gecmis.component';
import { GorselComponent } from './routes/gorsel/gorsel.component';
import { HakkindaComponent } from './routes/hakkinda/hakkinda.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "header", component: HeaderComponent },
  { path: 'hakkimizda', loadChildren: () => import('./routes/hakkinda/hakkimizda.module').then(m => m.HakkimizdaModule) },
  { path: "gorsel", component: GorselComponent },
  { path: "gecmis", component: GecmisComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
