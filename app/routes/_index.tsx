import {Link} from '@remix-run/react';
import {Layout} from '~/components/Layout';

export default function Index() {
  return (
    <Layout home>
      <ul>
        <li className="flex flex-col">
          <Link to="/blog/hello-world">Hello world post</Link>
          <Link to="/blog/flexbox-demo">Flexbox demo</Link>
          <Link to="/blog/typescript-aliases">Typescript aliases</Link>
        </li>
      </ul>
    </Layout>
  );
}
