/**
 * Copyright (C) 2020 Moritz Rupp
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import Head from 'next/head';

const Index = (): JSX.Element => (
  <div className="flex py-0 px-2 flex-col justify-center items-center min-h-screen">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="py-20 px-0 flex flex-1 flex-col justify-center items-center">
      <h1 className="m-0 leading-tight text-6xl font-semibold text-center">
        Welcome to{' '}
        <a
          className="text-blue-600 hover:underline focus:underline active:underline"
          href="https://nextjs.org"
        >
          Next.js!
        </a>
      </h1>

      <p className="text-center text-2xl leading-normal">
        Get started by editing{' '}
        <code className="bg-gray-100 rounded p-3 text-lg font-mono">
          pages/index.tsx
        </code>
      </p>

      <div className="flex items-center justify-center flex-wrap max-w-3xl mt-12">
        <a
          href="https://nextjs.org/docs"
          className="card hover:text-blue-600 hover:border-blue-600  active:text-blue-600 active:border-blue-600  focus:text-blue-600 focus:border-blue-600"
        >
          <h3 className="mb-4 text-2xl">Documentation &rarr;</h3>
          <p className="m-0 text-xl leading-6">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn"
          className="card hover:text-blue-600 hover:border-blue-600  active:text-blue-600 active:border-blue-600  focus:text-blue-600 focus:border-blue-600"
        >
          <h3 className="mb-4 text-2xl">Learn &rarr;</h3>
          <p className="m-0 text-xl leading-6">
            Learn about Next.js in an interactive course with quizzes!
          </p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className="card hover:text-blue-600 hover:border-blue-600  active:text-blue-600 active:border-blue-600  focus:text-blue-600 focus:border-blue-600"
        >
          <h3 className="mb-4 text-2xl">Examples &rarr;</h3>
          <p className="m-0 text-xl leading-6">
            Discover and deploy boilerplate example Next.js projects.
          </p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="card hover:text-blue-600 hover:border-blue-600  active:text-blue-600 active:border-blue-600  focus:text-blue-600 focus:border-blue-600"
        >
          <h3 className="mb-4 text-2xl">Deploy &rarr;</h3>
          <p className="m-0 text-xl leading-6">
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </main>

    <footer className="w-full h-32 border-t border-solid border-gray-300 flex justify-center items-center">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className="h-4 inline ml-2" />
      </a>
    </footer>
  </div>
);

export default Index;
