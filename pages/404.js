import React from 'react'
// Components
import Layout from '@/components/Layout'
// Libraries
import Link from 'next/link'

const Page404 = () => {
  return (
    <Layout title={`Countries App - 404`}>
      <section className="flex items-center h-full p-16 dark:bg-coolGray-900 dark:text-coolGray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-coolGray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
            <p className="mt-4 mb-8 dark:text-coolGray-400">But dont worry, you can find plenty of other things on our homepage.</p>
            <Link href="/" className="px-8 py-3 font-semibold rounded hover:bg-slate-200 hover:text-black border-2 ">Back to homepage</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Page404