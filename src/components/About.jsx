import React from 'react'

const About = () => {
  return (
    <div
    name="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
        
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
            </div>
            <p className='text-xl mt-20 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi dolor asperiores ea, minima, magni ut dicta amet quaerat nihil vel vero nobis expedita placeat quia laborum natus assumenda aliquid? Temporibus consectetur architecto quas maiores facere, recusandae similique ex labore veniam nemo. Dignissimos optio ipsum porro totam expedita! Esse, ratione dignissimos.</p>

            <br/>
            <p className='text-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit eum mollitia molestias, deserunt ipsum porro tempora corrupti laudantium. Assumenda amet ut quae consectetur repudiandae iste. Perferendis obcaecati similique suscipit quos officia, saepe eum explicabo eius porro dicta nobis veniam ratione tempora maiores, nesciunt sequi, ipsum nihil incidunt ipsam a nulla!
            </p>
        </div>
    </div>
  )
}

export default About