import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { villaImages } from '../../data/villas';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const VillaRentals = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

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
                        {t('villaRentals.title', 'YOUR LIFESTYLE, HASSLE-FREE')}
                    </h2>

                    <p className="text-2xl font-didot text-gray-700 font-extrabold mb-4">
                        {t('villaRentals.subtitle')}
                    </p>


                    <p className="text-lg font-didot text-gray-700 font-bold">
                        {t('villaRentals.description')}
                    </p>
                </div>

                {/* Main Carousel */}
                <div className="relative mb-8">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {villaImages.slice(0, 5).map((image, index) => (
                                <CarouselItem key={index} className="cursor-pointer" onClick={() => handleImageClick(index)}>
                                    <div className="relative aspect-[16/9] w-full overflow-hidden group">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute inset-y-12 md:inset-y-48 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
                            <CarouselPrevious className="pointer-events-auto relative h-12 w-12 bg-transparent border-none hover:bg-white/40 hover:text-[#4e99d7]" />
                            <CarouselNext className="pointer-events-auto relative h-12 w-12 bg-transparent border-none hover:bg-white/40 hover:text-[#4e99d7]" />
                        </div>
                    </Carousel>
                </div>

                {/* Gallery Grid with Carousel */}
                <div className="relative mb-6">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                            slidesToScroll: 6,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {villaImages.slice(1).map((image, index) => (
                                <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6">
                                    <div
                                        className="aspect-square cursor-pointer overflow-hidden rounded-none group relative"
                                        onClick={() => handleImageClick(index + 1)}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="absolute inset-y-0 md:inset-y-10 left-10 right-10 flex items-center justify-between px-4 pointer-events-none">
                            <CarouselPrevious className="pointer-events-auto relative h-8 w-8 bg-transparent border-none hover:bg-white/40 hover:text-[#4e99d7]" />
                            <CarouselNext className="pointer-events-auto relative h-8 w-8 bg-transparent border-none hover:bg-white/40 hover:text-[#4e99d7]" />
                        </div>
                    </Carousel>
                </div>

                {/* Lightbox */}
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    index={photoIndex}
                    slides={villaImages}
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
                        {t('villaRentals.serviceDescription')}
                    </p>
                    <p className="text-lg text-gray-800 pb-12">
                        {t('villaRentals.serviceDescription2')}
                    </p>

                    <button className="mt-8 bg-[#54728a] text-white px-10 py-2 rounded-none hover:bg-opacity-80 transition-colors">
                        {t('villaRentals.seeMore')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VillaRentals; 