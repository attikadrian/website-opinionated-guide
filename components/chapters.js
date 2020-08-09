const chapters = [
  {
    name: "The Book",
  },
  {
    name: "About the author",
  },
  {
    name: "What will you learn?",
  },
  {
    name: "Folder/ File Structuring",
    children: [
      "Folder",
      "File naming",
      "Exporting Components",
      "Eslint",
      "TypeScript",
    ],
  },
  {
    name: "State Management: Oh, all the options",
    children: [
      "Using useState",
      "Global State with Context",
      "Using a state management library",
    ],
  },
  {
    name: "Project Starters",
    children: ["Create React App", "Next", "Gatsby"],
  },
  {
    name: "Packages",
    children: [
      "Routing",
      "State Management",
      "Animation",
      "Styling",
      "Forms",
      "Dates",
      "GraphQL",
      "UI Toolkits",
      "Component Playgrounds",
      "Icons",
    ],
  },
  {
    name: "The Hooks",
    children: [
      "useEffect",
      "useLayoutEffect",
      "useContext",
      "useReducer",
      "useRef",
      "useCallback",
      "useMemo",
    ],
  },
  {
    name: "Deployments",
    children: ["Netlify", "Vercel"],
  },
  { name: "The Lingo Glossary" },
  { name: "Conclusion" },
];

const Chapters = () => {
  return (
    <section class="text-white body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Chapters
          </h1>

          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div class="flex flex-wrap -m-2">
          {chapters.map((chapter) => (
            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <div class="flex-grow">
                  <h2 class="text-white title-font font-medium">
                    {chapter.name}
                  </h2>
                  <p class="text-gray-400">UI Designer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          href="/useRef.pdf"
          className="mt-8 text-center block flex items-center justify-center text-indigo-500"
        >
          <svg
            className="fill-current"
            width={32}
            height={32}
            x={0}
            y={0}
            enableBackground="new 0 0 48.2 48.2"
            viewBox="0 0 48.2 48.2"
          >
            <path d="M30.7 29.1l-5.5 4.6V20.4c0-.6-.5-1-1-1s-1 .5-1 1v13.4l-5.5-4.7c-.4-.4-1.1-.3-1.4.1-.4.4-.3 1.1.1 1.4l7.2 6.1s.1.1.2.1h.8c.1 0 .1-.1.2-.1h.2l7.1-6c.4-.4.5-1 .1-1.4-.4-.5-1.1-.6-1.5-.2z" />
            <path d="M39.5 23.9c-.2-1.8-1.1-3.4-2.4-4.8-1.3-1.3-2.9-2.2-4.8-2.5-.5-.1-.7-.3-.9-.7-.7-1.6-1.7-2.9-3.1-3.8-1.3-.8-2.9-1.3-4.5-1.5-1.7-.1-3.4.2-4.9.9-1.4.7-2.6 1.6-3.6 2.9-1 1.4-1.7 3.1-2 5-.1.5-.2.7-.7 1-1.4.6-2.6 1.8-3.3 3.3-.7 1.5-.9 3.2-.5 4.7.5 2 1.4 3.4 2.7 4.2.7.4 1.6-.1 1.6-.9 0-.4-.2-.7-.5-.9-1-.6-1.6-1.7-1.7-3.3-.3-2.9 1.3-4.9 4.3-5.5h.1v-.1c0-.3.1-.7.1-1 .1-.8.2-1.6.3-2.3.8-3.3 3.5-5.5 7-5.7 3.7-.2 6.1 1.4 7.1 4.8.2.8.6.9 1.3 1 2.1.2 3.9 1.1 5.1 2.6 1.1 1.5 1.6 3.4 1.2 5.4-.3 1.4-.6 2.5-1.2 3.2-.2.2-.4.3-.6.5-.3.2-.5.5-.5.8 0 .7 1.1 1.2 1.7.8 1-.8 1.7-2 2.1-3 .3-1.2.8-3.3.6-5.1z" />
          </svg>
          Download a sample chapter about useRef
        </a>
      </div>
    </section>
  );
};

export default Chapters;
