import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CarGallery from '../components/sections/CarGallery';
import { getAllCars, getCarsByCategory } from '../data/cars';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const CarRental = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isAgreementOpen, setIsAgreementOpen] = useState(false);
  const cars = selectedCategory === 'all' ? getAllCars() : getCarsByCategory(selectedCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contractImages = [
    '/Productos/Coches/Documentación/Contratos/CONTRATO R8 EJEMPLO/contract_R8-1.jpg',
    '/Productos/Coches/Documentación/Contratos/CONTRATO R8 EJEMPLO/contract_R8-6.jpg',
    '/Productos/Coches/Documentación/Contratos/CONTRATO R8 EJEMPLO/contract_R8-7.jpg',
    '/Productos/Coches/Documentación/Contratos/CONTRATO R8 EJEMPLO/contract_R8-8.jpg'
  ];

  const agreementImages = [
    '/Productos/Coches/Documentación/NUEVO CONTRATO ALQUILER WELLER-images-0.jpg',
    '/Productos/Coches/Documentación/NUEVO CONTRATO ALQUILER WELLER-images-1.jpg',
    '/Productos/Coches/Documentación/NUEVO CONTRATO ALQUILER WELLER-images-2.jpg',
    '/Productos/Coches/Documentación/NUEVO CONTRATO ALQUILER WELLER-images-3.jpg',
    '/Productos/Coches/Documentación/NUEVO CONTRATO ALQUILER WELLER-images-4.jpg',
    '/Productos/Coches/Documentación/NUEVO CONTRATO ALQUILER WELLER-images-5.jpg',
    '/Productos/Coches/Documentación/NUEVO CONTRATO ALQUILER WELLER-images-6.jpg',
    '/Productos/Coches/Documentación/NUEVO CONTRATO ALQUILER WELLER-images-7.jpg',
    '/Productos/Coches/Documentación/NUEVO CONTRATO ALQUILER WELLER-images-8.jpg',
  ];


  return (
    <div className="container mx-auto px-4 pt-32 pb-8">
      <h1 className="text-4xl font-bold mb-8">Luxury Car Rental</h1>
      
      <div className="mb-8">
        <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All Cars</TabsTrigger>
            <TabsTrigger value="luxury">Luxury</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
            <TabsTrigger value="suv">SUV</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <CarGallery cars={cars} />
          </TabsContent>
          <TabsContent value="luxury">
            <CarGallery cars={cars} />
          </TabsContent>
          <TabsContent value="sports">
            <CarGallery cars={cars} />
          </TabsContent>
          <TabsContent value="suv">
            <CarGallery cars={cars} />
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div 
          className="bg-white p-6 shadow-md cursor-pointer hover:shadow-xl transition-all duration-500"
          onClick={() => setIsContractOpen(true)}
        >
          <h2 className="text-2xl font-libre-baskerville font-light mb-4">Sample Contract</h2>
          <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
            <img
              src={contractImages[0]}
              alt="Sample Contract"
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
            />
          </div>
          <p className="text-gray-600 mt-4 text-center">Click to view all contract pages</p>
        </div>

        <div 
          className="bg-white p-6 shadow-md cursor-pointer hover:shadow-xl transition-all duration-500"
          onClick={() => setIsAgreementOpen(true)}
        >
          <h2 className="text-2xl font-libre-baskerville font-light mb-4">Rental Agreement</h2>
          <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
            <img
              src={agreementImages[0]}
              alt="Rental Agreement"
              className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
            />
          </div>
          <p className="text-gray-600 mt-4 text-center">Click to view all agreement pages</p>
        </div>
      </div>

      <div className="text-center py-16 bg-[#E8F9FF]/60">
        <h2 className="text-3xl font-libre-baskerville font-light mb-4">Ready to Rent Your Dream Car?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us for personalized assistance, detailed pricing, and to schedule your luxury car rental experience.
        </p>
        <Link 
          to="/contact" 
          className="inline-block px-6 py-2 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-500"
        >
          Contact Us
        </Link>
      </div>

      <Lightbox
        open={isContractOpen}
        close={() => setIsContractOpen(false)}
        slides={contractImages.map(img => ({ src: img }))}
      />

      <Lightbox
        open={isAgreementOpen}
        close={() => setIsAgreementOpen(false)}
        slides={agreementImages.map(img => ({ src: img }))}
      />
    </div>
  );
};

export default CarRental; 