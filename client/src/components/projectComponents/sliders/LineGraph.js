import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip , Legend} from 'recharts';

class LineGraph extends React.Component {


render() {
    const data = [{time: '12:00', temp: 15}, {time: '13:00', temp: 15.5},{time: '14:00', temp: 16},{time: '15:00', temp: 18},
        {time: '16:00', temp: 19}, {time: '17:00', temp: 19}, {time: '18:00', temp: 17}, {time: '19:00', temp: 16},{time: '20:00', temp: 14},
        {time: '21:00', temp: 12},{time: '22:00', temp: 12}, {time: '23:00', temp: 11},{time: '00:00', temp: 10.8},{time: '01:00', temp: 10.5},{time: '02:00', temp: 10},
        {time: '03:00', temp: 10},{time: '04:00', temp: 14},{time: '05:00', temp: 12},{time: '06:00', temp: 12}, {time: '07:00', temp: 11},{time: '08:00', temp: 12},{time: '09:00', temp: 13},{time: '10:00', temp: 14}, {time: '11:00', temp: 15}];
    return(
    <div><h4 className="reading-box">Check your systems history.</h4>;
        <p className="reading-box">Look back at your previous readings to make better decisions for your systems future.</p>
        <LineChart backgroundColor={'white'} width={600} height={400} data={data} margin={{ top: 50, right: 20, bottom: 50, left: 50 }}>
            <Line type="natural" dataKey="temp" stroke="#8884d8" />
            <Line type="natural" dataKey="time" stroke="#8884d8" />
            <CartesianGrid stroke="#eeee" strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <Tooltip dataKey="time" />
            <YAxis dataKey="temp" />
            <Legend />
        </LineChart>
    </div>);

}
}
export default LineGraph;