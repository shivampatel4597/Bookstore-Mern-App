import React from 'react'

function Card({item}) {
    console.log(item);
  return (
    <>
    <div className='mt-4 p-3'>
    <div className="card w-80 h-85  bg-base-100 shadow-xl z-10">
  <figure><img src={item.image} /></figure>
  <div className="card-body bg-white">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex items-center justify-between">
      <div className="px-4 py-4 badge badge-outline">{item.price}</div> 
      <div className="px-4 py-4  badge badge-outline hover:bg-pink-500 hover:text-white transition-colors duration-500 ease-in-out">Buy now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card