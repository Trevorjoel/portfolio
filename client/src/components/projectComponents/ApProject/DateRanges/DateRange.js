import React from "react";
import DatePicker from "react-datepicker";
import classes from './DateRange.module.css';
import "react-datepicker/dist/react-datepicker.css";
import { Button, ToggleButtonGroup, Row, Col} from 'react-bootstrap';
import ToggleButton from "react-bootstrap/ToggleButton";
import {selectAllReadings,
} from '../ApProjectCtrl/apProjectControllers';
class DateRange extends React.Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <div className={classes.Wrap}>
                <Row>
                    <Col lg={6}>
                        <p>Previous</p>
                <ToggleButtonGroup className={classes.Pick} type="radio" name="options" defaultValue={'week'}>
                    <ToggleButton value={'day'} onClick={()=>this.props.click(selectAllReadings,25)}  color="primary">Day</ToggleButton>
                    <ToggleButton value={'week'} onClick={()=>this.props.click(selectAllReadings,169)} color="primary">Week</ToggleButton>
                    <ToggleButton value={'month'} onClick={()=>this.props.click(selectAllReadings,720)} color="primary">Month</ToggleButton>
                    <ToggleButton value={'year'} onClick={()=>this.props.click(selectAllReadings,8760)} color="primary">Year</ToggleButton>
                    <ToggleButton value={'all'} onClick={()=>this.props.click(selectAllReadings,676)} color="primary">All Time</ToggleButton>
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