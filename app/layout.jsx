import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property'
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body className='flex flex-col h-screen'>
        <Navbar />
        <main className='flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default MainLayout;