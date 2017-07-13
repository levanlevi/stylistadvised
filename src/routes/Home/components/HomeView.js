import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <div>
      <h4>Welcome!</h4>
      <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
    </div>
    <div>
      <h2>News on Server Side Development</h2>
    </div>
  </div>
)

export default HomeView
