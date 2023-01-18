import React from 'react'

const Image = () => {
    return (
        <div className="">
            <h2>Image</h2>
            <div style={{ width: '12%', border: "5px red solid", }}>
                <img className="img-fluid" src="https://picsum.photos/200/300" alt="" />
            </div>
            <h1 className="my-5">
                <img className='img-thumbnail' src="https://picsum.photos/200/300" alt="" />
            </h1>
            <h1 className="my-5">
                <img className='float-end w-25' src="https://picsum.photos/200/300" alt="" />
            </h1>
            <div className="clearfix my-5"></div>

            <h1 className="my-5">
                <img className='d-block mx-auto w-25 rounded' src="https://picsum.photos/200/300" alt="" />
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto veritatis libero voluptatibus adipisci distinctio. Odio fuga dolor beatae nam, ipsum excepturi sed similique? Voluptas inventore natus praesentium delectus reiciendis dolores alias dolorem earum, soluta saepe blanditiis expedita, officia suscipit ducimus velit cum accusantium cupiditate quisquam tempore sed quod, unde accusamus. Accusamus, neque minima assumenda est eveniet odio voluptatem delectus aspernatur exercitationem et ad quam iure blanditiis aliquid, ullam laboriosam molestias, numquam ratione maxime quae sint! Quod ducimus alias itaque perferendis impedit eligendi dolor, adipisci cum ab. Fugit cumque laborum perferendis necessitatibus! Illum similique voluptates atque numquam id laudantium distinctio eius.</p>
        </div>
    );
}

export default Image;