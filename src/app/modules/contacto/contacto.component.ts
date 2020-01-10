import { Component, OnInit } from "@angular/core";
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-contacto",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.css"]
})
export class ContactoComponent implements OnInit {
  sendForms: FormGroup;
  constructor(private _builder: FormBuilder) {
    this.sendForms = this._builder.group({
      nombre: ["", Validators.required],
      correo: ["", Validators.compose([Validators.email, Validators.required])],
      telefono: ["", Validators.required],
      msg: ["", Validators.required]
    });
  }
  enviar(values) {
    console.log(values);
  }

  ngOnInit() {}
}
