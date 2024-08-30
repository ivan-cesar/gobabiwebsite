"use client";
import Image from 'next/image';

interface workdata {
  imgSrc: string;
  heading: string;
  subheading: string;
  hiddenpara: string;
}

const workdata: workdata[] = [
  {
    imgSrc: '/images/Work/icon-one.svg',
    heading: 'Créer un compte',
    subheading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
    hiddenpara:
      'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
  },
  {
    imgSrc: '/images/Work/icon-two.svg',
    heading: 'Trouvez votre crédit',
    subheading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
    hiddenpara:
      'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
  },
  {
    imgSrc: '/images/Work/icon-three.svg',
    heading: 'Monnaie de change',
    subheading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',
    hiddenpara:
      'standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. It has survived...',
  },
];

const Work = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative">
        <div className="radial-bgone hidden lg:block"></div>
        <div className="text-center mb-14">
          <h3 className="text-gray-700 dark:text-white text-3xl md:text-5xl font-bold mb-3">Comment ça marche ?</h3>
          <p className="text-gray-700 dark:text-gray-300 md:text-lg font-normal leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry standard dummy text ever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32">
          {workdata.map((items, i) => (
            <div className="card-b p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md" key={i}>
              <div className="work-img-bg rounded-full flex justify-center absolute p-6 bg-gray-100 dark:bg-gray-700">
                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
              </div>
              <div>
                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
              </div>
              <h3 className="text-2xl text-gray-700 dark:text-white font-semibold text-center mt-8">{items.heading}</h3>
              <p className="text-base font-normal text-gray-700 dark:text-gray-300 text-center mt-2">{items.subheading}</p>
              <span className="text-base font-normal m-0 text-gray-700 dark:text-gray-300 text-center hides">{items.hiddenpara}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
