'use client'

// import { Car } from "@/app/model/Car";
import axios from "axios";
import { useEffect, useState } from "react";
import { Car } from "../model/Car";
import Link from "next/link";
// import { Car, CarType } from "../model/Car";


const Cars = () => {
  const url = "https://localhost:44335/api/car";  // local dev
  // const url = "http://localhost:8000/api/car";  // docker dev  

  const [cars, setCars] = useState<Car[]>([]);


  useEffect(() => {
    (
      async () => {
        const { data } = await axios.get(url);
        setCars(data);
      }
    )()
  }, []);

  const renderCar = () => {
    return cars.map((car: Car) => {
      return (
        <tr key={car.id}>
          <td>{car.model}</td>
          <td>
            <div>
              <Link href={`/cardetails/${car.id}`}>Show</Link>
            </div>
          </td>
        </tr>
      )
    })
  }


  return (
    <div>
      <h1>Cars</h1>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">Model</th>
            </tr>
          </thead>
          <tbody>
            {renderCar()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cars;