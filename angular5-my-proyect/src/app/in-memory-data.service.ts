import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let cyclist = [
      { name: 'Alberto', surname: 'Contador' },
      { name: 'Marco', surname: 'Pantani' }
    ];
    return {cyclist};
  }
}
