import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip , Legend,ResponsiveContainer} from 'recharts';
import Col from "react-bootstrap/Col";

class LineGraph extends React.Component {


render() {
    const data = [{time: '12:00', Temperature: 15}, {time: '13:00', Temperature: 15.5},{time: '14:00', Temperature: 16},{time: '15:00', Temperature: 18},
        {time: '16:00', Temperature: 19}, {time: '17:00', Temperature: 19}, {time: '18:00', Temperature: 17}, {time: '19:00', Temperature: 16},{time: '20:00', Temperature: 14},
        {time: '21:00', Temperature: 12},{time: '22:00', Temperature: 12}, {time: '23:00', Temperature: 11},{time: '00:00', Temperature: 10.8},{time: '01:00', Temperature: 10.5},{time: '02:00', Temperature: 10},
        {time: '03:00', Temperature: 10},{time: '04:00', Temperature: 10},{time: '05:00', Temperature: 11},{time: '06:00', Temperature: 11}, {time: '07:00', Temperature: 11},{time: '08:00', Temperature: 12},{time: '09:00', Temperature: 13},{time: '10:00', Temperature: 14}, {time: '11:00', Temperature: 15}];
    return(
    <Col lg={12}><h4 className="reading-box">Check your systems historical data</h4>
        <p className="reading-box">Track your previous readings <br/>Make better decisions for your systems future.</p><br/>  <p className="reading-box">24hr Temperature</p>
        
        <ResponsiveContainer width="100%" height={400}>
        <LineChart width={600}  height={400} data={data} margin={{ top: 50, right: 20, bottom: 50, left: 20 }}>
            <Line type="natural" dataKey="Temperature" stroke="#8884d8" />
            <Line type="natural" dataKey="time" stroke="red" />
            <CartesianGrid stroke="#eeee" strokeDasharray="0 0" />
            <XAxis dataKey="time" />
            <Tooltip dataKey="time" />
            <YAxis dataKey="Temperature" />
            <Legend />
        </LineChart>
        
        </ResponsiveContainer>
      
    </Col>);

}
}
export default LineGraph;