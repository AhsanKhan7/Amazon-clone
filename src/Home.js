import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <img
                className='home_image'
                src='https://media.gettyimages.com/photos/the-logo-of-us-online-retail-giant-amazon-is-seen-at-the-distribution-picture-id1208650188?s=2048x2048'
                alt=''/>

            <div className='home__row'>
                <Product 
                    id='123'
                    title='The Lean startup: How constant Innovation Creates Success'
                    price={11.96}
                    rating={5}
                    image='https://www.authentic.com.au/wp-content/uploads/2020/04/The-Lean-Startup-Eric-Ries-free-PDF-eBook-summary.jpg'
                />
                 <Product 
                    id='456'
                    title='The Juicer blender. full kit of juicer for your kitchen'
                    price={100.96}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/718nPun2KeL._AC_UL320_.jpg'/>
            </div>

            <div className='home__row'>
            <Product 
                    id='789'
                    title='Portable chair for lawn'
                    price={50.80}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/71i08qnZeDL._AC_UL320_.jpg'/>
                 <Product 
                    id='90'
                    title='The stylish italiyan digital watch'
                    price={101.96}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                />
                <Product 
                    id='80'
                    title='The Alexa AI device '
                    price={11.96}
                    rating={4}
                    image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
                />
            </div>

            <div className='home__row'>
                <Product 
                    id='70'
                    title='The Samsung ultra 4K lED tv'
                    price={50.80}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_UL320_.jpg'/>
            </div>
        </div>
    )
}

export default Home
