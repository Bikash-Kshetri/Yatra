import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  HeroSectionLogoSrc: string;
}

const IconWithLabel: React.FC<{
  iconSrc: string;
  label: string;
  colorClass: string;
}> = ({ iconSrc, label, colorClass }) => (
  <div className="flex items-center space-x-2">
    <img
      src={iconSrc}
      alt={label}
      className={`w-6 h-6 md:w-7 md:h-7 lg:h-8 ${colorClass}`}
    />
    <span className="text-xs sm:text-sm md:text-base lg:text-small-size text-customWhite">
      {label}
    </span>
  </div>
);

const HeroSection: React.FC<HeroSectionProps> = ({ HeroSectionLogoSrc }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-customDark w-full text-customWhite pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 font-poppins">
      <div className="w-full lg:max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 lg:space-x-12">
          {/* Text Section */}
          <div className="md:w-3/5 space-y-4 lg:space-y-6 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-2xl lg:text-[40px] font-bold text-customWhite">
              Find Your Perfect Rental Vehicles
            </h1>
            <p className="text-sm lg:text-base text-customWhite text-justify leading-relaxed font-light max-w-2xl mx-auto md:mx-0">
              Choose from our wide selection of cars, trucks, and SUVs to suit
              your Journey and budget. Book now for a hassle-free experience!
            </p>
            <div className="flex flex-wrap gap-4 lg:gap-6 justify-center md:justify-start">
              <IconWithLabel
                iconSrc="/vite.svg"
                label="Free Cancellation"
                colorClass="text-yellow-400"
              />
              <IconWithLabel
                iconSrc="/assets/react.svg"
                label="24/7 Support"
                colorClass="text-orange-500"
              />
              <IconWithLabel
                iconSrc="/assets/react.svg"
                label="Insurance Included"
                colorClass="text-pink-500"
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => navigate("/courses")}
                className="bg-customAccent h-[48px] flex items-center p-4 rounded-[14px] text-sm md:text-base text-customWhite font-semibold align-middle hover:bg-[#289675] transition-all duration-300 ease-in-out"
                aria-label="Explore courses"
              >
                Browse Vehicle
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-2/5 flex justify-center">
            <img
              src={HeroSectionLogoSrc}
              alt="Hero section showcasing a variety of courses"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto   transform transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
