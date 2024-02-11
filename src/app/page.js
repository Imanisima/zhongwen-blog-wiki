import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

import { TextInput, Textarea, Button } from "@mantine/core";

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <main className="flex max-h-screen flex-col items-center justify-between p-10">
        <ComingSoon />
        
      </main>

      <Footer />
    </div>
  )
}