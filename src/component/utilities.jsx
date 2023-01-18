import React from 'react';

const Utilities = () => {
    return (
        <div>
            <h2>Utilities</h2>
            <div className='mt-5 border border-1 border-dark w-50 mx-auto p-5'>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptate tempore quisquam incidunt. Ipsam, fuga eius dolorem doloribus ea, perspiciatis ratione commodi odit esse illum non quam, id voluptate eaque!
                </p>
                <p className='m-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero facilis nisi veritatis aperiam reiciendis ullam, tenetur itaque expedita! Obcaecati saepe officiis rem incidunt molestiae tempora at quis beatae ipsum dolore?
                </p>
                <div className="w-50 mx-auto text-center bg-dark text-white">Centered element</div>
            </div>

            <div className="">
                <div className="d-flex justify-content-start">
                    <div className="p-2">Flex item 1</div>
                    <div className="p-2">Flex item 2</div>
                    <div className="p-2">Flex item 3</div></div>
                <div className="d-flex justify-content-end">
                    <div className="p-2">Flex item 1</div>
                    <div className="p-2">Flex item 2</div>
                    <div className="p-2">Flex item 3</div></div>
                <div className="d-flex justify-content-center">
                    <div className="p-2">Flex item 1</div>
                    <div className="p-2">Flex item 2</div>
                    <div className="p-2">Flex item 3</div></div>
                <div className="d-flex justify-content-between">
                    <div className="p-2">Flex item 1</div>
                    <div className="p-2">Flex item 2</div>
                    <div className="p-2">Flex item 3</div></div>
                <div className="d-flex justify-content-around">
                    <div className="p-2">Flex item 1</div>
                    <div className="p-2">Flex item 2</div>
                    <div className="p-2">Flex item 3</div></div>
            </div>

            <div className="d-flex flex-column bd-highlight mb-3 border border-1 border-dark mt-5 shadow-lg">
                <div className="p-2 bd-highlight">Flex item 1</div>
                <div className="p-2 bd-highlight">Flex item 2</div>
                <div className="p-2 bd-highlight">Flex item 3</div>
            </div>
        </div>
    );
}

export default Utilities;
