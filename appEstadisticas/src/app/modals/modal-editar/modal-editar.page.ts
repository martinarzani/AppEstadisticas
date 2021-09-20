import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JugadoresService } from 'src/app/services/firebase/jugadores.service';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.page.html',
  styleUrls: ['./modal-editar.page.scss'],
})
export class ModalEditarPage implements OnInit {
  @Input() id:string;
  @Input() jugador:object;
  @Input() jugadorN:object;

  
  constructor(private modalController: ModalController, private jugadoresService: JugadoresService, private zone:NgZone) { }
  ngOnInit() {
    console.log(this.id)
    console.log(this.jugador)
    console.log("Nombre Jugador! ",this.jugador) 
  }
  editar(nombre, apellido, nCamiseta, nacimiento , peso, altura, posicion){
    this.jugadoresService.editar(this.id, this.jugador,{
      nombre : nombre.value,
      apellido : apellido.value,
      nCamiseta : nCamiseta.value,
      nacimiento : nacimiento.value,
      peso : peso.value,
      altura : altura.value,
      posicion : posicion.value
    })
    this.reloadPage()
    this.dismiss()
  }
  reloadPage(){
    this.zone.runOutsideAngular(() => {
      location.reload();
  });
  }
  dismiss(){
    console.log("Pito de Moni")
    this.modalController.dismiss()
  }
}