import React from 'react'

type Props = {}

function CustomTable({}: Props) {
  return (
    <table className='flex flex-col items-center justify-center w-full rounded-md bg-[#45474A80] p-5 space-y-2'>
            <tr className='flex items-center justify-between w-full border-b border-[#E6E6DD66] pb-2'>
              <th className='font-normal'>Batsman</th>
              <div className='flex items-center justify-center space-x-7'>
                <th className='font-normal'>R</th>
                <th className='font-normal'>B</th>
                <th className='font-normal'>4s</th>
                <th className='font-normal'>6s</th>
                <th className='font-normal'>S/R</th>
              </div>
            </tr>
            <tr className='flex items-center justify-between w-full border-b border-[#E6E6DD66] pb-2'>
              <th className='font-normal'>Batsman</th>
              <div className='flex items-center justify-center space-x-7'>
                <th className='font-normal'>R</th>
                <th className='font-normal'>B</th>
                <th className='font-normal'>4s</th>
                <th className='font-normal'>6s</th>
                <th className='font-normal'>S/R</th>
              </div>
            </tr>
            <tr className='flex items-center justify-between w-full border-b border-[#E6E6DD66] pb-2'>
              <th className='font-normal'>Batsman</th>
              <div className='flex items-center justify-center space-x-7'>
                <th className='font-normal'>R</th>
                <th className='font-normal'>B</th>
                <th className='font-normal'>4s</th>
                <th className='font-normal'>6s</th>
                <th className='font-normal'>S/R</th>
              </div>
            </tr>
            <tr className='flex items-center justify-between w-full border-b border-[#E6E6DD66] pb-2'>
              <th className='font-normal'>Batsman</th>
              <div className='flex items-center justify-center space-x-7'>
                <th className='font-normal'>R</th>
                <th className='font-normal'>B</th>
                <th className='font-normal'>4s</th>
                <th className='font-normal'>6s</th>
                <th className='font-normal'>S/R</th>
              </div>
            </tr>
            <tr className='flex items-center justify-between w-full border-b border-[#E6E6DD66] pb-2'>
              <th className='font-normal'>Batsman</th>
              <div className='flex items-center justify-center space-x-7'>
                <th className='font-normal'>R</th>
                <th className='font-normal'>B</th>
                <th className='font-normal'>4s</th>
                <th className='font-normal'>6s</th>
                <th className='font-normal'>S/R</th>
              </div>
            </tr>
            <tr className='flex items-center justify-between w-full'>
              <th className='font-normal'>Batsman</th>
              <div className='flex items-center justify-center space-x-7'>
                <th className='font-normal'>R</th>
                <th className='font-normal'>B</th>
                <th className='font-normal'>4s</th>
                <th className='font-normal'>6s</th>
                <th className='font-normal'>S/R</th>
              </div>
            </tr>
          </table>
  )
}

export default CustomTable