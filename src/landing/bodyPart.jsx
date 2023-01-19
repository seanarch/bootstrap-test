import React from 'react'
import CardGroups from '../component/cardGroup'

export default function BodyPart() {
    return (
        <div className="my-5">

            <div className='container'>
                <div className="row">
                    <div className="col-md-7">
                        <img src="https://picsum.photos/600/400" alt="..." className='img-fluid' />
                    </div>
                    <div className="col-md-5">
                        <h1 className='mt-5'>Tagline</h1>
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque ipsam beatae illo! Incidunt nisi illum dicta nemo? Nesciunt necessitatibus temporibus assumenda? Deleniti, velit est dolorum culpa doloremque dolorem vel odit.</p>
                        <button className="btn btn-primary mt-5">
                            Call to action!
                        </button>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col">
                        <div className="bg-secondary text-white my-3 py-4 card text-center">
                            <div className="card-body">

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, consequatur.
                            </div>
                        </div>
                    </div>
                </div>

                <CardGroups />
            </div>
        </div>
    )
}
