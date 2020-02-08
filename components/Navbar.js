import Link from 'next/link'

export default () => (
  <nav className='flex items-center justify-between flex-nowrap bg-black p-6'>
    <div className='flex items-center text-white mr-6'>
      <Link href='/'>
        <a>
          <img className='w-8' src='/static/favicon-32x32.png' />
        </a>
      </Link>
    </div>
    <div className='w-full block flex items-center w-auto'>
      <div className='text-xl flex flex-nowrap'>
        <Link href='/result'>
          <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>Result</a>
        </Link>
        <Link href='/compare'>
          <a className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>Compare</a>
        </Link>
      </div>
    </div>
  </nav>
)
