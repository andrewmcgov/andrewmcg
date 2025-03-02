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
      <section className="bg-cyan-800 rounded-rounded-section md:rounded-md-rounded-section py-20 md:mt-32">
        <div className="max-w-4xl mx-auto flex md:flex-row flex-col items-center gap-10">
          <div className="w-2/3 md:w-1/3 px-4">
            <img
              className="rounded-full mx-auto md:mx-0"
              src="./headshot-new.jpeg"
              alt="Headshot"
            />
          </div>
          <div className="md:w-2/3 px-4 mx-auto leading-relaxed text-lg">
            <h2 className="text-cyan-50 font-bold text-3xl my-8 pt-6">
              About me
            </h2>
            <p className="mb-3">
              I am a software developer from Ottawa, Ontario. I have worked at{' '}
              <a className="underline" href="https://www.shopify.ca/">
                Shopify
              </a>{' '}
              for seven years, helping build the admin interfaces that millions
              of entrepreneurs use to build their business. I have had the
              chance to work in a variety of areas, ranging from online store
              themes, to inventory management, and now subscriptions.
            </p>
            <p className="mb-3">
              Aside from programming, I love playing and listening to music. I
              studied music in university, and have recently been playing lots
              of guitar. It's a great way to get into a creative flow state.
            </p>
            <p className="mb-3">
              I am a big sports fan, and have had the misfortune of rooting for
              the Toronto Maple Leafs for my whole life. Maybe this is the year?
              I also love baseball, riding my bike around Ottawa, and visiting
              local coffee shops.
            </p>
            <p className="mb-3">
              Feel free to say hi over on{' '}
              <a
                className="underline"
                href="https://bsky.app/profile/andrewmcg.dev"
              >
                Bluesky
              </a>
              !
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
