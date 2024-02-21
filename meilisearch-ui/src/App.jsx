import { useState, useEffect } from 'react'
import { MeiliSearch } from 'meilisearch'
import Item from './components/Item'

const client = new MeiliSearch({
  host: 'http://localhost:7700/'
})

const index = client.index('movies')

function App () {
  const [searchedWord, setSearch] = useState('')
  const [resultSearch, setResults] = useState([])

  useEffect(() => {
    // Create an scoped async function in the hook
    async function searchWithMeili () {
      const search = await index.search(searchedWord, {
        limit: 24,
        attributesToHighlight: ['title']
      })
      setResults(search.hits)
    }
    // Execute the created function directly
    searchWithMeili()
  }, [searchedWord])

  return (
    <div className='mx-auto'>
      <div className='header font-sans text-white items-center justify-center'>
        <header className='py-12'>
          <div className='border rounded overflow-hidden w-full flex justify-center mx-auto searchBox mt-6'>
            <button className='flex items-center justify-center px-4 shadow-md bg-white text-black'>
              <svg
                className='h-4 w-4 text-grey-dark'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
              </svg>
            </button>
            <input
              type='text'
              value={searchedWord}
              onChange={(event) => setSearch(event.target.value)}
              className='px-6 py-4 w-full text-black'
              placeholder='Product, sport, color, …'
            />
          </div>
        </header>
      </div>
      <div>
        <div className='flex flex-wrap searchResults'>
          {resultSearch?.map((result) => (
            <Item
              id={result.id}
              title={result.title}
              genres={result.genres}
              image={result.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App