import React from 'react'
import Link from 'next/link'   // ✅ next.js routing ka liye
const Tags = () => {


  // NOTE: make sure to add `import { Link } from 'react-router-dom'` at the top of the file

    return (
      <>
        <div
          className="w-64 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden h-[300px] rounded-2xl bg-[#303030] text-white"
        >
          <div className="w-24 h-24 bg-violet-500 rounded-full absolute -right-5 -top-7">
             
          </div>
  <div class="fill-violet-800 w-12">
    
    
    
  </div>
  <br />
  <h1 class="font-bold text-xl">Social Media Tags</h1>
  <p class="text-sm   leading-6">
    Generate optimized social media hashtags for a post to boost reach, engagement, and discoverability across platforms
  </p>
    <div>
<Link
  href="/TagsGenerate"  // 👈 route ka URL (file ka path nahi)
  className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2 cursor-pointer"
>
  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"></span>
  <div className="flex items-center">
    <span className="ml-1 text-white">Generate Now</span>
  </div>
</Link>

    </div>
</div>


    </>
  )
}

export default Tags