import {Button, Col, Container, Fade, FormGroup, Label, Row, Table} from 'reactstrap';
import React from "react";

const ReadingTable = (props) =>{
    //let readings = JSON.stringify(props.readings);

    const dateConverter = function(date){
        // JSON encoded date
        //const json = date;

        const dateStr = date;
  let dates = new Date(dateStr).toDateString();
        let time = new Date(dateStr).toLocaleTimeString();
        /*let minutes = new Date(dateStr).getMinutes();
        let hours = new Date(dateStr).getHours();*/
        let dateArray = [`${dates},   ${time}`]

   return dateArray

    }
    return (
        <Table dark>
            <thead>
            <tr>
                <th>#</th>
                <th>Date & Time</th>
                <th>Temperature</th>
                <th>pH</th>
                <th>Ammonia</th>
            </tr>
            </thead>
            <tbody>
        {

            props.readings.map((reading, index) => {

            return (

            <tr>
            <th scope="row">{reading.id}</th>
            <td>{dateConverter(reading.date_time)}</td>
                <td>{reading.temperature}</td>
                <td>{reading.ph}</td>
                <td>{reading.nh3}</td>
            </tr>
            )
        })}



            </tbody>
        </Table>
    );
}
export default ReadingTable;