import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample({ product, alt }) {
  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden  py-6 px-2 flex justify-center items-center">
      <Carousel
        data-bs-theme="dark"
        className="w-full rounded-3xl shadow-lg carousel-fade"
        indicators={false}
        controls={false}
        fade={true}
        interval={4000}
        pause={false}
        slide={false}
      >
        <Carousel.Item>
          <div className="w-full flex justify-center">
            <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product}
                alt={alt}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-quicksand font-semibold text-center text-gray-800">{alt}</h3>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
