import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cyclist = [
      { id: 1, name: 'Alberto', surname: 'Contador' , img: 'assets/images/alberto-contador.jpg'},
      { id: 2, name: 'Marco', surname: 'Pantani', img: 'assets/images/marco-pantani.jpg'}
    ];
    return {cyclist};
  }
}
