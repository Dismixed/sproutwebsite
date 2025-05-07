import WaitlistForm from './components/WaitlistForm';
import SproutIllustration from './components/SproutIllustration';
import BenefitSection from './components/BenefitSection';
import TestimonialSection from './components/TestimonialSection';
import FAQAccordion from './components/FAQAccordion';
import Image from 'next/image';
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#E7F8F1]">
      {/* Hero Section */}
      <section className="py-20 md:pt-32 md:pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#083B3C]">
                Budgeting, but make it campus&#8209;simple.
              </h1>
              <h2 className="text-xl md:text-2xl text-[#3B3F44] max-w-lg">
                Sprout is the chat&#8209;first money buddy that turns rent, ramen, and random paychecks into a clear spending plan—no spreadsheets, no stress.
              </h2>
              <div className="mt-4">
                <WaitlistForm />
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-md">
                <Image src="/sprout-illustration.png" alt="Sprout Illustration" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitSection />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <FAQAccordion />
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="py-16 bg-[#E7F8F1]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to take control of your finances?</h2>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            <span className="font-bold text-[#24C27A]">Sprout</span> © {new Date().getFullYear()}
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#24C27A]">Privacy</a>
            <a href="https://twitter.com/sproutapp" className="hover:text-[#24C27A]">@sproutapp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
