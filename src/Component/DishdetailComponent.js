import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

function DishDetail({ dish }) {
    if (dish === null) {
        return <div></div>;
    }

    function renderComments(comments) {
        if (comments === null) {
            return <div></div>;
        }

        const commentList = comments.map((comment) => (
            <ListGroupItem key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {new Date(comment.date).toDateString()}</p>
            </ListGroupItem>
        ));

        return (
            <div>
                <h4>Comments</h4>
                <ListGroup className="list-unstyled">{commentList}</ListGroup>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    {renderComments(dish.comments)}
                </div>
            </div>
        </div>
    );
}

export default DishDetail;
