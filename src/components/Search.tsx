import { clsx } from 'clsx'
import _ from 'lodash-es'
interface Props {
  searchText: string
  setSearchText: (searchText: string) => void
}

function Component({ searchText, setSearchText }: Props) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value)
  }
  return (
    <div className={clsx('grid place-items-center')}>
      <input
        type="text"
        className={clsx('w-96 h-10', 'rounded-md overflow-hidden')}
        placeholder={'输入歌手，搜索专辑'}
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Component
