import Navbar from '../Components/General/Navbar';
import Hero from '../Components/General/Hero';
import Benefits from '../Components/General/Benefit';
import Template from '../Components/General/Template';
import Approval from '../Components/General/Approval';
import FAQ from '../Components/General/FAQ';
import Pricing from '../Components/General/Pricing';
import Footer from '../Components/General/Footer';



export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Approval />
      <Benefits />
      <Pricing />
      <Template />
      <FAQ />
      <Footer/> 
      {/* Other sections */}
    </div>
  );
}