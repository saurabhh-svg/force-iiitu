import React from 'react'
import Button from '../../components/Button/Button'
import './wall.css'

const Card = ({image,background,color,title,subtitle,description,link}) => {
  return (
    <div className='event-card' style={{
        backgroundImage: `url(${background})`,
        backgroundColor: color
    }}>
        <div className='event-card-image'>
            <img src={image} alt={title} />
        </div>
        <div className='event-card-content'>
            <div className='event-card-content-head'>
                <span>{title}</span>
                <span>{subtitle}</span>
            </div>
            <div className='event-card-content-body'>
                {description}
            </div>
            <div className='event-card-content-button'>
                <Button href={link} text='Know More' color='white' />
            </div>
        </div>
    </div>
  )
}

export default Card