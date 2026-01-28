const projectContent = [
  {
    title: "Crescendo Music Reviews Full-Stack App",
    description:
      "JavaScript, React, Node, Express, PostgreSQL, Docker, Digital Ocean",
    details: {
      bullets: [
        "Created a full-stack web application that allows users to review, save, and find new music.",
        "Utilized the LastFM and Spotify API to obtain trending albums, songs, artists, and album information.",
        "Developed a REST API using Express.js that enables users to retrieve album data and conduct CRUD operations like creating reviews, following friends, or saving albums.",
        "Deployed using Docker for containerization and DigitalOcean for cloud infrastructure to ensure reliable performance and scalability across environments.",
        "Implemented PostgreSQL database to efficiently store user information, reviews, listen lists, and favorite albums.",
        "Set up JWT authentication and authorization by storing tokens in HTTP cookies on the backend to secure signed-in user sessions.",
        "Constructed the client-side application using React and React-router with responsive web design.",
      ],
      link: {
        url: "http://147.182.140.49:3000/",
        text: "Visit the Site Here!",
      },
    },
  },
  {
    title: "Vocab Tracker and Flashcard Game",
    description: "Python, Flask, JavaScript, React, Node, PostgreSQL",
    details: {
      bullets: [
        "Developed a web application that tracks newly learned vocabulary from a user’s book and reinforce them through an interactive flashcard game.",
        "Integrated the Google Books API and Dictionary API for book and word data retrieval.",
        "Practiced test driven development using PyTest for unit and integration testing.",
        "Engineered a PostgreSQL database to store books and vocabulary words efficiently.",
      ],
    },
  },
  {
    title: "Zillow Web Scraper and Home Finder",
    description: "Python, Flask, BeautifulSoup, PostgreSQL",
    details: {
      bullets: [
        "Built a Python web scraper to extract Zillow home listings for my parents, including price, location,and square footage.",
        "Developed filters to match listings with budget, location, and feature preferences.",
        "Managed listing data in PostgreSQL for efficient querying and updates.",
        "Set up automated email alerts for new listings matching desired criteria.",
      ],
    },
  },
];

export default projectContent;
