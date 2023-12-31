import React from 'react'
import Fotogallery from '../components/Fotogallery';
import HeaderText from '../components/HeaderText';
import Navbar from '../components/NavBar';

const FotogalleryPage = () => {


  return (
    <div>

        <div>
            <Navbar />
        </div>

        <section id="fotogallery" className="text-black mt-48">
            <HeaderText font_weight={"font-semibold"} size="2xl" headerText="Fotogalerie" color="black" underline={true} />
            <Fotogallery />
        </section>
    </div>
  )
}

export default FotogalleryPage;