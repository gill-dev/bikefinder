"use client"
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");
    
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div className="hero">
    <div className="flex-1 pt-36 padding-x">
      <h1 className="hero__title">
        Find, any motorcycle
      </h1>

      <p className="hero__subtitle">
        Search any motorcycle specifications and compare them side by side.
      </p>

      <CustomButton
        title="Explore Motorbikes"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
      />
    </div>
    <div className="hero__image-container">
      <div className="hero__image">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>

      <div className="hero__image-overlay" />
    </div>
  </div>
  )
}

export default Hero