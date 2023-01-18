function Grid() {
    return (
        <div className="App">
            <div className="container-md border">
                <div className="row">
                    <div className="col-lg-8 col-md-6">Col 1</div>
                    <div className="col-lg-4 col-md-6">Col 2</div>
                </div>
            </div>
            <br></br>
            <div className="container-md border">
                <div className="row align-items-end" style={{ height: 500 }}>
                    <div className="col">One of three columns</div>
                    <div className="col">Two of three columns</div>
                    <div className="col">Three of three columns</div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-2">1</div>
                    <div className="col-2">2</div>
                </div>
            </div>

            <h2 className="text-center my-5">Gutter</h2>
            <div className="container my-5">
                <div className="row gx-5">
                    <div className="col-6">
                        <div className="child">1</div>
                    </div>
                    <div className="col-6">
                        <div className="child">2</div>
                    </div>
                    <div className="col-6">
                        <div className="child">3</div>
                    </div>
                    <div className="col-6">
                        <div className="child">4</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grid;
