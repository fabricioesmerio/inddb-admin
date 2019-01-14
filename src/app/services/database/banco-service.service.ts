import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

declare var Dexie: any;

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  db: any;

  constructor() { }

  private createDataBase(): Observable<any> {
    return new Observable((observer) => {
      const db = new Dexie('banco01');
      db.version(1).stores({
        pessoas: `
        ++id,
        nome,
        idade,
        tel,
        email
        `,
        heroes: `
        ++id,
        nome,
        codinome
        `,
        pets: `
        ++id,
        nome,
        raca,
        idade
        `,
        cars: `
        ++id,
        marca,
        ano
        `
      });
      this.db = db;
      observer.next(this.db);
      observer.complete();
    });
  }

  getDB() {
    if (this.db !== undefined) {
      return this.db;
    }
    this.createDataBase().subscribe(db => this.db = db);
    return this.db;
  }

  getDbName(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      let dbName = await Dexie.getDatabaseNames();
      resolve(dbName);
    });
  }
}
