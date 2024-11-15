import Link from 'next/link'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <div className='flex justify-center'>
        <ul className="menu menu-horizontal bg-base-200 gap-6">
  <li><Link href={'/line'}>Line</Link></li>
  <li><Link href={'/line/stackedbar'}>StackedBar</Link></li>
  <li><a>Item 3</a></li>
</ul>
        </div>
      <div>
      {children}
      </div>
    </div>
  )
}

export default layout
