import { clsx } from 'clsx'
import _ from 'lodash-es'
import useSWR from 'swr'
import preload from 'swr'
import globalAxios from '../../globalAxios.ts'
import { IAlbum } from './type.ts'
import DisplayItem from './DisplayItem.tsx'
import { useEffect } from 'react'
interface Props {
  url: string
}

function Component({ url }: Props) {
  const fetcher = async (url: string) => {
    const res = await globalAxios.get(url)
    return res.data
  }
  const { data, error } = useSWR(url, fetcher)
  if (error) return <div>Error...</div>
  if (!data)
    return (
      <div className={clsx('grid place-items-center')}>
        please input .......
      </div>
    )
  const albumList: IAlbum[] = data.albums.items.map((item) => {
    return {
      name: item.name,
      release_date: item.release_date,
      total_tracks: item.total_tracks,
      image: item.images[1].url,
    }
  })

  return (
    <div>
      <div className={clsx('grid grid-cols-3 gap-3')}>
        {albumList.map((album) => {
          return <DisplayItem key={album.image} album={album}></DisplayItem>
        })}
      </div>
    </div>
  )
}

export default Component
