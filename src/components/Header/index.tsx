import { FC, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header: FC = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const { locale: activeLocale } = useRouter()

  return (
    <header className="bg-green-600 bg-opacity-40 sticky">
      {/* <div className="flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Image
            src="/logo.jpg"
            width={150}
            height={150}
            priority
            alt="Tailwind CSS logo"
          />

          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-white"></a>
          </Link>
        </div>

        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={cn(
            'md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto',
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: 'Home', route: '/' },
            { title: 'About', route: '/about' }
          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={title}>
              <Link href={route}>
                <a className="block text-white">{title}</a>
              </Link>
            </li>
          ))}
        </ul>

        <ul>
          {[
            { locale: 'en', label: 'English' },
            { locale: 'pt-BR', label: 'Português' }
          ].map(({ label, locale }) => (
            <li key={locale}>
              <Link href="/" locale={locale}>
                <a
                  className={cn(
                    'block text-black',
                    locale === activeLocale ? 'font-bold' : 'font-normal'
                  )}
                >
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </header>
  )
}
