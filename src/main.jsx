import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu.jsx'
import Hero from './Hero.jsx'
import WhyUs from './WhyUs.jsx'
import Work from './Work.jsx'
import SamplesWrapper from './SamplesWrapper.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Hero/>
    <WhyUs/>
    <Work />
    <SamplesWrapper />
  </React.StrictMode>,
)
