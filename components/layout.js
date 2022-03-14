
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='bg-gray-100'>{children}</main>
      <Footer />
    </>
  )
}
