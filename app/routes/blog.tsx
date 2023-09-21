import {Outlet} from '@remix-run/react';
import {Layout} from '~/components/Layout';

export default function Blog() {
  return (
    <Layout>
      <div className="ml-auto mr-auto prose">
        <Outlet />
      </div>
    </Layout>
  );
}
