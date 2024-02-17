import React from 'react'

const Skills = () => {
  return (
    <div className='  flex h-[700px] flex-col justify-center items-center'>
        <div className='justify-center items-center flex-col flex'>
      <h1 className='text-[55px] text-gray-200 '>Skills</h1>
      <div className='w-16 mt-6 bg-white h-[2px]' ></div>
    </div>
    <div className='flex justify-around w-2/3 mt-20'>
        <div>
            <h2 className='text-[28px] italic text-gray-300'> # FRONT END</h2>
            <div className='pt-6 text-[18px]'>
                <h4 className='text-gray-400' > <span className='text-white'>•</span>  React</h4>
                <h4 className='text-gray-400' > <span className='text-white'>•</span> Javascript</h4>
                 <h4 className='text-gray-400' > <span className='text-white'>•</span> Html, Css</h4>
                 <h4 className='text-gray-400' > <span className='text-white'>•</span> Responsive</h4>
                 <h4 className='text-gray-400' > <span className='text-white'>•</span> Tailwind Css</h4>
                 <h4 className='text-gray-400' > <span className='text-white'>•</span> Bootstrap </h4>
            </div>
        </div>
        <div className='h-[300px] w-[1px] bg-gray-400 '></div>
        <div>
            <h2 className='text-[28px] italic text-gray-300'> # BACK END</h2>
            <div className='pt-6 text-[18px]'>
                 <h4 className='text-gray-400' > <span className='text-white'>•</span> Rest Api </h4>
                 <h4 className='text-gray-400' > <span className='text-white'>•</span> Sql/NoSql databases</h4>
                 <h4 className='text-gray-400' > <span className='text-white'>•</span> Node js - Express js</h4>
            </div>

        </div>
    </div>
    
    </div>
  )
}

export default Skills
