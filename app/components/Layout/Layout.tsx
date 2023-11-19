import {NavLink} from '@remix-run/react';

interface LayoutProps {
  home?: boolean;
  children: React.ReactNode;
}

export function Layout({children, home}: LayoutProps) {
  return (
    <div className="flex flex-col justify-between items-center h-full overflow-scroll bg-slate-800">
      <div className="grow w-full">
        <header className="flex justify-between max-w-6xl items-center px-6 py-6 mx-auto">
          <NavLink to="/">
            {home ? (
              <h1 className="text-2xl md:text-3xl text-cyan-50 font-bold">
                Andrew McGoveran
              </h1>
            ) : (
              <span className="text-2xl md:text-3xl  text-cyan-50 font-bold">
                Andrew McGoveran
              </span>
            )}
          </NavLink>
          <nav className="text-cyan-50">
            <ul className="flex gap-3">
              <li>
                <a
                  className="font-bold text-l md:text-xl underline decoration-cyan-600/90"
                  href="/blog"
                >
                  /blog
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </div>
      <footer>
        <p className="text-center text-cyan-50 text-sm p-4">
          Made with {` `}
          <a
            className="underline decoration-cyan-600/90"
            href="https://remix.run/"
          >
            Remix
          </a>{' '}
          - View source on{' '}
          <a
            className="underline decoration-cyan-600/90"
            href="https://github.com/andrewmcgov/andrewmcg"
          >
            Github
          </a>{' '}
          - Say hi on{' '}
          <a
            className="underline decoration-cyan-600/90"
            href="https://twitter.com/andrew_mcgov"
          >
            Twitter
          </a>
        </p>
      </footer>
    </div>
  );
}
