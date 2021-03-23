import Head from 'next/head'
import Link from 'next/link'
import css from './layout.module.css'
export interface LayoutProps {
  title: String
}
export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>Github Jobs | {title}</title>
      </Head>
      <div className={css.container}>
        <header className={css.header}>
          <Link href='/'>
            <h1 className={css['header-title']}>
              <span className={css['header-brand']}>Github</span>
              Jobs
            </h1>
          </Link>
        </header>
        <main className={css.main}>{children}</main>
        <footer className={css.footer}>Mehmet Temel 2021</footer>
      </div>
    </>
  )
}
