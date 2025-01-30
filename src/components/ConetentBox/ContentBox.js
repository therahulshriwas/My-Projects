const ContentRow = ({ title, movies }) => {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="flex space-x-4 overflow-x-scroll">
          {movies.map((movie, index) => (
            <img
              key={index}
              src={movie.src}
              alt={movie.alt}
              className="w-64 h-40 object-cover rounded-md"
              width="300"
              height="200"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ContentRow;