import * as astAndEslintPost from './blog.ast-and-eslint.mdx';
import * as typescriptAliasesPost from './blog.typescript-aliases.mdx';
import * as flexboxDemoPost from './blog.flexbox-demo.mdx';
import * as helloWorldPost from './blog.hello-world.mdx';
import {json} from '@remix-run/node';
import {Link, useLoaderData} from '@remix-run/react';

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
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

export default function BlogList() {
  const posts = useLoaderData<typeof loader>();

  return (
    <div className="mx-auto my-8 md:my-24 px-4 max-w-2xl">
      <h1 className="mb-8 font-bold text-3xl decoration-cyan-600 underline">
        Recent posts
      </h1>
      <ul>
        <li className="flex flex-col">
          {posts.map((post) => (
            <Link className="mb-4" key={post.slug} to={`/blog/${post.slug}`}>
              <h2 className="text-2xl mb-3 font-bold">{post.title}</h2>
              <p className=" text-pink-600">
                {Intl.DateTimeFormat('en-US', {
                  dateStyle: 'medium',
                }).format(new Date(post.date))}
              </p>
              <p className="my-4">{post.description}</p>
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
}
