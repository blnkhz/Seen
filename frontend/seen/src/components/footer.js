import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer light color="white" className="footerke">
                <Container fluid className="text-center text-md-left">
                    <Row>
                    <Col sm="6">
                        <h5 className="dark-grey-text">Footer Content</h5>
                        <hr className="grey accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                        <p className="dark-grey-text">Here you can use rows and columns here to organize your footer content.</p>
                    </Col>
                    <Col sm="4">
                        <h5 className="dark-grey-text">Links</h5>
                        <hr className="grey accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '30px'}}/>
                        <ul>
                        <li className="list-unstyled"><a className="dark-grey-text" href="#!">Home</a></li>
                        <li className="list-unstyled"><a className="dark-grey-text" href="#!">Seen</a></li>
                        <li className="list-unstyled"><a className="dark-grey-text" href="#!">Have Seen</a></li>
                        <li className="list-unstyled"><a className="dark-grey-text" href="#!">About</a></li>
                        <li className="list-unstyled"><a className="dark-grey-text" href="#!">Faq</a></li>
                        </ul>
                    </Col>
                    </Row>
                </Container>
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