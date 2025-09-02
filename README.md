This project was developed to demonstrate skills in:

    React: Building a dynamic single-page application with reusable components.

    API Integration: Fetching and handling asynchronous data from a public REST API.

    State Management: Using React Hooks (useState and useEffect) to manage application state.

    Responsive Design: Creating a user-friendly interface that adapts to various screen sizes.

    Component-Based Architecture: Structuring the application into logical, reusable components.

    Using TailwindCSS for styling.

    Features

    Homepage: A pre-populated homepage displays a list of popular movies upon first load, inspired by streaming platforms like Netflix and YouTube.

    Search Functionality: A robust search bar allows users to find specific movies by title.

    Movie List: Displays a grid of movie cards with posters, titles, and release years.

    Movie Details Modal: Clicking a movie card opens a modal with in-depth information, including the plot, cast, ratings, and genre.

    Responsive UI: The layout adjusts seamlessly for optimal viewing on desktop, tablet, and mobile devices.

    Error Handling: Provides user-friendly messages for network errors, invalid API responses, or no search results.

 Tech Stack

    Frontend: React, HTML5, CSS3

    Styling: Tailwind CSS

    API: OMDB API

    Package Manager: npm



Project Structure

/movie-database-app
├── public/
├── src/
│   ├── components/
│   │   ├── Homepage.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── SearchBar.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md