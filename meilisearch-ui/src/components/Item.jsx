function Item ({ url, image, title, id, genres }) {
    return (
      <div className='flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-3' key={id}>
        <a className='flex-1 rounded overflow-hidden shadow-lg' href={url}>
          <img
            className='w-full h-48 object-cover'
            src={image}
            alt={name}
            onError={(e) => {
              e.target.onerror = null
              e.target.src = '/wide_logo.png'
            }}
          />
          <div className='px-6 py-3'>
            <div className='font-bold text-sm mb-1 text-gray-600 capitalize'>
              {title}
            </div>
            <div className='font-bold text-xl mb-2 text-gray-800'>
              {id}
            </div>
            <ul className='text-black text-xl font-bold text-base py-2'>
              {genres.map((res) => (
                <li>
                    {res}
                </li>
              ))}
            </ul>
          </div>
        </a>
      </div>
    )
  }
  
  export default Item