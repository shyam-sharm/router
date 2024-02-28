import React from 'react';
import NavBar from '../componets/NavBar';

const GalleryPage = () => {
  return (
    <>
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">EdTech Startup</h1>
            <p className="mt-2">Empowering Education, One Click at a Time</p>
          </div>
         
        </div>
      </header>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Gallery</h2>
          {/* Add your gallery content, such as images or videos, here */}
        </div>
      </section>

      
    </>
  );
};

export default GalleryPage;
