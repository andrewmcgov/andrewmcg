import {Outlet} from '@remix-run/react';
import {Layout} from '~/components/Layout';

export default function Blog() {
  return (
    <Layout>
      <div className="prose ml-auto mr-auto">
        <Outlet />
      </div>
    </Layout>
  );
}
