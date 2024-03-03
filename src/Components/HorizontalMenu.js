import React from 'react'
import {Link} from 'react-router-dom'
export default function HorizontalMenu() {
  return (
    <div>
     <div id="wrapper">

<div class="scrollmenu my-2">
  <Link className='scroll-btn mx-2 bg-dark text-light px-3'to='' >All</Link>
  <Link className='scroll-btn mx-2  text-dark' to="/songs" >Songs</Link>
  <Link className='scroll-btn mx-2 text-dark'  to="/Motivation">Motivations Video & Speech</Link>
  <a className='scroll-btn mx-2  text-dark' href="#about">Job Interview</a>
  <a className='scroll-btn mx-2 text-dark' href="#support">Live</a>
  <a className='scroll-btn mx-2  text-dark' href="#blog">News</a>
  <a className='scroll-btn mx-2  text-dark' href="#blog">Bollywood Music</a>
<a className='scroll-btn mx-2  text-dark' href="#blog">Bollywood Movie</a>
  <a className='scroll-btn mx-2  text-dark' href="#blog">Cricket</a>
  <a className='scroll-btn mx-2  text-dark' href="#blog">New To You</a>
 

  

</div>
</div>
    </div>
  )
}
