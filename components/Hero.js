export default function Hero() {
  return (
    <section className='my-20 space-y-7'>
      <h1 className='text-3xl lg:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600'>
        Welcome To <br /> My Personal Portfolio
      </h1>
      <p className='font-hero'>
        Hello! My name is Arnold Perez and I am a full stack developer based in
        Dallas, TX.
      </p>
      <a href='https://github.com/soyarnold' target='blank' className='block'>
        <button className='rounded-3xl py-2 px-20 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:outline-none'>
          Learn More
        </button>
      </a>
    </section>
  )
}
