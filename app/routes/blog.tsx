import {Outlet} from '@remix-run/react';
import {Layout} from '~/components/Layout';

export default function Blog() {
  return (
    <Layout>
      <div className="mx-auto my-10 mdx-content mdx-content-page">
        <Outlet />
      </div>
    </Layout>
  );
}
