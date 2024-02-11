import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-[#121212]">
        <div className='overflow-hidden'>
          <ComingSoon />
        </div>

      </main>

      <Footer />
    </div>
  )
}