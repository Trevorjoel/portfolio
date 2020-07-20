import React from "react";
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
            case reading.temperature <= props.viewParams.temp_low_critical:
               critLow++
                break;
            case reading.temperature > props.viewParams.temp_low_critical && reading.temperature <= props.viewParams.temp_low_warn:
        //        console.log('reading low warn')
                wrnLow++
                break;
            case reading.temperature > props.viewParams.temp_low_warn && reading.temperature <= props.viewParams.temp_high_warn:
       //         console.log('reading optimal')
                optimal++
                break;
            case reading.temperature > props.viewParams.temp_high_warn && reading.temperature <= props.viewParams.temp_high_critical:
       //         console.log('reading high warn')
                wrnHigh++
                break;
            case reading.temperature > props.viewParams.temp_high_critical:
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
                fontFamily: 'Open Sans',
                color: '#ccc'
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 10,

            textStyle: {
                fontFamily: 'Open Sans',
                color: '#1a1919'
            }
        },
        series: [
            {
                name: "Temperature",
                type: "pie",

                label: {
                    show: false,
                    position: 'center',
                    alignTo: 'labelLine',
                    margin: 0
                },
                radius: ['50%', '80%'],
                center: ['50%', '50%'],
              
                color: ['#c8031f', '#d3b126', '#187316', "#d3b126", "#c8031f"],
                
                data: [

                    {
                        value: critHigh,
                        name: "Critical High",
                        stroke: 'black'
                    },
                    {
                        value: wrnHigh,
                        name: "Advice High",
                        
                    },

                    {
                        value: optimal,
                        name: "Optimal"
                    },
                    {
                        value: wrnLow,
                        name: "Advice Low"
                    },
                    {
                        value: critLow,
                        name: "Critical Low"
                    }
                ],
                itemStyle: {
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        },
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
                <ReactEcharts option={getOption()} style={{ height: 450 , width:'100%', background: 'white', padding:"20px"}} />
            </div>
        );

}
export default TempPie;