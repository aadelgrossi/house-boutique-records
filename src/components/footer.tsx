import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="bg-blue-600">
      <div className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <ul className="flex items-center">
          <li>
            Created by{' '}
            <a
              href="https://taylorbrynat.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              Taylor Bryant
            </a>
          </li>
          <p className="mx-3">/</p>
          <li>
            Modified by{' '}
            <a
              href="https://github.com/aadelgrossi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              Andre Grossi
            </a>
          </li>
        </ul>

        <div>
          <a
            href="https://github.com/aadelgrossi/next-tailwind-typescript"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
