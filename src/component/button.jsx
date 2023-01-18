import React from 'react';


const Button = () => {
    return (
        <div className="">
            <h2>Buttons</h2>
            <div className="container my-5">
                <button className="btn btn-primary">Click me!</button>
                <button className="btn btn-secondary">secondary</button>
                <button className="btn btn-success">success</button>
                <button className="btn btn-danger">danger</button>
                <button className="btn btn-warning">warning</button>
                <button className="btn btn-info">info</button>
                <button className="btn btn-light">light</button>
                <button className="btn btn-dark">dark</button>
            </div>
            <div className="container my-5">
                <button className="btn btn-outline-primary">primary</button>
                <button className="btn btn-outline-secondary">secondary</button>
                <button className="btn btn-outline-success">success</button>
                <button className="btn btn-outline-danger">danger</button>
                <button className="btn btn-outline-warning">warning</button>
                <button className="btn btn-outline-info">info</button>
                <button className="btn btn-outline-light">light</button>
                <button className="btn btn-outline-dark">dark</button>
            </div>
        </div>
    );
}

export default Button;