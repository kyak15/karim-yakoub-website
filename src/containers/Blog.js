import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faMusic, faBook } from "@fortawesome/free-solid-svg-icons";
import mountainImg from "../img/mountain.jpg";
import musicImg from "../img/music.png";
import garyImg from "../img/gary.png";

const categories = [
  {
    title: "Movies",
    icon: faFilm,
    path: "/blog/movies",
    image: mountainImg,
  },
  {
    title: "Music",
    icon: faMusic,
    path: "/blog/music",
    image: musicImg,
  },
  {
    title: "Books",
    icon: faBook,
    path: "/blog/books",
    image: garyImg,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            to="/"
            className="text-primary hover:text-secondary dark:text-primary-dark dark:hover:text-secondary-dark text-sm mb-4 inline-block"
          >
            ← Back to Portfolio
          </Link>
          <h1 className="font-patua text-4xl md:text-5xl text-gray-900 dark:text-gray-100 mb-4">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Thoughts on Media I find Significant (Without Spoilers)
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.title} to={category.path} className="group">
              {/* Icon and Title - Above the card */}
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon
                  icon={category.icon}
                  className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors duration-300"
                />
                <h2 className="font-patua text-xl text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors duration-300">
                  {category.title}
                </h2>
              </div>

              {/* Card */}
              <div
                className={`relative overflow-hidden rounded-2xl ${
                  category.image
                    ? ""
                    : `bg-gradient-to-br ${category.color} ${category.hoverColor}`
                } shadow-lg transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl h-48`}
              >
                {/* Background image for cards with images */}
                {category.image && (
                  <>
                    <img
                      src={category.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                  </>
                )}

                {/* Decorative circle (only for non-image cards) */}
                {!category.image && (
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10 group-hover:scale-150 transition-transform duration-500" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
