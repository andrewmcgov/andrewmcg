import type {LinksFunction, MetaFunction} from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import stylesheet from './tailwind.css';

export const links: LinksFunction = () => [
  {rel: 'stylesheet', href: stylesheet},
  {rel: 'icon', type: 'image/png', href: '/favicon.png'},
];

export const meta: MetaFunction = () => [
  {title: 'Andrew McGoveran'},
  {charset: 'utf-8'},
  {name: 'viewport', content: 'width=device-width,initial-scale=1'},
];

export default function App() {
  return (
    <html lang="en" className="h-full flex flex-col">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
