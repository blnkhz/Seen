'use strict'

import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer>
            <div className="kicsiFooter">
                    <Container className="footerText" fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="/"> Seen.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;