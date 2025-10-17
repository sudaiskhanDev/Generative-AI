import React from 'react'
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"
const Verified = () => {
  return (
    <>
    <div className="main-temm text-white flex flex-col items-center justify-center w-full px-5">
        <h1 className='font-bold' >TRUSTED BY LEADING TEAMS</h1>
<ScrollVelocityContainer className="py-10 text-white">
  <ScrollVelocityRow baseVelocity={20} direction={1}>
    <div className="flex items-center gap-10 md:gap-16 bg-[#f7f7f7] py-5">
      <img
        src="/google.png"
        alt="Google Logo"
        className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
      />
      <img
        src="/yt.png"
        alt="YouTube Logo"
        className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
      />
      <img
        src="/uber.png"
        alt="Uber Logo"
        className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
      />
      <img
        src="/meta.png"
        alt="Meta Logo"
        className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
      />
      <img
        src="/ms.png"
        alt="Microsoft Logo"
        className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition"
      /> <br />
    </div>
  </ScrollVelocityRow>
</ScrollVelocityContainer>

    </div>
    </>
  )
}

export default Verified