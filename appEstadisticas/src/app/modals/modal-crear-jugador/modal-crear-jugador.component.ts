import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EquipoService } from 'src/app/services/firebase/equipo.service';
import { JugadoresService } from 'src/app/services/firebase/jugadores.service';


@Component({
  selector: 'app-modal-crear-jugador',
  templateUrl: './modal-crear-jugador.component.html',
  styleUrls: ['./modal-crear-jugador.component.scss'],
})
export class ModalCrearJugadorComponent implements OnInit {
  @Input() idClub:string;

  constructor(private modalController:ModalController, private equipoService:EquipoService, private jugadoresService: JugadoresService) { }

  ngOnInit() {}

  async agregarJugador(nombre, apellido, nCamiseta, nacimiento , peso, altura, posicion){
    let id = await this.jugadoresService.agregar(this.idClub, {
      nombre: nombre.value,
      apellido: apellido.value,
      nCamiseta: nCamiseta.value,
      nacimiento: nacimiento.value,
      peso: peso.value,
      altura: altura.value,
      posicion: posicion.value
    })
    
    this.equipoService.agregarJugadorEquipo(this.idClub, 'Equipo1', {id: id, nCamiseta: nCamiseta.value
    })
    this.dismiss()
  }

  dismiss() {
   
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
