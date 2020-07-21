import React, {useState} from "react";
import ReactEcharts from "echarts-for-react";
import moment from "moment";
import GraphSwitch from "./GraphSwitch";


const HighLow = (props)=> {
    const [typeHi, setTypeHi] = useState("line");
    const [typeLow, setTypeLow] = useState("line");
    const [typeAvg, setTypeAvg] = useState("line");
    let highestNumArray = [];
    let lowestNumArray = [];
    let timeArray =[];
    let averageArray = [];
    let tempDateObj = {};

    props.readings.forEach(
        (element, index) =>{

            if (tempDateObj[moment(element.date_time).format('ddd DD/MM/YY')]) {
                tempDateObj[moment(element.date_time).format('ddd DD/MM/YY')].push(element.temperature);
            } else {
                tempDateObj[moment(element.date_time).format('ddd DD/MM/YY')] = [element.temperature];
            }
        }
    )

    let resultDateTemp = Object.keys(tempDateObj).map(function(key){
        timeArray.push(key);
        return tempDateObj[key];
    });

    resultDateTemp.forEach(
        (element, index) =>{
            highestNumArray.push(Math.max(...element));
            lowestNumArray.push(Math.min(...element));
            averageArray.push((element.reduce((a,b) => a + b, 0) / element.length).toFixed(1))
        }
    )

   const getOption = () => ({

        legend: {
            data: ['Highest Temperature', 'Lowest Temperature', 'Average Temperature'],
            textStyle: {
                fontFamily: 'Open Sans',
                color: 'black'
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
                data: timeArray,
                textStyle: {
                    fontFamily: 'Ubuntu',
                    color: '#ccc'
                }
                
            },
            yAxis: {
                type: 'value',
            },
            series: [{
                name: 'Highest Temperature',
                smooth:true,
                symbolSize: 9,
                stack: '',
                color: 'red',
                data: highestNumArray,
                type: typeHi,
            },{
                name: 'Lowest Temperature',
                symbolSize: 9,
                stack: '',

                    color:'blue',

                type: typeLow,
                data: lowestNumArray,
                
            },
                {
                    name: 'Average Temperature',
                    color: 'green',
                    symbolSize: 9,
                    stack: '',
                    type: typeAvg,
                    data: averageArray,
                },
                {
                    name: 'Without data for color Y axis',
                    type: 'line',
                    data: [Math.min(...lowestNumArray), Math.max(...highestNumArray)],
                    showSymbol: false,
                    lineStyle: {
                        opacity: 0
                    },
                    markArea: {
                        data: [ [{

                            yAxis: '0',
                            itemStyle: {color: 'rgba(253,0,1,0.5)'}
                        }, {
                            yAxis: props.viewParams.temp_low_critical
                        }], [{

                            yAxis: props.viewParams.temp_high_critical,
                            itemStyle: {color: 'rgba(253,0,1,0.5)'}

                        }, {
                            yAxis: '35'
                        }],
                            [{

                                yAxis: props.viewParams.temp_low_critical,
                                itemStyle: {color: 'rgba(253,253,1,0.5)'}
                            }, {
                                yAxis: props.viewParams.temp_low_warn
                            }], [{

                                yAxis: props.viewParams.temp_high_warn,
                                itemStyle: {color: 'rgba(253,253,1,0.5)'}

                            }, {
                                yAxis: props.viewParams.temp_high_critical
                            }],
                            [{

                                yAxis: props.viewParams.temp_low_warn,
                                itemStyle: {color: 'rgba(0,127,1,0.4)'}

                            }, {
                                yAxis: props.viewParams.temp_high_warn
                            }]
                        ],

                    },

                },


            ]
 
    
});

        return (
            <div className="">
                <ReactEcharts option={getOption()} style={{ height: 400 , width:'100%', background: 'white', borderRadius:"20px"}} />
                <GraphSwitch  click={()=>{
                    console.log("CLICK "+typeHi)
                    typeHi === "line" ? setTypeHi('bar') :
                        setTypeHi('line')
                }}
                />
                <GraphSwitch style={{margin:"10px"}} click={()=>{
                    console.log("CLICK "+typeLow)
                    typeLow === "line" ? setTypeLow('bar') :
                        setTypeLow('line')
                }}
                />
                <GraphSwitch  style={{margin:"10px"}} click={()=>{
                    console.log("CLICK "+typeAvg)
                    typeAvg === "line" ? setTypeAvg('bar') :
                        setTypeAvg('line')
                }}
                />
            </div>
        );

}
export default HighLow;