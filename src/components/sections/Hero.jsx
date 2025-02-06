import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { villaImages } from '../../data/villas'


const Hero = () => {


  return (
    <section className="relative mt-32 lg:h-[calc(100vh-10rem)] overflow-hidden">
      <Carousel
        opts={{
          align: "start",

          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          })
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="-ml-0">
          {villaImages.map((image, index) => (
            <CarouselItem key={index} className="pl-0 relative">
              <div className="h-full lg:h-[calc(100vh-8rem)] w-full">
                <img

                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"

                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute inset-0 flex items-start justify-between px-4 md:px-32 pt-10 pointer-events-none text-white/90">
          <CarouselPrevious className="pointer-events-auto relative h-16 w-16 bg-black/10 border-none hover:bg-black/70 hover:text-white" />
          <CarouselNext className="pointer-events-auto relative h-16 w-16 bg-black/10 border-none hover:bg-black/70 hover:text-white" />
        </div>
      </Carousel>
    </section>
  );
};

export default Hero; 