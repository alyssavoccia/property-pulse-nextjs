import { ToastContainer } from 'react-toastify';
import AuthProvider from '@/components/AuthProvider';
import { GlobalProvider } from '@/context/GlobalContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property'
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html>
          <body className='flex flex-col h-screen'>
            <Navbar />
            <main className='flex-1'>
              {children}
            </main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  )
};

export default MainLayout;