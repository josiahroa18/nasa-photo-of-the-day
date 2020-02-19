import React from 'react';

class Image extends React.Component{
    render(){
        return (
            <img src={this.props.url} alt="Pic of the day"></img>
        );
    }
}

export default Image;