import React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import TopSongs from '../components/topsongs'

export default () => {
  return (
    <>
      <Head>
        <title>2019 in Music</title>
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@lachlanjc" />
        <meta
          property="twitter:description"
          content="Find and contact your Congressional Representative."
        />
        <meta property="og:title" content="Find Your Rep" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://2019.lachlanjc.me/music" />
        <meta
          property="description"
          content="Find and contact your Congressional Representative."
        />
      </Head>
      <article>
        <h1>2019 in Music</h1>
      </article>
      <TopSongs />
      <article>
        <footer>
          Made by <a href="https://lachlanjc.me">@lachlanjc</a>
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
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.66;
          margin: 0;
          background-color: var(--bg);
          color: var(--text);
        }
      `}</style>
      <style jsx>{`
        h1 {
          line-height: 0.875;
          font-weight: 900;
          font-size: 4rem;
          margin-top: 0;
          margin-bottom: 2rem;
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
          max-width: 48rem;
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
}
