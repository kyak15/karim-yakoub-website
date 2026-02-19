import { Link } from "react-router-dom";

const Movie = ({ movie, index }) => {
  const isReversed = index % 2 === 1;

  return (
    <Link to={`/blog/movies/${movie.slug}`} className="group block">
      <div
        className={`flex flex-col ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        } gap-6 md:gap-8 items-center`}
      >
        {/* Movie Image */}
        <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg">
          <img
            src={movie.image}
            alt={`Still from ${movie.title}`}
            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Movie Details */}
        <div
          className={`w-full md:w-1/2 ${
            isReversed ? "md:text-right" : "md:text-left"
          } text-center`}
        >
          <h3 className="font-patua text-2xl md:text-3xl text-gray-900 dark:text-gray-100 mb-3 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
            {movie.title}
          </h3>
          <div className="space-y-1 text-gray-600 dark:text-gray-400">
            <p className="text-lg">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {movie.director}
              </span>
            </p>
            <p className="text-sm">
              {movie.country} · {movie.year}
            </p>
          </div>
          <div
            className={`mt-4 inline-flex items-center gap-2 text-rose-500 dark:text-rose-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity ${
              isReversed ? "md:flex-row-reverse" : ""
            }`}
          >
            <span>Read Review</span>
            <span className={isReversed ? "rotate-180" : ""}>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
