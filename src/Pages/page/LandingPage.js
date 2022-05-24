import React from 'react'
import logo from '../../Assets/Img/logo.png'
import bgcar from '../../Assets/Img/img_car.png'

import './Landingpage.css'

export const LandingPage = () => {
  return (
    <div className='Header'>
        <div className='header container-fluid' id='navigasi'>
            <nav className='navbar nav navbar-expand-lg'>
                <div className='container'>
                    <a href='#navigasi'>
                        <img src={logo} alt='logo' />
                    </a>
                    <div className='button btn-info'>
                        <button
                            className='navbar-toggler dropdown-toggle bg-transparant border'
                            type='button'
                            value='menu'
                            data-bs-toggle='collapse'
                            data-bs-target='#navbarNav'
                            aria-controls='navbarNav'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                    </div>
                    <div className='justify-content-end' id='navbarNav'>
                        <ul className='navbar-nav menu'>
                            <li className="menu_item"><a href="#">Our Services</a></li>
                            <li className="menu_item"><a href="#">Why Us</a></li>
                            <li className="menu_item"><a href="#">Testimonial</a></li>
                            <li className="menu_item"><a href="#">FAQ</a></li>
                        </ul>
                        <button>Register</button>
                    </div>
                </div>
            </nav>

            <div className='container'>
                <div className='main'>
                    <div className='row g-0 align-items-center'>
                        <div className='col-12 col-md-6 px-2 pe-md-5 cell-1'>
                            <div className='main_desc'>
                                <h1>Sewa Rental Mobil Terbaik di Kawasan Anda</h1>
                                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                                <button id="btn">Mulai Sewa Mobil</button>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 cell-2'>
                            <div className='main_img position-relative mt-3 mt-md-0'>
                                <img src={bgcar} className='car_img img-fluid' alt='car' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
