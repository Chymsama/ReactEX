import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const RenderDish = (dish) => {
    if (dish != null) {
        return (
            <DishDetail dish={dish} />
        );
    } else {
        return <div></div>;
    }
};

function RenderComments(dishComments) {
    if (dishComments === null) {
        return <div></div>;
    }

    const commentList = dishComments.map((comment) => (
        <ListGroupItem key={comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
            </p>
        </ListGroupItem>
    ));

    return (
        <div>
            <h4>Comments</h4>
            <ListGroup className="list-unstyled">{commentList}</ListGroup>
        </div>
    );
}

function DishDetail({ dish, comments }) {
    if (!dish) {
        return <div></div>;
    }

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={comments} />
                </div>
            </div>
        </div>
    );

}

export default DishDetail;
