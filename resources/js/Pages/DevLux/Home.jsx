import FeaturedProperties from "@/Components/DevLux/FeaturedProperties";
import Features from "@/Components/DevLux/Features";
import Hero from "@/Components/DevLux/Hero";
import DevLuxGuestLayout from "@/Layouts/DevLux/DevLuxGuestLayout";

const Home = () => {
  return (
     <>
                {/* Hero Banner Section */}
                <Hero />

                {/* Featured Properties Section */}
                <FeaturedProperties/>

                {/* Why Choose Us/Features Section */}
                <Features/>
                

                {/* You can add more sections like Testimonials, Our Agents, etc. here */}

     </>
  )
}

Home.layout = page => <DevLuxGuestLayout>{page}</DevLuxGuestLayout>

export default Home;