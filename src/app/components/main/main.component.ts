import { Component, OnInit } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter-service/emitter.service';
import { BancoService } from 'src/app/services/database/banco-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data: any[] = [];
  selectedTable: any;
  showDataTable = false;
  fields: any[] = [];
  year = new Date().getFullYear();

  constructor(
    private bancoService: BancoService
  ) { }

  ngOnInit() {
    EmitterService.get('tables').subscribe(_r => {
      this.fields = [];
      if (Object.keys(_r).length > 0) {
        this.showDataTable = true;
      }
      console.log('_r => ', _r);
      this.selectedTable = _r;
      this.loadData(_r.name);
      this.setFields( _r.schema.indexes);
    });
  }

  setFields(indexes: any[]) {
    indexes.forEach(item => this.fields.push(item.name));
    console.log('indexes: ', this.fields);
  }

  async loadData(table: any) {
    const db = await this.bancoService.getDB();
    db.transaction('r', db[table], async () => {
      this.data = await db[table].toArray();
      console.log('loadData: ', this.data);
    });
  }
}
