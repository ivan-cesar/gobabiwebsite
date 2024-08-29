"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';

const Banner = () => {
    const [isOpen, setOpen] = useState(false);
    const [downloadLink, setDownloadLink] = useState('');

    useEffect(() => {
        // Détecter l'OS de l'utilisateur
        const userAgent = navigator.userAgent || navigator.vendor;

        if (/android/i.test(userAgent) || /windows/i.test(userAgent)) {
            // Si l'appareil est un téléphone Android ou un PC Windows
            setDownloadLink('https://play.google.com/store/apps/details?id=com.gobabi.user&hl=fr&pli=1');
        } else if (/iPad|iPhone|iPod/.test(userAgent) || /Macintosh/.test(userAgent)) {
            // Si l'appareil est un iPhone, iPad ou Mac
            setDownloadLink('https://apps.apple.com/ci/app/gobabi/id6467127120');
        } else {
            // Lien par défaut (par exemple, Android)
            setDownloadLink('https://play.google.com/store/apps/details?id=com.gobabi.user&hl=fr&pli=1');
        }
    }, []);

    return (
        <div className='relative bg-image dark:bg-dark-image' id="home-section">
            <div className='arrowOne'></div>
            <div className='radial-banner hidden lg:block'></div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="1YyAzVmP9xQ" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">
                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        <div className='arrowTwo'></div>
                        <div className='col-span-7'>
                            <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-gray-700 dark:text-gray-300 md:4px md:text-start text-center">
                                Buy, Sell & Accept <br /> Digital Assets
                            </h1>
                            <p className='text-gray-700 dark:text-gray-300 md:text-lg font-normal mb-10 md:text-start text-center'>
                                Lorem Ipsum is simply dummy text of the printing and <br />
                                typesetting industry. Lorem Ipsum has been the industry <br />
                                standard dummy text ever since the 1500s
                            </p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                <a href={downloadLink} target="_blank" rel="noopener noreferrer">
                                    <button className='text-xl font-semibold text-white dark:text-black py-4 px-6 lg:px-12 navbutton mr-6'>
                                        Télécharger
                                    </button>
                                </a>
                                <button onClick={() => setOpen(true)} className='bg-transparent flex justify-center items-center text-gray-900 dark:text-white'>
                                    <Image src={'/images/Banner/playbutton.svg'} alt="button-image" className='mr-3' width={47} height={47} />
                                    How it works
                                </button>
                            </div>
                        </div>

                        <div className='col-span-5 lg:-m-48'>
                            <div className='arrowThree'></div>
                            <div className='arrowFour'></div>
                            <div className='arrowFive'></div>
                            <Image src="/images/Banner/_images_Banner_banner.png" alt="nothing" width={1013} height={760} />
                            <div className='arrowSix'></div>
                            <div className='arrowSeven'></div>
                            <div className='arrowEight'></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
