import { clsx } from 'clsx'
import _ from 'lodash-es'
interface Props {}

function Component() {
  return (
    <div className={clsx('grid place-items-center')}>
      <div className={clsx('text-5xl', 'flex flex-row items-center')}>
        <svg
          aria-hidden="true"
          fill="currentColor"
          height="1em"
          role="img"
          viewBox="0 0 20 20"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M0 18h10v-.26c1.52.4 3.17.35 4.76-.24c4.14-1.52 6.27-6.12 4.75-10.26c-1.43-3.89-5.58-6-9.51-4.98V2H0v16zM9 3v14H1V3h8zm5.45 8.22a2.746 2.746 0 0 1-3.67 1.23c-.31-.15-.57-.35-.78-.59V8.13c.8-.86 2.11-1.13 3.22-.58c1.35.68 1.9 2.32 1.23 3.67zm-2.75-.82c.22.16.53.12.7-.1c.16-.22.12-.53-.1-.7s-.53-.12-.7.1c-.16.21-.12.53.1.7zm3.01 3.67c-1.17.78-2.56.99-3.83.69c-.27-.06-.44-.34-.37-.61s.34-.43.62-.36l.17.04c.96.17 1.98-.01 2.86-.59c.47-.32.86-.72 1.14-1.18c.15-.23.45-.3.69-.16c.23.15.3.46.16.69c-.36.57-.84 1.08-1.44 1.48zm1.05 1.57a6.763 6.763 0 0 1-4.84 1.06a.505.505 0 1 1 .2-.99l.22.04c1.31.15 2.68-.14 3.87-.94c.71-.47 1.27-1.07 1.7-1.74c.14-.24.45-.31.68-.16c.24.14.31.45.16.69c-.49.79-1.16 1.49-1.99 2.04z"
            fill="currentColor"
          />
        </svg>
        <h1>DiscoBrowser</h1>
      </div>

      <p>Browse Any Spotify Artists' Discography!</p>
    </div>
  )
}

export default Component
