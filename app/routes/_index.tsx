import {Link, useLoaderData} from '@remix-run/react';
import {Layout} from '~/components/Layout';

export default function Index() {
  return (
    <Layout home>
      <section className="max-w-3xl my-14 px-4 mx-auto md:my-56 flex flex-col md:flex-row justify-center md:justify-around items-center gap-16">
        <div className="h-40 w-40 bg-cyan-700 rounded-full"></div>
        <span className="md:w-1/3 text-cyan-50 font-bold text-2xl">
          Hi! I'm Andrew. I'm a software developer who loves music, sports, and
          building on the web.
        </span>
      </section>
      <section className="bg-cyan-800 rounded-rounded-section md:rounded-md-rounded-section py-20 md:mt-56 ">
        <div className="max-w-3xl px-4 mx-auto leading-relaxed text-lg">
          <h2 className="text-cyan-50 font-bold text-3xl my-5">About me</h2>
          <p className="mb-3">
            I am a web developer from Ottawa, Ontario. I work at{' '}
            <a href="https://www.shopify.ca/">Shopify</a> where I help build the
            admin interfaces that millions of entrepreneurs use to build their
            business.
          </p>
          <p className="mb-3">
            I primarily work with React and Typescript, and I am working on
            getting more familiar with Ruby on Rails. You can find me over on{' '}
            <a href="https://github.com/andrewmcgov">Github</a> where I am
            currently working on{' '}
            <a href="https://github.com/andrewmcgov/andrewmcg">this site</a> and
            a{' '}
            <a href="https://github.com/andrewmcgov/react-component-generator">
              React component generator for VS Code.
            </a>
          </p>
          <p className="mb-3">
            Aside from web development, you can find me rooting for the Toronto
            Maple Leafs, cycling, or playing guitar.
          </p>
          <p>
            Feel free to say hi over on{' '}
            <a href="https://twitter.com/andrew_mcgov">Twitter</a>!
          </p>
        </div>
      </section>
    </Layout>
  );
}
