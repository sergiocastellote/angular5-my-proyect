import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cyclist = [
      { id: 1, name: 'Alberto', surname: 'Contador' },
      { id: 2, name: 'Marco', surname: 'Pantani' }
    ];
    return {cyclist};
  }
}
