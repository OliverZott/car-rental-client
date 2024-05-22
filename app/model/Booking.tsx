import { Car } from "./Car";
import { Customer } from "./Customer";

export interface Booking {

    id: string,
    car: Car,
    customer: Customer,
}
