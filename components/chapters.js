const chapters = [
  // {
  //   name: "The Book",
  //   desc: "What is this I am reading? What will it teach me?",
  // },
  // {
  //   name: "About the author",
  //   desc: "Sara? Who?",
  // },
  // {
  //   name: "What will you learn?",
  //   desc: "Let's get all the cards in the table",
  // },
  {
    name: "Folder/ File Structuring",
    desc:
      "An app has a LOT of files so let's talk about knowing where stuff is",
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
    desc: "You don't always need a library, how can react help?",
    children: [
      "Using useState",
      "Global State with Context",
      "Using a state management library",
    ],
  },
  {
    name: "Project Starters",
    desc:
      "No more need to mess with webpack, let's look at some project starters",
    children: ["Create React App", "Next", "Gatsby"],
  },
  {
    name: "Packages",
    desc: "Many packages, much confusion",
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
    desc: "Hooks are cool but do they make sense? I hope they do after this",
    children: [
      "useEffect",
      "useLayoutEffect",
      "useContext",
      "useReducer",
      "useRef",
      "useCallback",
      "useMemo",
      "Create your own hook",
    ],
  },
  {
    name: "Deployments",
    desc: "Put your marvelous creation on the interwebs",
    children: ["Netlify", "Vercel"],
  },
  {
    name: "The Lingo Glossary",
    desc: "Sometimes people say things and I don't know what they mean",
  },
  { name: "Conclusion", desc: "Mostly me telling you to be a decent human" },
];

const Chapters = () => {
  return (
    <section className="text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="mt-2 text-3xl leading-9 font-extrabold text-brandGreen sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none pb-4">
            Chapters
          </h2>

          <p className="mt-4 text-xl leading-7 text-gray-300">
            There are 11 chapters and many smaller subchapters in this book.
            Let's talk about them
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {chapters.map((chapter) => (
            <div key={chapter.name} className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    {chapter.name}
                  </h2>
                  <p className="text-gray-400">{chapter.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          href="/useRef.pdf"
          className="mt-8 text-center block flex items-center justify-center text-white underline"
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
