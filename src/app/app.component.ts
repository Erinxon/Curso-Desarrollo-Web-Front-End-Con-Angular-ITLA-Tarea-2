import { Component, OnInit } from '@angular/core';
import { Person } from './models/person.model';
import { PersonService } from './services/person.service';
import { ConfirmationService } from 'primeng/api';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  personList: Person[] = [];
  personListoOriginal: Person[] = [];

  constructor(private personService: PersonService){
    
  }

  ngOnInit(): void {
    this.getPersonData();
  }

  getPersonData(){
    this.personService.getPersonData().subscribe((res: Person[]) => {
      this.personList = [...res];
      this.personListoOriginal = [...res];
    });
  }

  deletePerson(id: number){
    Swal.fire({  
      title: '¿Estás seguro de que quieres eliminar este registro?',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Si, Eliminar!',  
      cancelButtonText: 'No'  
    }).then((result) => {  
      if (result.value) {  
        this.personList = this.personList.filter(p => p.id !==id);
        Swal.fire(  
          'Eliminado', 
          '',
          'success'  
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        Swal.fire(  
          'Acción Cancelada',  
          '',
          'error'  
        );
      }  
    })  

  }

  refresh(){
    this.personList = [...this.personListoOriginal];
  }

}
