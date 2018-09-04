import React from 'react';
import { Container, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer>
            <div className="kicsiFooter">
                    <Container className="footerText" fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="/"> Seen</a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;