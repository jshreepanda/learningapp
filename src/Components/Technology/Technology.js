import React from 'react';
import './technology.scss'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript, SiReact } from 'react-icons/si'



const Technology = () => {
    return (
        <div className="technology">
            <div className="container">
                <div className='textArea'>
                    <h3 className='section-title'>We use cutting edge technology</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum quam eos doloribus ipsam mollitia repellat id laboriosam numquam odio odit sapiente molestiae, optio quidem. Animi aliquam quod eum quasi officia, autem veritatis tempora voluptatem dignissimos ad quas expedita iste quo, repellat necessitatibus voluptas iusto sint sit reprehenderit quos numquam!</p>
                </div>
                <div className='iconHolder'><div className="icons">
                    <AiFillHtml5 className='icon' /> <DiCss3 className='icon' /><SiJavascript className='icon' /><SiReact className='icon' />
                </div>
                </div>

            </div>
        </div>
    )
}

export default Technology
