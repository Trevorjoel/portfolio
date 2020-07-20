import React from "react";
import ReactEcharts from "echarts-for-react";
import moment from "moment";


const HighLow = (props)=> {
    /*const timeData = [];
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

    });*/

    let highestNumArray = [];
    let lowestNumArray = [];
    let timeArray =[];
    /*let highStore =[];
    let averageStore =[];
    let lowStore = [];*/
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


    // Collect 24hrs of temperature readings & create two arrays,
    // highest readings and lowest readings for each 24hr period
    /*tempData.forEach(
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
    )*/
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
                //areaStyle: {color: 'green'},
                data: highestNumArray,
                type: 'line',
            },{
                name: 'Lowest Temperature',
                symbolSize: 9,
                stack: '',
                /*areaStyle: {
                    color:'blue'
                },*/
                type: 'line',
                data: lowestNumArray,
                
            },
                {
                    name: 'Average Temperature',
                    symbolSize: 9,
                    stack: '',
                    type: 'line',
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
            </div>
        );

}
export default HighLow;