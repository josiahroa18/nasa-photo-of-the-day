import React from 'react';

class ChangeDate extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.submitDate}>
                <p>Select Date: </p>
                <input 
                    type="text"
                    placeholder="YYYY-DD-MM"
                    value = {this.props.value}
                    onChange = {this.props.change}
                ></input>
            </form>
        );
    }
}

export default ChangeDate;