import { Link, useParams } from "react-router-dom";
import moviesContent from "../content/movies";

// Parse basic markdown: _italic_ and **bold**
const parseMarkdown = (text) => {
  const parts = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Match _italic_ or **bold**
    const italicMatch = remaining.match(/_(.*?)_/);
    const boldMatch = remaining.match(/\*\*(.*?)\*\*/);

    // Find which comes first
    let firstMatch = null;
    let matchType = null;

    if (italicMatch && (!boldMatch || italicMatch.index <= boldMatch.index)) {
      firstMatch = italicMatch;
      matchType = "italic";
    } else if (boldMatch) {
      firstMatch = boldMatch;
      matchType = "bold";
    }

    if (firstMatch) {
      // Add text before the match
      if (firstMatch.index > 0) {
        parts.push(remaining.slice(0, firstMatch.index));
      }
      // Add the formatted text
      if (matchType === "italic") {
        parts.push(<em key={key++}>{firstMatch[1]}</em>);
      } else {
        parts.push(<strong key={key++}>{firstMatch[1]}</strong>);
      }
      remaining = remaining.slice(firstMatch.index + firstMatch[0].length);
    } else {
      parts.push(remaining);
      break;
    }
  }

  return parts;
};

const MovieDetail = () => {
  const { slug } = useParams();
  const movie = moviesContent.find((m) => m.slug === slug);

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-patua text-4xl text-gray-900 dark:text-gray-100 mb-4">
            Movie Not Found
          </h1>
          <Link
            to="/blog/movies"
            className="text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300"
          >
            ← Back to Movies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Image Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={movie.image}
          alt={`Still from ${movie.title}`}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-gray-900 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-transparent" />

        {/* Back button */}
        <Link
          to="/blog/movies"
          className="absolute top-6 left-6 text-white/90 hover:text-white text-sm font-medium flex items-center gap-2 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full transition-colors"
        >
          ← Back to Movies
        </Link>
      </div>

      {/* Content Section */}
      <div className="relative -mt-24 md:-mt-32">
        <div className="container mx-auto max-w-3xl px-6">
          {/* Title Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            {/* Movie Info */}
            <div className="text-center mb-8">
              <h1 className="font-patua text-3xl md:text-5xl text-gray-900 dark:text-gray-100 mb-4">
                {movie.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {movie.director}
                </span>
                <span className="text-gray-300 dark:text-gray-600">·</span>
                <span>{movie.country}</span>
                <span className="text-gray-300 dark:text-gray-600">·</span>
                <span>{movie.year}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-16 h-1 bg-rose-500 mx-auto rounded-full mb-8" />

            {/* Review */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {movie.review.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 last:mb-0"
                >
                  {parseMarkdown(paragraph.trim())}
                </p>
              ))}
            </div>
          </div>

          {/* Footer navigation */}
          <div className="text-center pb-16">
            <Link
              to="/blog/movies"
              className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 font-medium transition-colors"
            >
              ← View All Movies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
