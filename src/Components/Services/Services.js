import React from 'react'
import './services.scss'

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="text-area">
                    <h3 className='section-title'>Our Services</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic et esse id illo corporis doloribus, ipsum illum beatae nobis.</p>
                </div>
                <div className="blocks">
                    <div className="block"><i className="fas fa-magic"></i> <span>Design</span></div>
                    <div className="block"><i className="fas fa-laptop-code"></i><span>Planning</span></div>
                    <div className="block"><i className="fas fa-people-carry"></i><span>Team Work</span></div>
                </div>
            </div>
        </div>
    )
}

export default Services
