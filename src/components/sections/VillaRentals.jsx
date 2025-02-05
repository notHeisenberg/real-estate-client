import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

const VillaRentals = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const images = [
        {
            src: '/images/villa-main.jpg',
            alt: 'Luxury Villa with Pool',
            width: 1920,
            height: 1080,
            title: 'Luxury Villa with Pool',
            description: 'Modern luxury villa with infinity pool and mountain views',
        },
        {
            src: '/images/villa-1.jpg',
            alt: 'Villa Interior',
            width: 800,
            height: 600,
            title: 'Villa Interior',
            description: 'Elegant living space with modern amenities',
        },
        {
            src: '/images/villa-2.jpg',
            alt: 'Villa Exterior',
            width: 800,
            height: 600,
            title: 'Villa Exterior',
            description: 'Beautiful garden and outdoor space',
        },
        {
            src: '/images/villa-3.jpg',
            alt: 'Pool Area',
            width: 800,
            height: 600,
            title: 'Pool Area',
            description: 'Stunning pool with lounge area',
        },
        {
            src: '/images/villa-4.jpg',
            alt: 'Master Bedroom',
            width: 800,
            height: 600,
            title: 'Master Bedroom',
            description: 'Luxurious master bedroom suite',
        },
        {
            src: '/images/villa-5.jpg',
            alt: 'Dining Area',
            width: 800,
            height: 600,
            title: 'Dining Area',
            description: 'Elegant dining space with views',
        },
        {
            src: '/images/villa-6.jpg',
            alt: 'Kitchen',
            width: 800,
            height: 600,
            title: 'Kitchen',
            description: 'Modern fully equipped kitchen',
        },
    ];

    const handleImageClick = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <h2 className="text-3xl font-libre-baskerville my-6 font-medium">
                        {t('villaRentals.title', 'LUXURY VILLA RENTALS')}
                    </h2>

                    <p className="text-lg font-didot text-gray-700 font-bold">
                        {t('villaRentals.description', 'Rediscover luxury with our curated selection of premium ')}
                        <span className="text-gray-700 italic font-bold">
                            Villa Rentals in Marbella {" , "}
                        </span>
                        {t('villaRentals.description', 'Sotogrande and Madrid.')}

                    </p>
                </div>


                {/* Main Image */}
                <div className="mb-4 cursor-pointer group relative overflow-hidden rounded-none" onClick={() => handleImageClick(0)}>
                    <img
                        src={images[0].src}
                        alt={images[0].alt}
                        className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                        <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                    {images.slice(1).map((image, index) => (
                        <div
                            key={index}
                            className="aspect-square cursor-pointer overflow-hidden rounded-lg group relative"
                            onClick={() => handleImageClick(index + 1)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                {/* Lightbox */}
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    index={photoIndex}
                    slides={images}
                    plugins={[Zoom]}
                    animation={{ zoom: 500 }}
                    zoom={{
                        maxZoomPixelRatio: 3,
                        zoomInMultiplier: 2,
                        doubleTapDelay: 300,
                    }}
                    render={{
                        iconZoomIn: () => (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        ),
                        iconZoomOut: () => (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                            </svg>
                        ),
                    }}
                    styles={{
                        container: { backgroundColor: 'rgba(0, 0, 0, .95)' },
                        button: { filter: 'drop-shadow(0 0 1px rgba(0, 0, 0, .5))' },
                    }}
                />

                {/* Service Description */}
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <p className="text-lg text-gray-800">
                        Our Concierge Service is designed to meet the highest expectations, offering personalized, efficient, and
                        premium-quality support to ensure an effortless and unforgettable experience.
                    </p>
                    <p className="text-lg text-gray-800 pb-12">
                        We handle every detail of your stay, allowing you to fully enjoy your time without stress or inconvenience.
                    </p>

                    <button className="mt-8 bg-[#54728a] text-white px-10 py-2 rounded-none hover:bg-opacity-80 transition-colors">
                        See More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VillaRentals; 