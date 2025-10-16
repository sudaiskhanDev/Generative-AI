import React from 'react'
import Tags from './cards/TagsCard'
import ToolSection from './cards/OutlineGeneratorCard'
const ToolsSection = () => {
  return (
   <>
  <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5 relative h-auto w-full overflow-hidden rounded-xl  bg-black">
     <Tags />
     <ToolSection />
  </div>
   </>
  )
}

export default ToolsSection