import {Link, useLoaderData} from '@remix-run/react';
import {Layout} from '~/components/Layout';

import * as astAndEslintPost from './blog.ast-and-eslint.mdx';
import * as typescriptAliasesPost from './blog.typescript-aliases.mdx';
import * as flexboxDemoPost from './blog.flexbox-demo.mdx';
import * as helloWorldPost from './blog.hello-world.mdx';
import {json} from '@remix-run/node';

interface Post {
  slug: string;
  title: string;
}

function postFromModule(mod: any): Post {
  return {
    ...mod.attributes,
  };
}

export function loader() {
  return json(
    [
      astAndEslintPost,
      typescriptAliasesPost,
      flexboxDemoPost,
      helloWorldPost,
    ].map(postFromModule)
  );
}

export default function Index() {
  const posts = useLoaderData<typeof loader>();

  return (
    <Layout home>
      <ul>
        <li className="flex flex-col">
          {posts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          ))}
          {/* <Link to="/blog/hello-world">Hello world post</Link>
          <Link to="/blog/flexbox-demo">Flexbox demo</Link>
          <Link to="/blog/typescript-aliases">Typescript aliases</Link>
          <Link to="/blog/typography">Typography</Link>
          <Link to="/blog/ast-and-eslint">
            How to write an ESLint rule using Abstract Syntax Trees
          </Link> */}
        </li>
      </ul>
    </Layout>
  );
}
