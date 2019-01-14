import { Component, OnInit } from '@angular/core';
import { BancoService } from 'src/app/services/database/banco-service.service'
import { EmitterService } from 'src/app/services/emitter-service/emitter.service';

declare var Dexie: any;

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent implements OnInit {

  baseDados: any;
  tables: any[] = [];
  selectedTable = new EmitterService;

  constructor(
    private bancoService: BancoService
  ) { }

  ngOnInit() {
    this.initialize();
  }

  async initialize() {
    this.getName();
    this.getTables();
  }

  async getName() {
    this.baseDados = await Dexie.getDatabaseNames();
    console.log('db names: ', this.baseDados);
  }

  getTables() {
    const db = this.bancoService.getDB();
    this.tables = db.tables;
    console.log('tables', this.tables);
  }

  getData(table: string) {
    EmitterService.get('tables').emit(table);
  }

}
