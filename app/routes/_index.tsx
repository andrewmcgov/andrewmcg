import {Layout} from '~/components/Layout';
import {GenerativeCanvas} from '~/components/GenerativeCanvas';

export default function Index() {
  return (
    <Layout home>
      <section className="max-w-3xl my-14 px-4 mx-auto md:my-28 flex flex-col md:flex-row justify-center md:justify-around items-center gap-16">
        <GenerativeCanvas />
        <span className="md:w-1/2 text-cyan-50 font-bold text-2xl">
          Hi! I'm Andrew. I'm a software developer who loves music, sports, and
          building on the web.
        </span>
      </section>
      <section className="bg-cyan-800 rounded-rounded-section md:rounded-md-rounded-section py-20 md:mt-32 ">
        <div className="max-w-3xl px-4 mx-auto leading-relaxed text-lg">
          <h2 className="text-cyan-50 font-bold text-3xl my-8 pt-6 underline decoration-slate-800">
            About me
          </h2>
          <p className="mb-3">
            I am a web developer from Ottawa, Ontario. I have worked at{' '}
            <a className="underline" href="https://www.shopify.ca/">
              Shopify
            </a>{' '}
            for six years, helping build the admin interfaces that millions of
            entrepreneurs use to build their business. I have had the chance to
            work in a variety of areas, ranging from online store themes, to
            inventory management, and now subscriptions.
          </p>
          <p className="mb-3">
            Lately I've been working with React, Typescript, and Remix. You can
            find me over on{' '}
            <a className="underline" href="https://github.com/andrewmcgov">
              Github
            </a>{' '}
            where I am currently working on{' '}
            <a
              className="underline"
              href="https://github.com/andrewmcgov/andrewmcg"
            >
              this site
            </a>{' '}
            and a{' '}
            <a
              className="underline"
              href="https://github.com/andrewmcgov/react-component-generator"
            >
              React component generator for VS Code.
            </a>
          </p>
          <p className="mb-3">
            Aside from programming, I love playing and listening to music. I
            actually studied music in university, and have recently been getting
            back into playing guitar. It's a great way to get into a creative
            flow state.
          </p>
          <p className="mb-3">
            I am a big sports fan, and have had the misfortune of rooting for
            the Toronto Maple Leafs my whole life. Maybe this is the year? I
            also love baseball, riding my bike around Ottawa, and visiting local
            coffee shops.
          </p>
          <p className="mb-3">
            Feel free to say hi over on{' '}
            <a className="underline" href="https://twitter.com/andrew_mcgov">
              Twitter
            </a>
            !
          </p>
        </div>
      </section>
    </Layout>
  );
}
