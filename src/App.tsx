import Title from './components/Title.tsx'
import Search from './components/Search.tsx'
import Board from './components/Board/Board.tsx'
import { useState } from 'react'
import { useDebounce } from 'usehooks-ts'
function Component() {
  const [searchText, setSearchText] = useState('周杰伦')
  const debouncedSearchText = useDebounce(searchText, 1000)
  return (
    <div>
      <Title></Title>
      <Search searchText={searchText} setSearchText={setSearchText}></Search>
      <Board searchText={debouncedSearchText}></Board>
    </div>
  )
}

export default Component
