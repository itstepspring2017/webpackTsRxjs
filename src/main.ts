import { Observable, Subject, ReplaySubject, from, of, range,fromEvent } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

// range(1, 200)
//     .pipe(filter(x => x % 2 === 1), map(x => x + x))
//     .subscribe(x => console.log(x));

console.log('hi');

// function injectable(target) {
//
// }
// class Injecteble{
//     @injectabele()
// ;}

import {Car} from './Car';

const car: Car = new Car();

Car.go();

console.log("hot reload");

fromEvent(window,"mousemove").
    subscribe(e=>console.log(e.target.clientWidth));