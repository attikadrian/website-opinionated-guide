const Features = () => (
  <div className="py-12 bg-gray-900">
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg
              width={24}
              height={24}
              x={0}
              y={0}
              data-name="Layer 1"
              viewBox="0 0 100 100"
              fill="currentcolor"
            >
              <path d="M34 70a4 4 0 001.27-.21l24-8a4 4 0 002.52-2.53l8-24a4 4 0 00-5.06-5.06l-24 8a4 4 0 00-2.52 2.53l-8 24A4 4 0 0034 70zm11.16-24.84l14.52-4.84-4.84 14.52-14.52 4.84z" />
              <path d="M50 98a48 48 0 10-33.94-14A47.85 47.85 0 0050 98zM21.71 21.72a40 40 0 110 56.56 39.89 39.89 0 010-56.56z" />
            </svg>
          </div>
          <div className="mt-5">
            <h5 className="text-lg leading-6 font-medium text-white">
              190 pages of React Recipes
            </h5>
            <p className="mt-2 text-base leading-6 text-gray-400">
              This book is my personal map of the tips, power-ups and
              not-so-obvious solutions to common questions and problems that
              I've come across during 4 year of React development. I have been
              finding some of the cheat codes and share them with you.
            </p>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg
              width={24}
              height={24}
              x={0}
              y={0}
              data-container-transform="translate(0 4)"
              data-icon="code"
              viewBox="0 0 32 32"
              fill="currentcolor"
            >
              <path d="M17.063 4l-.031.156-5 22-.188.844h3.094l.031-.156 5-22L20.157 4h-3.094zM10 7l-.406.313-9 7-.594.469v1.438l.594.469 9 7 .406.313v-3.781l-6.063-4.719L10 10.783V7.002zm12 0v3.781l6.063 4.719L22 20.219V24l.406-.313 9-7 .594-.469V14.78l-.594-.469-9-7L22 6.998z" />
            </svg>
          </div>
          <div className="mt-5">
            <h5 className="text-lg leading-6 font-medium text-white">
              Step-by-step code examples
            </h5>
            <p className="mt-2 text-base leading-6 text-gray-400">
              Every recipe comes with companion code examples that walk you
              through common React cross-roads. All the examples are hosted on
              <a href="https://codesandbox.io">CodeSandbox</a> so that you can
              edit and play around with them.
            </p>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg
              width={24}
              height={24}
              x={0}
              y={0}
              data-name="Layer 1"
              viewBox="0 0 100 100"
              fill="currentcolor"
            >
              <path d="M80.84 81.139H19.16a6.439 6.439 0 01.05-12.878h61.58a6.439 6.439 0 01.05 12.878zM60.82 84.18a10.82 10.82 0 01-21.64 0M73.337 36.498c0-9.506-7.22-17.51-17.055-19.946a7.011 7.011 0 001.44-4.238 7.733 7.733 0 00-15.444 0 7.011 7.011 0 001.44 4.238c-9.836 2.435-17.055 10.44-17.055 19.946 0 24.377-3.907 25.84-6.856 28.723h60.387c-2.95-2.883-6.857-4.346-6.857-28.723zM50 14.972a2.887 2.887 0 01-3.065-2.658 3.096 3.096 0 016.13 0A2.887 2.887 0 0150 14.972z" />
            </svg>
          </div>
          <div className="mt-5">
            <h5 className="text-lg leading-6 font-medium text-white">
              Automatic updates of new versions included
            </h5>
            <p className="mt-2 text-base leading-6 text-gray-400">
              Modern frontend web development amirite? As the React ecosystem
              keeps evolving, so will this book. You will receive the new
              version every time a new level of the React game is added and new
              helpful add-ons are built for them.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
