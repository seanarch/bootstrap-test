import React from 'react';

const SubmitForm = () => {
    return (
        <div>
            <div className="text-center">
                <h2>Get in touch</h2>
                <p className="lead">Questions? Do not hesitate to contact us.</p>
            </div>
            <div className="row justify-content-center my-5">
                <div className="col-lg-6">
                    <form action="">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="my@email.com"
                            className="form-control"
                        />
                        <div className="form-floating my-5">
                            <input
                                type="name"
                                id="name"
                                placeholder="e.g. Dawid"
                                className="form-control"
                            />
                            <label htmlFor="name" className="form-label">Name:</label>
                        </div>
                        <label htmlFor="subject" className="form=label">Subject</label>
                        <select name="subject" id="subject" className="form-select" defaultValue="technical">
                            <option value="pricing">Pricing</option>
                            <option value="technical" >Technical question</option>
                            <option value="other">Other</option>
                        </select>

                        <div className="form-floating my-5">
                            <textarea
                                name="query"
                                id="query"
                                style={{ height: "150px" }}
                                className="form-control"
                                placeholder="Write a message"
                            ></textarea>

                            <label htmlFor="query">Write a message</label>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Send!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SubmitForm;
