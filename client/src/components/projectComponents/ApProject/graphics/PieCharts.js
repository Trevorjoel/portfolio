import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";


class TempPie extends Component {
    getOption = () => ({
        title: {
            text: "",
            left: 'left',
            top: 0,
            textStyle: {
                fontFamily: 'akkurta,Inconsolata, monospace',
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: "vertical",
            left: "right",
            top: 0,
            data: ["Critical High", "Warning High", "Optimal", "Warning Low", "Critical Low"],
            textStyle: {
                fontFamily: 'akkurta,Inconsolata, monospace',
                color: '#ccc'
            }
        },
        series: [
            {
                name: "Temperature",
                type: "pie",
                radius: '80%',
                center: ['50%', '58%'],
              
                color: ['green', 'red', 'yellow', "yellow", "red"],
                
                data: [
                    {
                        value: 19,
                        name: "Optimal"
                    },
                    {
                        value: 1,
                        name: "Critical High",
                        stroke: 'black'
                    },
                    {
                        value: 3,
                        name: "Warning High",
                        
                    },
               
                    {
                        value: 1,
                        name: "Warning Low"
                    },
                    {
                        value: 0,
                        name: "Critical Low"
                    }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)"
                    }
                }
            }
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
export default TempPie;