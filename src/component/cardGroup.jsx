import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const CardGroups = () => {
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://picsum.photos/id/200/320/200" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        <div className="text-center">
                            <a href="#"><button className="btn btn-primary">Click</button></a>
                        </div>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://picsum.photos/id/201/320/200" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        <div className="text-center">
                            <a href="#"><button className="btn btn-primary">Click</button></a>
                        </div>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://picsum.photos/id/202/320/200" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        <div className="text-center">
                            <a href="#"><button className="btn btn-primary">Click</button></a>
                        </div>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
}

export default CardGroups;
