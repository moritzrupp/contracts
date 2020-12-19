import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex py-0 px-2 flex-col justify-center items-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 px-0 flex flex-1 flex-col justify-center items-center">
        <h1 className="m-0 leading-tight text-6xl font-semibold text-center">
          Welcome to <a className="text-blue-600 hover:underline focus:underline active:underline" href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="text-center text-2xl leading-normal">
          Get started by editing{' '}
          <code className="bg-gray-100 rounded p-3 text-lg font-mono">pages/index.tsx</code>
        </p>

        <div className="flex items-center justify-center flex-wrap max-w-3xl mt-12">
          <a href="https://nextjs.org/docs" className="card hover:text-blue-600 hover:border-blue-600  active:text-blue-600 active:border-blue-600  focus:text-blue-600 focus:border-blue-600">
            <h3 className="mb-4 text-2xl">Documentation &rarr;</h3>
            <p className="m-0 text-xl leading-6">Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card hover:text-blue-600 hover:border-blue-600  active:text-blue-600 active:border-blue-600  focus:text-blue-600 focus:border-blue-600">
            <h3 className="mb-4 text-2xl">Learn &rarr;</h3>
            <p className="m-0 text-xl leading-6">Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card hover:text-blue-600 hover:border-blue-600  active:text-blue-600 active:border-blue-600  focus:text-blue-600 focus:border-blue-600"
          >
            <h3 className="mb-4 text-2xl">Examples &rarr;</h3>
            <p className="m-0 text-xl leading-6">Discover and deploy boilerplate example Next.js projects.</p>
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
  )
}
