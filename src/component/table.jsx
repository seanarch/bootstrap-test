import React from 'react'

export default function Table() {
    return (
        <div>
            <h2>Table responsive dark</h2>
            <div className="table-responsive-md">
                <table className="table table-bordered table-striped table-info">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>cell</td>
                            <td>cell</td>
                            <td>cell</td>
                            <td>cell</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>cell</td>
                            <td>cell</td>
                            <td>cell</td>
                            <td>cell</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>cell</td>
                            <td>cell</td>
                            <td>cell</td>
                            <td>cell</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
