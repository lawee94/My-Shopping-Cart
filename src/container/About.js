import React from 'react';
import pix from '../assests/pix.jpg';

const about = () => (
    <div className='bg-dark row py-5'>
        <div className='col-sm-6 text-center'>
            <img src={pix} className='img-fluid img-thumbnail mx-auto' alt='' width='400' />
        </div>
        <div className='col-sm-6 text-white px-5'>
            <h2>About Me</h2><hr style={{borderColor: '#fff'}} />
            <h5>I'am Full Stack Web Developer, UI/UX & Graphic Designer who  focused on
                    crafting clean & user-freindly experience</h5>
            <h2 className='mt-5'>Contact Details</h2><hr style={{borderColor: '#fff'}} />
            <h5>Omojugba Olawale Festus</h5><br />
            <h5>5 Kajero Street Akoko-Shomolu Lagos </h5><br />
            <h5>08068139788</h5><br />
            <h5>festac94@gmail.com</h5>
        </div>

    </div>
)


export default about;