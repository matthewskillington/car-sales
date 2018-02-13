import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
        {id: 1, manufacturer: 'Ford', model: 'Fiesta', bhp: 100, price: 2500, imageUrl: 'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/hwAAAOSw42JZBhOp/$_86.JPG' },
        {id: 2, manufacturer: 'Ford', model: 'Focus', bhp: 225, price: 4500, imageUrl: 'https://i.ytimg.com/vi/TXzwfE5Jkbg/maxresdefault.jpg'}
    ];
    return {cars};
  }
}