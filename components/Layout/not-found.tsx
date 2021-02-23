import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import css from './layout.module.css'
export default function NotFoundLayout() {
  return (
    <div>
      <Head>
        <title>Github Jobs | 404</title>
      </Head>
      <div className={css.container}>
        <header className={css.header}>
          <h1>
            <span className={css['header-brand']}>Github</span>
            Jobs
          </h1>
        </header>
        <main className={css['not-found']}>
          <Image src='/assets/Scarecrow.png' width={655} height={395} />
          <div>
            <h2>I have bad news for you</h2>
            <p>
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
            <Link href='/'>
              <button className={css['back-button']}>
                back to the home page
              </button>
            </Link>
          </div>
        </main>
        <footer className={css.footer}>Mehmet Temel 2021</footer>
      </div>
    </div>
  )
}
