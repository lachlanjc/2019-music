import Head from 'next/head'
import Artist from '../components/artist'
import Album from '../components/album'
import TopSongs from '../components/top-songs'

import topSongs from '../top-songs.json'

const Page = () => (
  <>
    <Head>
      <title>2019 in Music</title>
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@lachlanjc" />
      <meta
        property="twitter:description"
        content="Lachlan Campbell’s top & favorite music of 2019."
      />
      <meta property="og:title" content="Find Your Rep" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://2019-music.vercel.app/" />
      <meta
        property="og:description"
        content="Lachlan Campbell’s top & favorite music of 2019."
      />
      <meta
        property="description"
        content="Lachlan Campbell’s top & favorite music of 2019."
      />
    </Head>
    <article>
      <h1>2019 in Music</h1>
      <section className="columns">
        <Artist
          label="Best New Artist"
          name="Conan Gray"
          artwork="https://images.sk-static.com/images/media/img/col6/20190206-182210-650598.jpg"
        />
        <Album
          label="Album of the Year"
          name="WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?"
          artist="Billie Eilish"
          artwork="https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ff/4a/eb/ff4aeb7c-7f2d-1d18-d7cc-51c107c70bad/source/256x256bb.png"
        />
        <Album
          label="EP of the Year"
          name="Crystalline"
          artist="Bülow"
          artwork="https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/e2/1c/ac/e21cacac-ff21-2f31-a92d-9f43dda6cbf6/source/256x256bb.png"
        />
        <Album
          label="Single of the Year"
          name="i’m so tired…"
          artist="Lauv & Troye Sivan"
          artwork="https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/05/c7/1b/05c71b41-8627-37a3-6fc4-0f1a2272a18c/source/256x256bb.png"
        />
      </section>
    </article>
    <TopSongs songs={topSongs} />
    <article>
      <footer>
        Made by <a href="https://lachlanjc.com">@lachlanjc</a>, 2019
      </footer>
    </article>
    <style jsx global>{`
      :root {
        --bg: #fff;
        --text: #111;
        --pink: #ff365d;
        --secondary: rgba(0, 0, 0, 0.875);
        --tertiary: rgba(0, 0, 0, 0.75);
        --quaternary: rgba(0, 0, 0, 0.5);
        --divider: rgba(0, 0, 0, 0.125);
        color-scheme: light dark;
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --bg: #111;
          --text: #fff;
          --pink: #ff365d;
          --secondary: rgba(255, 255, 255, 0.875);
          --tertiary: rgba(255, 255, 255, 0.75);
          --quaternary: rgba(255, 255, 255, 0.5);
          --divider: rgba(255, 255, 255, 0.125);
        }
      }
      * {
        box-sizing: border-box;
      }
      body {
        font-family: ui-rounded, system-ui, -apple-system, BlinkMacSystemFont,
          sans-serif;
        line-height: 1.66;
        margin: 0;
        background-color: var(--bg);
        color: var(--text);
        text-align: center;
      }
    `}</style>
    <style jsx>{`
      h1 {
        line-height: 0.875;
        font-weight: 900;
        font-size: 4rem;
        margin-top: 0;
        margin-bottom: 2rem;
        color: var(--pink);
      }

      h2 {
        text-transform: uppercase;
        font-weight: 800;
        font-size: 1.875rem;
        margin-bottom: -0.75rem;
      }

      a {
        color: inherit;
        text-decoration: none;
        font-weight: 800;
      }
      a:focus,
      a:hover {
        text-decoration: underline;
        text-underline-position: under;
        text-decoration-color: initial;
        text-decoration-line: underline;
        text-decoration-style: wavy;
      }

      article {
        width: 100%;
        max-width: 64rem;
        margin: auto;
        padding: 3rem 1rem;
      }

      p,
      nav {
        font-size: 1.375rem;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
      }
      nav {
        margin: 1rem 0 3rem;
      }
      nav a {
        margin-right: 1.5rem;
      }

      .columns {
        display: grid;
        grid-gap: 16px;
      }

      @media (min-width: 32em) {
        .columns {
          grid-gap: 24px;
          grid-template-columns: repeat(2, 1fr);
        }
      }

      .module {
        padding: 1rem;
        background-color: #ff466a;
        border-radius: 6px;
        margin: 2rem 0;
        color: white;
      }
      @media (prefers-color-scheme: dark) {
        .module {
          background-color: #222;
          color: #ff466a;
        }
      }
      h1 {
        font-weight: 800;
        font-size: 2rem;
        margin-top: 0;
        margin-bottom: 1rem;
        line-height: 1;
      }
      footer {
        font-size: 0.875rem;
        color: var(--quaternary);
        margin-top: 4rem;
      }
      footer a {
        color: var(--tertiary);
      }
      @media (min-width: 32em) {
        main {
          padding: 4rem 1rem;
        }
        h1 {
          font-size: 4rem;
          margin-bottom: 2rem;
        }
      }
    `}</style>
  </>
)

export default Page
