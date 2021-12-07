import Image from 'next/image'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'
import { useSession, signOut } from 'next-auth/react'

function Header() {
  const { data: session } = useSession()
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      {/* Left */}
      <div className='flex items-center space-x-2'>
        <Image
          src='https://links.papareact.com/5me'
          width={40}
          height={40}
          layout='fixed'
        />

        <div className='flex items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 w-6 text-gray-500 ' />
          <input
            type='text'
            placeholder='Search Facebook'
            className=' ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink hidden md:inline-flex '
          />
        </div>
      </div>

      {/* Center */}
      <div className='flex justify-center  flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
          <HeaderIcon Icon={FlagIcon} />
        </div>
      </div>

      {/* RIght */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        {/* Profile pic */}
        <img
          src={session.user.image}
          alt=''
          className='rounded-full cursor-pointer h-10 w-10'
          onClick={() => signOut()}
        />

        <p className='font-semibold pr-3 whitespace-nowrap'>
          {session.user.name}
        </p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </div>
  )
}

export default Header
