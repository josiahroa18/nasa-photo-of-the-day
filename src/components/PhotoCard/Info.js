import React from 'react';

class Info extends React.Component{
    render(){
        return(
            <div className="info">
                <h3>{this.props.title}</h3>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}

export default Info;