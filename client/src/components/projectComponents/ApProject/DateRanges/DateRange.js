import React from "react";
import DatePicker from "react-datepicker";
import classes from './DateRange.module.css';
import "react-datepicker/dist/react-datepicker.css";
import { ToggleButtonGroup, Row, Col} from 'react-bootstrap';
import ToggleButton from "react-bootstrap/ToggleButton";
import {selectReadings,
} from '../ApFunctions/apFunctions';
class DateRange extends React.Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
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
                onChange={this.handleChange}
                className={classes.Pick}
            /></label>
                <label>To: <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                /></label>

                    </Col>
                </Row>
            </div>
        );
    }
}
export default DateRange;