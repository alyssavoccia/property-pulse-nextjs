import Image from 'next/image';

const PropertyImages = ({ images }) => {
  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt="Property Image"
            className="object-cover h-[400px] mx-auto rounded-xl w-full"
            width={1800}
            height={400}
            sizes="100vw"
            priority={true}
            style={{ width: '100%', height: 'auto' }}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div key={index} className={`${images.length === 3 && index === 2 ? 'md:col-span-2' : ''}`}>
                <Image
                  src={image}
                  alt="Property Image"
                  className="object-cover h-[400px] mx-auto rounded-xl w-full"
                  width={1800}
                  height={400}
                  sizes="100vw"
                  priority={true}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
};

export default PropertyImages;