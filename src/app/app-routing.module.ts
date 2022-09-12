import { HomeComponent } from './pages/Home/Home.component';
import { CursosFrontEndComponent } from './pages/cursos-front-end/cursos-front-end.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },

  {
    path:'cursos-front-end',component:CursosFrontEndComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
