import Image from "next/image";

const CTA = () => {
  return (
    <section className="relative flex flex-col overflow-hidden min-h-screen justify-end">
      {/* <div
      // src="/images/ctabg.avif"
        // alt="Background"
        className=" w-full"
        // fill
      /> */}
          <Image 
            src="/images/nameLogoGreen.svg"
            alt="Logo"
            className="w-1/2 mx-auto px-8"
            fill
            />
      <div className="relative  bg-neutral bg-opacity-70 "></div>
      <div className="relative text-primary p-8 flex flex-col items-center justify-center" >
        <div className=" flex flex-col items-center justify-center max-w-xxl p-8 mb-16 md:mb-0 md:p-0">
          <h2 className="font-bold text-2xl  md:text-5xl tracking-tight mb-8 md:mb-12">
          Cannabis club management, elevated.
          </h2>
          <p className="text-lg font-bold opacity-80 mb-12 md:mb-16">
          Simplify your club management with our all-in-one digital system. No need to write on paper, only roll it. 
          </p>
          {/* <button className="btn btn-primary btn-wide">Get Leaf Nodes</button> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
