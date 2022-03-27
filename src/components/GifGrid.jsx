import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
//import { getGifs } from '../helpers/getGifs'
const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    //data:images renombre la variables destructurada
  return (
      <>
    <h3 className='nimate__animated animate__flash'>{category}</h3>
    {loading && <h3>Loading...</h3>}
     <div className='card-grid'>
        {
            images.map( img => 
            <GifGridItem key={img.id} {...img}/>)
        }
       
    </div> 
    </>
  )
}

export default GifGrid