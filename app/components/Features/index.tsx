"use client";
import Image from "next/image";

interface featuresdata {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const featuresdata: featuresdata[] = [
  {
    imgSrc: '/images/Features/featureOne.svg',
    heading: 'Secure storage',
    subheading: 'We take data security and privacy very seriously',
  },
  {
    imgSrc: '/images/Features/featureTwo.svg',
    heading: 'Free to use',
    subheading: 'Top-notch crypto portfolio tracking at no cost',
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: 'Real-time price data',
    subheading: 'Updating 24/7 using price data from the biggest exchanges',
  },
];

const Features = () => {
  return (
    <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative" id="features-section">
      <div className="radial-bg hidden lg:block"></div>
      <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
        {/* Colonne-1 */}
        <div>
          <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start text-gray-800 dark:text-gray-200">FEATURES</h3>
          <h2 className="text-black dark:text-white text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">
            The most trusted cryptocurrency platform
          </h2>
          <p className="lg:text-lg font-normal text-gray-700 dark:text-gray-300 text-center md:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
          </p>
        </div>
        {/* Colonne-2 */}
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
            {featuresdata.map((items, i) => (
              <div className="bg-white dark:bg-gray-800 py-10 pr-12 pl-6 rounded-lg shadow-md" key={i}>
                <div className="rounded-full h-16 w-16 flex items-center justify-center mb-10 bg-gray-100 dark:bg-gray-700">
                  <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                </div>
                <h5 className="text-black dark:text-white text-lg font-medium mb-4">{items.heading}</h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal">{items.subheading}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
