import React from 'react';

const Cards = () => {

    return (
        <div className="container my-5">
            <br />
            <h2>Cards</h2>
            <div className="card" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/200/300" className='card-img-top' alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title
                    </p>
                    <a href="#" className='btn btn-primary'>Go somewhere</a>
                </div>
            </div>

            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="container my-5">
                <div className="row my-5">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-header">Card header</div>
                            <img src="https://picsum.photos/200/300" alt="" className='card-img-top' />
                            <div className="card-body">Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-3">
                    <div className="card text-white bg-primary mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card text-white bg-secondary mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Secondary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card text-white bg-success mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Success card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card text-white bg-danger mb-3" style={{ maxWidth: "18rem" }}>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Danger card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card text-white bg-warning mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h5 className="card-title">Warning card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card text-white bg-info mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h5 className="card-title">Info card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h5 className="card-title">Light card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h5 className="card-title">Dark card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;