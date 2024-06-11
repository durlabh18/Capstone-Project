import React from 'react'
import './ExploreTopBooks.css'
import Image from './Assets/image-2.jpg'

const ExploreTopBooks = () => {
  return (
    <div className='header-book'>
      <div className='container-book'>
        <div className='explore-book'>
            <img src={Image} alt=''/>
            <h1>Find your next adventure</h1>
            <p>Where would you like to go next?</p>
            <a type='button' href='/login'>Explore top books!</a>
        </div>
      </div>
    </div>
  )
}

export default ExploreTopBooks