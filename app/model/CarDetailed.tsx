import { Booking } from "./Booking"

export interface CarDetailed {

    id: string,
    model: string
    bookings: [Booking]
}