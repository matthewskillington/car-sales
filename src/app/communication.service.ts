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
        //const carsUrl = this.carsUrl + '/' + car._id;
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        const carsUrl = this.carsUrl + '/5a99366bacd4240f58120163';
        return this.http.put(carsUrl, car, httpOptions).pipe(
            tap(_=> this.log('updated car id=${car.manufacturer car.model}')),
            catchError(this.handleError<any>('updateCar'))
        );
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

