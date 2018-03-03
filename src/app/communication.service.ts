import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators'; 
import { Car } from './components/car/car.component';
import { MessageService } from './messages.service';

@Injectable()
export class CommService {
    constructor (private messageService: MessageService,
                private http: HttpClient) {

    }

    private carsUrl = 'http://localhost:3000/cars';

    getCars(): Observable<Car[]> {
        this.log('fetched cars');
        return this.http.get<Car[]>(this.carsUrl)
        .pipe(
          tap(cars => this.log(`fetched cars`)),
          catchError(this.handleError('getCars', []))
        );
    }

    /* GET car by id. Will 404 if id not found */
    getCar(id: number): Observable<Car> {
        const url = '${this.carsUrl}/${id}';
        return this.http.get<Car>(url).pipe(
            tap(_ => this.log('fetched car id=${id}')),
            catchError(this.handleError<Car>('getCar id=${id}'))
        );
    }

    /* Update a car by car */
    updateCar(car: any): Observable<any> {
        const carsUrl = this.carsUrl + '/' + car._id;
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.put(carsUrl, car, httpOptions).pipe(
            tap(_=> this.log('updated car id=${car.manufacturer car.model}')),
            catchError(this.handleError<any>('updateCar'))
        );
    }

    /* Delete a car by car */
    deleteCar(car: any): Observable<any> {
        const carsUrl = this.carsUrl + '/' + car._id;
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete(carsUrl).pipe(
            catchError(this.handleError<any>('deleteCar'))
        )
    }

    
    /* Add a car */
    addCar(Car: Car): Observable<Car> {
        let carsUrl = 'http://localhost:3000/cars';
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.post<Car>(carsUrl, Car, httpOptions).pipe(
            catchError(this.handleError<any>('addCar', Car))
        )
    }

    /* Flood db with a bunch of test data */
    floodDb(): void {
        const cars = [
            {id: 1, manufacturer: 'Ford', model: 'Fiesta', power: 100, price: 2500, imageUrl: 'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/hwAAAOSw42JZBhOp/$_86.JPG' },
            {id: 2, manufacturer: 'Ford', model: 'Focus', power: 225, price: 4500, imageUrl: 'https://i.ytimg.com/vi/TXzwfE5Jkbg/maxresdefault.jpg'},
            {id: 3, manufacturer: 'Renault', model: 'Clio', power: 197, price: 3500, imageUrl: 'https://www.cliosport.net/attachments/8062347911_73c55f2fa5_z-jpg.1003864/'},
            {id: 4, manufacturer: 'Vauxhall', model: 'Corsa', power: 192, price: 5000, imageUrl: 'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/JyQAAOSwAANY7ngg/$_86.JPG'},
            {id: 5, manufacturer: 'Volkswagen', model: 'Polo', power: 195, price: 13000, imageUrl: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/vw-polo-gti-2015-001.jpg?itok=vUPU0ETp'}
            
        ]
        for (let i = 0; i < cars.length; i++){
            this.addCar(cars[i]).subscribe();
        }
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add('CommService: ' + message);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }

    
}

