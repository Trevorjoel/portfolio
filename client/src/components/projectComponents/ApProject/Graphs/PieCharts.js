import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";


const TempPie = (props) => {
let tempData=[];
    let critHigh = 0;
    let wrnHigh = 0;
    let optimal = 0;
    let wrnLow = 0;
    let critLow = 0;

    props.readings.map((reading, index) => {
        //tempData.push(reading.temperature)
      //  console.log('Reading: '+ reading.temperature)
        switch (true) {
            case reading.temperature <= 3 :
               critLow++
                break;
            case reading.temperature > 3 && reading.temperature <= 10:
        //        console.log('reading low warn')
                wrnLow++
                break;
            case reading.temperature > 10 && reading.temperature <= 18:
       //         console.log('reading optimal')
                optimal++
                break;
            case reading.temperature > 18 && reading.temperature <= 23:
       //         console.log('reading high warn')
                wrnHigh++
                break;
            case reading.temperature > 23:
      //          console.log('reading high crit')
                critHigh++
                break;
            default:
       //         console.log('Default Runs')
        }


    });

//   temp > 18 && temp <= 23 temp > 23:

   const getOption = () => ({
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
            orient: "horizontal",
            left: "left",
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

                label: {
                    position: 'outer',
                    alignTo: 'labelLine',
                    margin: 0
                },
                radius: '80%',
                center: ['50%', '58%'],
              
                color: ['red', 'yellow', 'green', "yellow", "red"],
                
                data: [

                    {
                        value: critHigh,
                        name: "Critical High",
                        stroke: 'black'
                    },
                    {
                        value: wrnHigh,
                        name: "Warning High",
                        
                    },

                    {
                        value: optimal,
                        name: "Optimal"
                    },
                    {
                        value: wrnLow,
                        name: "Warning Low"
                    },
                    {
                        value: critLow,
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

        return (
            <div className="">
                <ReactEcharts option={getOption()} style={{ height: 400 , width:'100%', background: 'black'}} />
            </div>
        );

}
export default TempPie;