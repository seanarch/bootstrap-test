import React from 'react';

const Typography = () => {
    return (
        <div className="">
            <h2>Typography</h2>
            <div className="row">
                <div className="col-md-4">
                    <h1>Real headings</h1>
                    <h1>h1. Bootstrap heading</h1>
                    <h2>h2. Bootstrap heading</h2>
                    <h3>h3. Bootstrap heading</h3>
                    <h4>h4. Bootstrap heading</h4>
                    <h5>h5. Bootstrap heading</h5>
                    <h6>h6. Bootstrap heading</h6>
                </div>

                <div className="col-md-4">
                    <h1>Paragraphs looking like headings</h1>
                    <p className="h1">h1. Bootstrap heading</p>
                    <p className="h2">h2. Bootstrap heading</p>
                    <p className="h3">h3. Bootstrap heading</p>
                    <p className="h4">h4. Bootstrap heading</p>
                    <p className="h5">h5. Bootstrap heading</p>
                    <p className="h6">h6. Bootstrap heading</p>
                </div>

                <div className="col-md-4">
                    <h1 className="display-1">Display 1</h1>
                    <h1 className="display-2">Display 2</h1>
                    <h1 className="display-3">Display 3</h1>
                    <h1 className="display-4">Display 4</h1>
                </div>

            </div>

        </div>
    );
}

export default Typography;