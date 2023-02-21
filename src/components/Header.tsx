import type { h } from 'preact'
import { useState } from 'preact/hooks'
export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true)

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  return (
    <header className='sticky top-0 flex h-16 items-center justify-between bg-headerBackground px-6'>
      <p>あかぱっくんのブログ</p>
      <nav className='invisible sm:visible'>
        <ul className='flex gap-6'>
          <li className='flex h-8 items-center p-2 transition duration-500 hover:font-bold'>
            <a href='/'>技術ブログ</a>
          </li>
          <li className='flex h-8 items-center p-2 transition duration-500 hover:font-bold'>
            <a href='/photo'>写真集</a>
          </li>
        </ul>
      </nav>
      {isOpenMenu ? (
        <div className='z-20 inline-block space-y-2 sm:hidden' onClick={handleClick}>
          <img src='/menu-outline.svg' alt='' className='h-8 w-8' />
        </div>
      ) : (
        <div className='z-20 inline-block space-y-2 sm:hidden' onClick={handleClick}>
          <img src='/close-outline.svg' alt='' className='h-8 w-8' />
        </div>
      )}
      <div
        className={`fixed h-full w-screen bg-black ${
          isOpenMenu ? 'pointer-events-none opacity-0' : 'opacity-40'
        } right-0 top-0 duration-200 ease-in`}
        onClick={handleClick}
      ></div>
      <aside
        className={`fixed  ${
          isOpenMenu ? 'right-[-50vw]' : 'right-0'
        }  top-0 h-full w-[50vw] bg-white duration-200 ease-in`}
      >
        <ul className='pt-16'>
          <HeaderMenuItem
            svg={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-8 w-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z'
                />
              </svg>
            }
            text='技術ブログ'
            link=''
          />
          <HeaderMenuItem
            svg={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-8 w-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
                />
              </svg>
            }
            text='写真集'
            link='photo'
          />
        </ul>
      </aside>
    </header>
  )
}

type Props = {
  svg: h.JSX.Element
  text: string
  link: string
}
export function HeaderMenuItem({ svg, text, link }: Props) {
  return (
    <li className='my-4 ml-3 flex items-center'>
      {svg}
      <a className='ml-3 text-lg hover:text-xl hover:font-bold' href={`/${link}`}>
        {text}
      </a>
    </li>
  )
}
