import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample({ product, alt }) {
  return (
    <div className="w-full flex justify-center items-center py-12 px-4 bg-[#1e1145] overflow-hidden">
      <Carousel
        data-bs-theme="dark"
        className="w-full max-w-3xl rounded-3xl shadow-lg"
        indicators={false}
        controls={false}
        fade={true}
        interval={1000} 
         pause={false}   
         slide={false}> 

        <Carousel.Item>
          <div className="rounded-2xl bg-gradient-to-b from-white to-[#f5f5f5] shadow-xl transition-transform duration-300 hover:scale-[1.01]">
            
            {/* Image Box */}
            <div className="aspect-[4/3] lg:aspect-[6/4] overflow-hidden rounded-t-2xl">
              <img
                className="w-full h-full object-cover"
                src={product}
                alt={alt}
              />
            </div>

            {/* Caption */}
            <div className="p-6 text-center">
              <h3 className="text-[#1e1145] text-2xl md:text-3xl font-bold font-quicksand">
                {alt}
              </h3>
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;
