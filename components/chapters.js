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
            Our Team
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
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
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
      </div>
    </section>
  );
};

export default Chapters;
