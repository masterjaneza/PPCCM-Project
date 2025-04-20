function App() {
  return (
    <main className="w-[700px] h-[493px] bg-white flex justify-center items-center gap-[45px] rounded-2xl max-mobile-L:flex-col">
      <div className="flex-1">
        <picture>
          {/* Image for mobile screens */}
          <source
            srcSet="/images/image-product-mobile.jpg"
            media="(max-width: 425px)"
          />
          {/* Default image for larger screens */}
          <img
            src="/images/image-product-desktop.jpg"
            alt="Product"
            className="w-[334px] rounded-tl-2xl rounded-bl-2xl"
          />
        </picture>
      </div>

      <div className="flex-1 p-[30px] flex flex-col gap-[21px]">
        <h2 className="text-[20px] uppercase tracking-[5px] font-['Montserrat'] text-gray-400">
          perfume
        </h2>

        <h1 className="font-['Fraunces'] text-4xl font-extrabold">
          Gabrielle <br /> Essence Eau <br /> De Parfum
        </h1>

        <p className="text-gray-500 font-[400] text-[17px]">
          A floral, solar and voluptuous <br /> interpretation composed by{" "}
          <br /> Olivier Polge, Perfumer-Creator <br /> for the House of CHANEL.
        </p>

        <h1 className="font-['Fraunces'] text-4xl text-[hsl(158,36%,37%)] font-medium">
          $149.99{" "}
          <sup>
            <del className="text-gray-500 text-[17px]">$169.99</del>
          </sup>
        </h1>

        <button className="w-[250px] h-[60px] bg-[hsl(158,36%,37%)] rounded-2xl text-white capitalize text-[20px] flex items-center justify-center gap-2 hover:bg-[hsl(158,42%,18%)] transition cursor-pointer">
          <i className="fas fa-cart-shopping"></i>
          Add to Cart
        </button>
      </div>
    </main>
  );
}

export default App;
