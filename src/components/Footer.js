import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import '../App.css';

function Footer(){
    return(
        <footer>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <h5>Made by Josiah</h5>
                </Container>
            </React.Fragment>
        </footer>
    )
}

export default Footer