import { signIn } from 'next-auth/react'
import Image from 'next/image'

function Login({ providers }) {
  return (
    <div className='space-y-10 flex flex-col items-center justify-center mt-48'>
      <Image
        src='https://links.papareact.com/5me'
        width={150}
        height={150}
        objectFit='contain'
      />
      <div>
        {/* object.value covert the value into array */}
        {Object.values(providers).map((provider) => (
          <button
            className='relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-gray-100 rounded hover:bg-white group'
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            <span className='w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0'></span>
            <span className='relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white'>
              Sign in with {provider.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Login
