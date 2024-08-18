import React from 'react'
import { Assets } from './assets'
import { Container, Main, Wrapper } from './components'
import {faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import SocialIcon from './components/socialIcon'

export default function App() {
  const [error, setError] = React.useState('')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = (e.currentTarget.email as HTMLInputElement).value

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setError('Please provide a valid email address')
    }

    return setError('')
  }

  function socialsContent() {
    const socialsData = [
      faFacebookF,
      faTwitter,
      faInstagram
    ] 

    return socialsData.map((social, index) => (
      <SocialIcon key={index} icon={social} />
    ))
  
  }

  return (
    <Main className='font-libre-fanklin grid place-items-center min-w-full py-[81px] px-[28px]'>

      <Container className='w-full flex flex-col items-center max-w-[640px]'>

        <Wrapper className='flex flex-col gap-[32px] items-center max-w-[302px] sm:max-w-none'>
          <img className='object-contain w-[56px] sm:w-[90px]' src={Assets.logo} alt="" />

          <Wrapper className='flex flex-col items-center gap-[15px]'>
            <h1 className='font-light text-[22px] sm:text-[44px] sm:leading-[60px]  text-[#969696] leading-[32px] tracking-normal'>We are launching <span className='font-bold text-[#15202A]'>soon!</span></h1>
            <p className='font-light text-[12px] sm:text-[20px] text-[#15202A]'>Subscribe and get notified</p>
          </Wrapper>

          <form onSubmit={onSubmit} className='flex flex-col flex-nowrap w-full gap-[10px] sm:flex-row sm:gap-[16px]'>
            <div className='flex flex-col gap-[2px]'>
              <input className={`outline-none text-[12px] sm:text-[16px] font-light border ${error ? 'border-[#FF5466]' : 'border-[#C2D3FF]'} min-w-[281px] sm:min-w-[421px] h-[40px] sm:h-[56px] pl-[32px] sm:pl-[30px] rounded-full flex items-center placeholder-[#B8C7ED] placeholder:text-[12px] sm:placeholder:text-[16px]`} type="text" name="email" id="email" placeholder='Your email address…' />
              {error && <p className='italic text-[10px] text-[#FF5466] leading-[20px] tracking-[0.13px] self-center sm:self-start sm:pl-[32px] sm:text-[12px]'>{error}</p>}
            </div>

            <button className='bg-[#4C7BF3] min-w-[282px] sm:min-w-[200px] h-[40px] sm:h-[56px] rounded-full text-white font-semibold text-[12px] sm:text-[16px] leading-[16px] hover:opacity-80' type="submit">
              Notify Me
            </button>
          </form>
        </Wrapper>

        <img className='object-contain mt-[72px] sm:mt-[94px]' src={Assets.illustrationDashboard} alt="" />


        <footer className='flex flex-col gap-[27px] items-center mt-[120px] sm:mt-[72px]'>
          <Wrapper className='flex gap-[10px] sm:gap-[12px]'>
            {socialsContent()}
          </Wrapper>

          <p className='font-light text-[10px] sm:text-[12px] text-[#969696]'>
            © Copyright Ping. All rights reserved.
          </p>
        </footer>
      </Container>

    </Main>
  )
}
