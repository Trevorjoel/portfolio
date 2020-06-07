import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Dropdown = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} defaultValue={"week"}>
            <DropdownToggle color="primary"  caret>
                View
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Previous:</DropdownItem>
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
