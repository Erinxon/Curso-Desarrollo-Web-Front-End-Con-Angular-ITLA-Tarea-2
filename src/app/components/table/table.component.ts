import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() personList: Person[] = [];
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onRefresh: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  deletePerson(id: number){
    this.onDelete.emit(id);
  }

  refresh(){
    this.onRefresh.emit();
  }



}
