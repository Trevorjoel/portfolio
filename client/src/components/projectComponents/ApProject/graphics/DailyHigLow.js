import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";


class HighLow extends Component {
    getOption = () => ({
        
        legend: {
            data: ['Highest Temperature', 'Lowest Temperature'],
            textStyle: {
                fontFamily: 'akkurta,Inconsolata, monospace',
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                textStyle: {
                    fontFamily: 'akkurta,Inconsolata, monospace',
                    color: '#ccc'
                }
                
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: 'Highest Temperature',
                
                stack: '',
                areaStyle: {color: 'green'},
                data: [22, 21, 23, 23, 20, 19, 25],
                type: 'line'
            },{
                name: 'Lowest Temperature',
                stack: '',
                areaStyle: {
                    color:'blue'
                },
                type: 'line',
                data: [18, 17, 18, 17, 18, 17, 20],
                
            },
            ]
 
    
});
    render() {
        return (
            <div className="">
                <ReactEcharts option={this.getOption()} style={{ height: 400 , width:'100%', background: 'black'}} />
            </div>
        );
    }
}
export default HighLow;