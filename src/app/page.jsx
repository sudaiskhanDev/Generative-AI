import React from 'react'
import NavBar from '@/components/NavBar'
import Verified from '@/components/Verified'
import Headers from '@/components/Header'
import ToolsSection from '@/components/ToolsSection'

const page = () => {
  return (
   <>
   <NavBar />
   <Headers />
   <Verified />
   <ToolsSection />
   </>
  )
}

export default page