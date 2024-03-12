import React from 'react'
import Button from '../components/micro/button'
import Header from '../components/header'
import RoadmapData from '../components/page/roadMapItem'
import Footer from '../components/footer'

const Roadmap = () => {
  return (
   <>
   <Header/>
    {/* Adjusted the section for full height and flex centering */}
    <section className="text-white flex justify-center items-center min-h-screen">
      <div className="max-w-2xl px-4 md:px-8 text-center  space-y-6">
        {/* Text centering adjustments */}
        <h2 className="text-5xl md:text-7xl font-bold uppercase title_element default-text">
          ABOUT $GOAT
        </h2>
        <p>
          The $Goat is a meme finance layer on bitcoin, focused on creating
          an Healthy, secured and all inclusive meme ecosystem on the
          leading bitcoin layer 2 (stacks), our goal is to bring instant
          utility and ease of launch to meme communities building on
          bitcoin.
        </p>
        <Button>Join Discord</Button>
      </div>
    </section>

    <div className='mb-[5em]'>
    <RoadmapData/>
    </div>
    <Footer/>
   </>
  )
}

export default Roadmap
