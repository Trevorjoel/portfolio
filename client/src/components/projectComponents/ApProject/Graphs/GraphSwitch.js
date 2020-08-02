import React, { Component } from "react";
import Switch from "react-switch";

class GraphSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <label style={{padding:"10px"}} onClick={()=>this.props.click()}>
                <Switch
                    height={30}
                    width={80}
                    checkedIcon={<p style={{marginLeft:"10px"}}>Bar</p>}
                    uncheckedIcon={<p>Line</p>}
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    offColor={"#c0e77f"}
                    onColor={"#64B6FF"}

                />
            </label>
        );
    }
}
export default GraphSwitch;