'use client';

import Image from 'next/image';
import { Gallery, Item } from 'react-photoswipe-gallery';

const PropertyImages = ({ images }) => {
  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">
          {images.length === 1 ? (
            <Item original={images[0]} thumbnail={images[0]} width="1000" height="600">
              {({ ref, open }) => (
                <Image
                  src={images[0]}
                  ref={ref}
                  onClick={open}
                  alt="Property Image"
                  className="object-cover h-[400px] mx-auto rounded-xl w-full cursor-pointer"
                  width={1800}
                  height={400}
                  sizes="100vw"
                  priority={true}
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
            </Item>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.map((image, index) => (
                <div key={index} className={`${images.length === 3 && index === 2 ? 'md:col-span-2' : ''}`}>
                  <Item original={image} thumbnail={image} width="1000" height="600">
                  {({ ref, open }) => (
                    <Image
                      src={image}
                      ref={ref}
                      onClick={open}
                      alt="Property Image"
                      className="object-cover h-[400px] mx-auto rounded-xl w-full cursor-pointer"
                      width={1800}
                      height={400}
                      sizes="100vw"
                      priority={true}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  )}
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  )
};

export default PropertyImages;