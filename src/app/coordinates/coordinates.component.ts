import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css']
})
export class CoordinatesComponent implements OnInit {

    data: any;

    constructor(private http: HttpClient) { }
  
    ngOnInit() {
        this.reloadData();
    }
  
    reloadData(){
      this.http.get('http://192.168.3.76:3000/coordinates').subscribe(data => {	  
        this.data = data;
        console.log(data);
      });
    };

    actualizarMedidor(idMedidor, latitud, longitud, direccion, descripcion) {
        let params = {
            idMedidor: idMedidor,
            latitud: latitud,
            longitud: longitud,
            direccion: direccion,
            descripcion: descripcion
        };
            
        this.http.post('http://192.168.3.76:3000/coordinates', { params: params })
        .subscribe((data) => {
            this.reloadData();
          }, error => {
            console.log(error);
        });
    };

    habilitarEdicion(latitud, longitud, direccion, descripcion, boton){
        console.log('Evento OK');
        latitud.readOnly = false;
        longitud.readOnly = false;
        direccion.readOnly = false;
        descripcion.readOnly = false;
        boton.disabled = false;
    };
}