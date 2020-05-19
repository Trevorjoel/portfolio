import React from "react";
import DatePicker from "react-datepicker";
import classes from './DateRange.module.css';
import "react-datepicker/dist/react-datepicker.css";
import { ToggleButtonGroup, Row, Col} from 'react-bootstrap';
import ToggleButton from "react-bootstrap/ToggleButton";
import {selectReadings,
    getReadingsRange,
} from '../ApFunctions/apFunctions';
import moment from 'moment';
class DateRange extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
        };
    }

    setStartDate = date => {

        this.setState({
            startDate: date
        });

        let fromDateStr = moment(date).format('YYYY-MM-DD 00:00:00');
        let toDateStr = moment(this.state.endDate).format('YYYY-MM-DD 23:59:59');

        if (moment(fromDateStr).isAfter(toDateStr))
        {
            toDateStr = moment(fromDateStr).format('YYYY-MM-DD 23:59:59');
        }

        this.props.onDaySelect(getReadingsRange, fromDateStr, toDateStr);


    };

    setEndDate = date => {

        this.setState({
            endDate: date
        });

        let fromDateStr = moment(this.state.startDate).format('YYYY-MM-DD 00:00:00');
        let toDateStr = moment(date).format('YYYY-MM-DD 23:59:59');
        this.props.onDaySelect(getReadingsRange, fromDateStr, toDateStr);
    };
//
    render() {
        return (
            <div className={classes.Wrap}>
                <Row>
                    <Col lg={6}>
                        <p>Previous</p>
                <ToggleButtonGroup className={classes.Pick} type="radio" name="options" defaultValue={'week'}>
                    <ToggleButton value={'day'} onClick={()=>this.props.click(selectReadings,25)} color="primary">Day</ToggleButton>
                    <ToggleButton value={'week'} onClick={()=>this.props.click(selectReadings,169)} color="primary">Week</ToggleButton>
                    <ToggleButton value={'month'} onClick={()=>this.props.click(selectReadings,720)} color="primary">Month</ToggleButton>
                    <ToggleButton value={'year'} onClick={()=>this.props.click(selectReadings,8760)} color="primary">Year</ToggleButton>
                    <ToggleButton value={'all'} onClick={()=>this.props.click(selectReadings, 1000000)} color="primary">All Time</ToggleButton>
                </ToggleButtonGroup>

                    </Col>
                    <Col lg={6}>
                        <p>Range</p>
                    <label>From: <DatePicker
                selected={this.state.startDate}
                maxDate={new Date()}
                onChange={this.setStartDate}
                selectsStart
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                className={classes.Pick}
            /></label>
                <label>To: <DatePicker
                    selected={this.state.endDate}
                    maxDate={new Date()}
                    onChange={this.setEndDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.startDate}
                    minDate={this.state.startDate}
                /></label>

                    </Col>
                </Row>
            </div>
        );
    }
}
export default DateRange;