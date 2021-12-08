import { useSession } from 'next-auth/react'
import StoryCard from './StoryCard'
import Image from 'next/image'
import { PlusCircleIcon } from '@heroicons/react/solid'

function Stories() {
  const { data: session } = useSession()

  const stories = [
    {
      name: 'Elon musk',
      src: 'https://links.papareact.com/4zn',
      profile: 'https://links.papareact.com/kxk',
    },
    {
      name: 'Jeff Bezoz',
      src: 'https://links.papareact.com/k2j',
      profile: 'https://links.papareact.com/f0p',
    },
    {
      name: 'Mark Zukerberg',
      src: 'https://links.papareact.com/xql',
      profile: 'https://links.papareact.com/snf',
    },
    {
      name: 'Bill Gates',
      src: 'https://links.papareact.com/4u4',
      profile: 'https://links.papareact.com/zvy',
    },
  ]

  return (
    <div className='relative flex justify-center space-x-3 mx-auto'>
      <div className=' relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32  cursor-pointer overflow-x p-3 border-4 border-gray-300 rounded-full lg:hidden transition-duration-200 transform ease-in hover:scale-105 hover:animate-pulse cursor-pointer '>
        <Image
          className='absolute rounded-full '
          src={session.user.image}
          layout='fill'
        />
      </div>
      <div className='relative lg:h-56 lg:w-32 transition-duration-200 transform ease-in hover:scale-105 hover:animate-pulse cursor-pointer'>
        <div
          className='relative lg:h-[184px] p-0 m-0  
        '
        >
          <Image
            className=' rounded-2xl '
            src={session.user.image}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='hidden lg:flex relative bg-white lg:h-14 lg:w-32 z-50 -mt-4 rounded-b-2xl lg:items-center lg:justify-center '>
          <div className='flex items-center justify-center border-[6px] border-white '>
            <PlusCircleIcon className='bg-transparent  -p-4 rounded-full -mt-10 absolute  h-12 w-12 text-blue-500' />
            <h2 className='text-sm font-semibold mt-4'>Create Story</h2>
          </div>
        </div>
      </div>

      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  )
}

export default Stories
