import React from 'react'
import insta from '../assets/instagram.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import download from '../assets/download.png'
import resume from '../assets/Shivam kumar.pdf'

const AsideNav = () => {
  return (
    <div className='hidden md:flex fixed top-[40vh] right-5 flex-col gap-4 z-50 bg-white/30 rounded-2xl p-3 backdrop-blur-md hover:bg-white animate-fade-in transition-all duration-300 shadow-md'>
      <a href="" className='hover:translate-y-0.5'><img src={insta} alt="" /></a>
      <a href="" className='hover:translate-y-0.5'><img src={github} alt="" /></a>
      <a href="" className='hover:translate-y-0.5'><img src={linkedin} alt="" /></a>
      <a href="mailto:shivam7170540@gmail.com" className='hover:translate-y-0.5'><img src={mail} alt="" /></a>
      <a href={resume} download className='hover:translate-y-0.5'><img src={download} alt="" /></a>
    </div>
  )
}

export default AsideNav
