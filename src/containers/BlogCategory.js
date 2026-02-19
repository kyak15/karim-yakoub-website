import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faMusic, faBook } from "@fortawesome/free-solid-svg-icons";
import Movie from "../components/Movie";
import moviesContent from "../content/movies";

const categoryConfig = {
  movies: {
    title: "Movies",
    icon: faFilm,
    color: "text-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-900/20",
    borderColor: "border-rose-200 dark:border-rose-800",
  },
  music: {
    title: "Music",
    icon: faMusic,
    color: "text-violet-500",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
    borderColor: "border-violet-200 dark:border-violet-800",
  },
  books: {
    title: "Books",
    icon: faBook,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    borderColor: "border-emerald-200 dark:border-emerald-800",
  },
};

const BlogCategory = () => {
  const { category } = useParams();
  const config = categoryConfig[category];

  if (!config) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-patua text-4xl text-gray-900 dark:text-gray-100 mb-4">
            Category Not Found
          </h1>
          <Link
            to="/blog"
            className="text-primary hover:text-secondary dark:text-primary-dark dark:hover:text-secondary-dark"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/blog"
            className="text-primary hover:text-secondary dark:text-primary-dark dark:hover:text-secondary-dark text-sm mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 rounded-2xl ${config.bgColor} flex items-center justify-center`}
            >
              <FontAwesomeIcon
                icon={config.icon}
                className={`text-3xl ${config.color}`}
              />
            </div>
            <h1 className="font-patua text-4xl md:text-5xl text-gray-900 dark:text-gray-100">
              {config.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        {category === "movies" && moviesContent.length > 0 ? (
          <div className="space-y-16">
            {moviesContent.map((movie, index) => (
              <Movie key={movie.slug} movie={movie} index={index} />
            ))}
          </div>
        ) : (
          <div
            className={`rounded-2xl border-2 border-dashed ${config.borderColor} p-12 text-center`}
          >
            <FontAwesomeIcon
              icon={config.icon}
              className={`text-6xl ${config.color} opacity-30 mb-4`}
            />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No {config.title.toLowerCase()} posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCategory;
