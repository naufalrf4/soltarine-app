import { galleryImages } from '@/constants';
import React from 'react';

const GalleryPage = () => {
  return (
    <div className="bg-background p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold m-24 text-center">Dokumentasi Proyek</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {galleryImages.map((image, index) => (
        <div key={index} className="bg-background rounded-lg overflow-hidden shadow-md dark:shadow-l">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-center">{image.alt}</h2>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default GalleryPage;
