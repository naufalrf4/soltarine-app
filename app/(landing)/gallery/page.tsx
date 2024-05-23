import React from 'react';

const GalleryPage = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Galeri Gambar</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://source.unsplash.com/random/300x300"
              alt="Gambar 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Gambar 1</h2>
              <p className="text-gray-600">Deskripsi singkat gambar 1.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://source.unsplash.com/random/300x301"
              alt="Gambar 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Gambar 2</h2>
              <p className="text-gray-600">Deskripsi singkat gambar 2.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://source.unsplash.com/random/300x302"
              alt="Gambar 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Gambar 3</h2>
              <p className="text-gray-600">Deskripsi singkat gambar 3.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://source.unsplash.com/random/300x303"
              alt="Gambar 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Gambar 4</h2>
              <p className="text-gray-600">Deskripsi singkat gambar 4.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
