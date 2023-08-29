import * as QueryString from 'qs'
import { useEffect, useState } from 'react'
import SWRDisplay from './SWRDisplay.tsx'
interface Props {
  searchText: string
}

function stringifyURL(searchText: string) {
  return (
    '/search?' +
    QueryString.stringify({
      q: searchText,
      type: 'album',
      limit: 6,
    })
  )
}

function Component({ searchText }: Props) {
  const [url, setUrl] = useState(stringifyURL(searchText))

  useEffect(() => {
    setUrl(stringifyURL(searchText))
  }, [searchText])

  return (
    <div>
      <SWRDisplay url={url}></SWRDisplay>
    </div>
  )
}

export default Component
