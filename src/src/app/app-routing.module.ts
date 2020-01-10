import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./modules/inicio/inicio.component";
import { ProyectosComponent } from "../app/modules/proyectos/proyectos.component";
import { SkillsComponent } from "../app/modules/skills/skills.component";
import { ContactoComponent } from "../app/modules/contacto/contacto.component";

const routes: Routes = [
  { path: "", component: InicioComponent },
  {
    path: "Perfil",
    component: InicioComponent
  },
  {
    path: "Proyectos",
    component: ProyectosComponent
  },
  {
    path: "Skills",
    component: SkillsComponent
  },
  {
    path: "Contacto",
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
