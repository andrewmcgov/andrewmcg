import {NavLink} from '@remix-run/react';

interface LayoutProps {
  home?: boolean;
  children: React.ReactNode;
}

export function Layout({children, home}: LayoutProps) {
  return (
    <div className="flex flex-col justify-between items-center h-full overflow-scroll">
      <div className="grow w-full max-w-4xl">
        <header className="flex justify-between py-6">
          <NavLink to="/">
            {home ? (
              <h1 className="text-3xl  text-blue-800 font-bold">
                Andrew McGoveran
              </h1>
            ) : (
              <span className="text-3xl  text-blue-800 font-bold">
                Andrew McGoveran
              </span>
            )}
          </NavLink>
          <nav>
            <ul className="flex gap-3">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </div>
      <footer>
        <p className="text-center text-gray-500 text-sm p-4">
          Made with {` `}
          <a href="https://remix.run/">Remix</a> - View source on{' '}
          <a href="https://github.com/andrewmcgov/andrewmcg">Github</a> - Say hi
          on <a href="https://twitter.com/andrew_mcgov">Twitter</a>
        </p>
      </footer>
    </div>
  );
}
