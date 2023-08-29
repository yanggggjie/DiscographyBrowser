import { clsx } from 'clsx'
import { IAlbum } from './type.ts'
interface Props {
  album: IAlbum
}

function Component({ album }: Props) {
  return (
    <div className={clsx('p-1')}>
      <div>
        <img
          className={clsx('w-44 h-44 object-cover')}
          src={album.image}
          alt=""
        />
      </div>
      <div>{album.name}</div>
      <div>
        {album.release_date} {album.total_tracks}单曲
      </div>
    </div>
  )
}

export default Component
