import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


class ChangeDate extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.submitDate}>
                <InputGroup>
                <InputGroupAddon addonType="prepend">Date</InputGroupAddon>
                <Input 
                    type="text"
                    placeholder="YYYY-DD-MM"
                    value = {this.props.value}
                    onChange = {this.props.change}
                />
            </InputGroup>
            </form>
            
        );
    }
}

export default ChangeDate;