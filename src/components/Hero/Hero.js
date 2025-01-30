
const HeroSection = () => {
    return (
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="https://storage.googleapis.com/a1aa/image/sgtbcXISUWKTJFhpaVWeCySJrIKfe7m2LFBh2A8mY9bj7dQoA.jpg"
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          width="1920"
          height="1080"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Featured Movie Title</h1>
          <p className="text-lg mb-6">A brief description of the featured movie goes here.</p>
          <button className="bg-white text-black px-6 py-3 rounded-md font-bold mr-4">Play</button>
          <button className="bg-gray-700 bg-opacity-75 text-white px-6 py-3 rounded-md font-bold">More Info</button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  