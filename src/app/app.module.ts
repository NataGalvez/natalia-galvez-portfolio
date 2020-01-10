import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InicioComponent } from "./modules/inicio/inicio.component";
import { ProyectosComponent } from "./modules/proyectos/proyectos.component";
import { SkillsComponent } from "./modules/skills/skills.component";
import { ContactoComponent } from "./modules/contacto/contacto.component";
import { HeaderComponent } from "./reusable/header/header.component";
import { FooterComponent } from "./reusable/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProyectosComponent,
    SkillsComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
