import { Component } from '@angular/core';
import { BancoService } from './services/database/banco-service.service';

declare var Dexie: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pessoas = [
    {nome: 'Pamala Foreman', idade: 97, tel: '231-678-6413', email: 'pamaladforeman@cuvox.de'},
    {nome: 'Martim Melo', idade: 21, tel: '(19) 3422-8548', email: 'martimalmeidamelo@fleckens.hu'},
    {nome: 'Pamala Foreman', idade: 97, tel: '231-678-6413', email: 'pamaladforeman@cuvox.de'},
    {nome: 'Martim Melo', idade: 21, tel: '(19) 3422-8548', email: 'martimalmeidamelo@fleckens.hu'},
    {nome: 'Pamala Foreman', idade: 97, tel: '231-678-6413', email: 'pamaladforeman@cuvox.de'},
    {nome: 'Martim Melo', idade: 21, tel: '(19) 3422-8548', email: 'martimalmeidamelo@fleckens.hu'},
    {nome: 'Pamala Foreman', idade: 97, tel: '231-678-6413', email: 'pamaladforeman@cuvox.de'},
    {nome: 'Ana Ferreira', idade: 2, tel: '(19) 7418-2540', email: 'anamartinsferreira@jourrapide.com'},
    {nome: 'Pamala Foreman', idade: 97, tel: '231-678-6413', email: 'pamaladforeman@cuvox.de'},
    {nome: 'Martim Melo', idade: 21, tel: '(19) 3422-8548', email: 'martimalmeidamelo@fleckens.hu'},
    {nome: 'Ana Ferreira', idade: 2, tel: '(19) 7418-2540', email: 'anamartinsferreira@jourrapide.com'},
    {nome: 'Pamala Foreman', idade: 97, tel: '231-678-6413', email: 'pamaladforeman@cuvox.de'},
    {nome: 'Ana Ferreira', idade: 2, tel: '(19) 7418-2540', email: 'anamartinsferreira@jourrapide.com'},
  ];
  pets = [
    {nome: 'Macacão', raca: 'Gorila', idade: 20},
    {nome: 'Doly', raca: 'Ovelha', idade: 2},
    {nome: 'Loro', raca: 'Papagaio', idade: 12},
    {nome: 'Rex', raca: 'Cachorro', idade: 8},
  ];
  heroes = [
    {nome: 'nome1', codinome: 'Homem-Aranha'},
    {nome: 'nome2', codinome: 'Hulk'},
    {nome: 'nome3', codinome: 'Super Man'},
    {nome: 'nome4', codinome: 'Homem de Ferro'},
    {nome: 'nome5', codinome: 'Tor'},
  ];
  car = [
    {marca: 'VW', ano: '1967'},
    {marca: 'Fiat', ano: '2001'},
    {marca: 'Ford', ano: '2018'},
    {marca: 'Hyundai', ano: '2019'},
    {marca: 'Toyota', ano: '2017'},
    {marca: 'GM', ano: '1980'},
    {marca: 'VW', ano: '2007'},
  ];

  constructor(
    private bancoService: BancoService
  ) {
    this.initialize();
  }

  async initialize() {
    const db = await this.bancoService.getDB();
    // await this.addPessoas(db);
    // await this.addPets(db);
    // await this.addCars(db);
    // await this.addHeroes(db);
  }

  addPessoas(db: any): Promise<any> {
    return new Promise((resolve, reject) => {
      db.pessoas.bulkAdd(this.pessoas)
      .then(resp => resolve(resp))
      .catch(Dexie.BulkError, (e) => {
        reject(e);
      })
    });
  }

  addPets(db: any): Promise<any> {
    return new Promise((resolve, reject) => {
      db.pets.bulkAdd(this.pets)
      .then(resp => resolve(resp))
      .catch(Dexie.BulkError, (e) => reject(e))
    });
  }

  addCars(db: any): Promise<any> {
    return new Promise((resolve, reject) => {
      db.cars.bulkAdd(this.car)
      .then(resp => resolve(resp))
      .catch(Dexie.BulkError, (e) => reject(e))
    });
  }

  addHeroes(db: any): Promise<any> {
    return new Promise((resolve, reject) => {
      db.heroes.bulkAdd(this.heroes)
      .then(resp => resolve(resp))
      .catch(Dexie.BulkError, (e) => reject(e))
    });
  }
}
