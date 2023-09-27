import {Outlet, useLoaderData} from '@remix-run/react';
import {Layout} from '~/components/Layout';
import {getPost} from '~/server/blog.server';

export async function loader() {
  const post = await getPost();

  console.log('loader running');

  return {post};
}

export default function Blog() {
  const data = useLoaderData();

  console.log('post', data);
  return (
    <Layout>
      <div className="mx-auto my-10 mdx-content mdx-content-page">
        <Outlet />
      </div>
    </Layout>
  );
}
