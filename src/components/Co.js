 import React, { Component } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from 'reactstrap';
 
 class Co extends Component {
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardSubtitle className='font-weight-bold'>Java Course</CardSubtitle>
                        <CardText>It is a java Course beginner...</CardText>
                       
                        <Container>
                        <Button color='danger'>Delete</Button>
                        <Button color="warning ml-3">Update</Button>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        );
    }
 }
 
 export default Co;