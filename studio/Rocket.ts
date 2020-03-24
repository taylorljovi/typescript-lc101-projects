import {Payload} from './Payload';
import {Astronaut } from './Astronaut';
import {Cargo} from './Cargo'

export class Rocket{
    name: 'string';
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor(name:'string', totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    //A
    sumMass(items:Payload[]) : number{
        let sum : number = 0
        for(let index in items){
            sum += items[index].massKg;
        };
        return sum;
    }

    //B
    CurrentMassKg() : number{
        let astronautMass :number = this.sumMass(this.astronauts);
        let cargoMass : number = this.sumMass (this.cargoItems);
        let sum : number = astronautMass + cargoMass;
        return sum;
    }

    //C
    canAdd (item: PayLoad): boolean {
        if (this.CurrentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        } 
    }

    //D
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd (cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        }
        else{
            return false;
        }
    }

    //E
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        }
    }
}