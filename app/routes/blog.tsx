import {Outlet, useLocation} from '@remix-run/react';
import {Layout} from '~/components/Layout';

export default function Blog() {
  const location = useLocation();

  const className =
    location.pathname === '/blog'
      ? ''
      : 'mx-auto my-10 mdx-content mdx-content-page';

  return (
    <Layout>
      <div className={className}>
        <Outlet />
      </div>
    </Layout>
  );
}
