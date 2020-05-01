import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";


const HighLow = (props)=> {
    const timeData = [];
    const tempData = [];

    // Convert time from the JSON format to user readable
    const timeConverter = (dateTime) => {
        let dateArray;
        const a = new Date(dateTime);
        const hrs = a.getHours();
        const mins = ('0' + a.getMinutes()).slice(-2); //adds a 0 if the

        const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        // const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        let month = a.getMonth()+1;
        let day = days[a.getDay()];
        let date = a.getDate()

        dateArray =  day + ' '+ date +'/'+ month ;
        return dateArray;

    }
    props.readings.map((reading, index) => {
        timeData.push(timeConverter(reading.date_time))
        tempData.push(reading.temperature)

    });

    let highestNumArray = [];
    let lowestNumArray = [];
    let timeArray =[];
    let highStore =[];
    let averageStore =[];
    let lowStore = [];
let averageArray = [];

    // Collect 24hrs of temperature readings & create two arrays,
    // highest readings and lowest readings for each 24hr period
    tempData.forEach(
        (element, index) =>{

            if(index % 24 === 0 && index !== 0){

                highStore.push(element);
                lowStore.push(element);
                averageStore.push(element)
                highestNumArray.push(Math.max(...highStore));
                lowestNumArray.push(Math.min(...lowStore));
                averageArray.push( averageStore.reduce((a,b) => a + b, 0) / averageStore.length)
                timeArray.push(timeData[index])
                highStore =[];
                lowStore = [];
                averageStore = [];
            }else{
                highStore.push(element);
                lowStore.push(element);
                averageStore.push(element)
            }
           // console.log(averageArray)
        }
    )
   const getOption = () => ({

        legend: {
            data: ['Highest Temperature', 'Lowest Temperature', 'Average Temperature'],
            textStyle: {
                fontFamily: 'akkurta,Inconsolata, monospace',
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
                data: highestNumArray,
                type: 'line'
            },{
                name: 'Lowest Temperature',

                stack: '',
                areaStyle: {
                    color:'blue'
                },
                type: 'line',
                data: lowestNumArray,
                
            },
                {
                    name: 'Average Temperature',

                    stack: '',

                    type: 'line',
                    data: averageArray,

                },
            ]
 
    
});

        return (
            <div className="">
                <ReactEcharts option={getOption()} style={{ height: 400 , width:'100%', background: '#eee'}} />
            </div>
        );

}
export default HighLow;