import React from "react";

import ReactEcharts from "echarts-for-react";

const LineGraph = (props) => {
    const timeData = [];
    const tempData = [];
    const perc = 0;
    let finalNum = 0;

    // convert the time into 24hr
    const timeConverter = (dateTime) => {
        let dateArray;
        const a = new Date(dateTime);
        const hrs = a.getHours();
        const mins = ('0' + a.getMinutes()).slice(-2); //adds a 0

        const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
       // const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        let month = a.getMonth()+1;
        let day = days[a.getDay()];
        let date = a.getDate()

        dateArray =  hrs + ':' + mins+' ' + day+ ' '+ date +'/'+ month ;
        return dateArray;

    }

        props.readings.map((reading, index) => {
        timeData.push(timeConverter(reading.date_time))
        tempData.push(reading.temperature)

    });

    const getOption = () => ({

        legend: {
            data: ['Temperature', 'Lowest Temperature'],
            textStyle: {
                fontFamily: 'akkurta,Inconsolata, monospace',
                color: '#050404'
            }
        },
        dataZoom: [{
            type: 'inside',
            //maxValueSpan: 3600 * 24 * 1000 * 1,
            start:  0,//100 - ( 23 /timeData.length ) * 100,
            end: 100

        }, {
            start: 100,
            end: 100,
            handleIcon:
                'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
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
            data: timeData,
            textStyle: {
                fontFamily: 'Open Sans',
                color: '#ccc'
            }

        },
        yAxis: {
            type: 'value',
        },

        series: [{
            lineStyle: {
                color: 'blue',
                width: 2
            },
            symbolSize: 6,
            //symbol: 'circle',
          color: 'blue',
            name: 'Temperature',
            smooth: true,
            stack: '',
            //areaStyle: {color: '#dce2eb'},
            data: tempData,
            type: 'line',
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

            }
        },

        ],



    });
    return (
        <ReactEcharts option={getOption()} style={{height: 500, width: '100%', background: 'white'}}/>
    );


}
export default LineGraph;
