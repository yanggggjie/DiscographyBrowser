import { clsx } from 'clsx'
import _ from 'lodash-es'
import { useEffect } from 'react'
interface Props {}
import globalAxios from '../globalAxios.ts'
function Component() {
  async function handleClick() {
    const res = await globalAxios.get('/search', {
      params: {
        q: '杰',
        type: 'album',
      },
    })
    console.log(res.data)
  }
  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Component
