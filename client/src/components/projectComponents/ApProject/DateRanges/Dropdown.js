import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import classes from "./DateRange.module.scss";

const Dropdown = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
// reset
    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className={classes.Button}  color="secondary"  caret>
                {props.dropDownLabel}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>See Previous</DropdownItem>
                <DropdownItem value={'day'} onClick={props.showDay}>Day</DropdownItem>
                <DropdownItem value={'week'} onClick={props.showWeek}>Week</DropdownItem>
                <DropdownItem value={'month'} onClick={props.showMonth}>Month</DropdownItem>
                <DropdownItem value={'year'} onClick={props.showYear}>Year</DropdownItem>
                <DropdownItem value={'all'} onClick={props.showAll}>All time</DropdownItem>

            </DropdownMenu>
        </ButtonDropdown>
    );
}

export default Dropdown;
