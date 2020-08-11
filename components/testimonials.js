const testimonials = [
  {
    name: "Dan Abramov",
    text:
      "Sara's book is amazing in its head-first approach to the React ecosystem. If you're suffering from analysis paralysis between many options, I think it's a great starting point. In the end, even if you might end up disagreeing with some of Sara's opinionated picks and replace them with something else, that's the point — the goal of this book is to help you break through the mental block of starting a project.",
    link: "https://twitter.com/dan_abramov",
    job: "Software developer, Facebook",
    pic:
      "https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg",
  },
  {
    name: "Tomasz Łakomy",
    text: `
    "Every React app consists of answers for tens of questions: "what do we use for state management? Styles? Fetching data? Animation? Cache? Testing? What are we even doing?".
  <br/>  <br/>
    
    Navigating the React ecosystem is anything but simple and having a guide who'll help you avoid getting lost is absolutely priceless. 
    <br/>  <br/>
    That's where Sara and her books come in - "The Opinionated Guide To React" is years of trial & error of trying different solutions for common problems in React apps and finding out which solved her problems and are more than likely to solve yours. She went through it all so <b>you don't have to</b>.
    <br/>  <br/>
    I've been writing React for a living since 2016 and Sara's book taught me a lot. Every page is filled with her wit and sense of humour which makes the whole book a joy to read.
    <br/>  <br/>
    My only criticism is that it wasn't written sooner as I'd absolutely love to read it years ago. It's definitely worth your time and I cannot recommend it enough."`,
    link: "https://twitter.com/tlakomy",
    job: "Senior developer, OLX",
    pic:
      "https://pbs.twimg.com/profile_images/1251913970660843520/hyH5ML2H_400x400.jpg",
  },
  {
    name: "Siddharth Kshetrapal",
    text: `
    "The React ecosystem is an actual <b>jungle</b>! There are so many opinions, libraries, "thought leaders" and <b>conflicting best practices</b><br/><br/>
<b>Sara is one of the people who's opinion I want to actively listen to.</b> (and I really do, at work, not because i'm forced to but because i want to :P)<br/><br/>
In the book, Sara walks through folder structure, deployments, package recommendations for state management, animations, etc. and her hot takes on typescript.
<br/><br/>
Get this book if you want something to refer back to again and again. Cannot recommend enough! `,
    link: "https://twitter.com/siddharthkp",
    job: "Developer, CodeSandbox",
    pic:
      "https://pbs.twimg.com/profile_images/1268900195544248322/U4lnYGdi_400x400.jpg",
  },
  {
    name: "Monica Lent",
    text:
      "There's a lot of hype and noise in the JavaScript and React ecosystems. Sara is one of the few people I turn to for her experience and recommendations when it comes to libraries and tooling. For anyone who wants to cut through the hype and select a coherent tech stack based on real-world experience, picking up Opinionated React is a no-brainer.",
    link: "https://monicalent.com/",
    job: "",
    pic: "https://monicalent.com/images/my-face-square.jpg",
  },
];

const Testimonials = () => (
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full">
      <h2 className="mt-2 text-3xl leading-9 font-extrabold text-brandGreen sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none pb-4">
        Testimonials
      </h2>
      <p className="mt-4 text-xl leading-7 text-gray-300">
        Some people read the book and did not mind being on the website as
        marketing!
      </p>
    </div>
    {testimonials.map((testimonial) => (
      <section
        key={testimonial.name}
        className="py-12 overflow-hidden md:py-20 lg:py-24"
      >
        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-8">
              <div
                className="max-w-3xl mx-auto text-center text-lg leading-8 text-gray-50"
                dangerouslySetInnerHTML={{ __html: testimonial.text }}
              ></div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src={testimonial.pic}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <a
                      className="text-gray-50"
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener norefereer"
                    >
                      <div className="text-base leading-6 font-medium text-gray-50 ">
                        {testimonial.name}
                      </div>
                    </a>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base leading-6 font-medium text-gray-400">
                      {testimonial.job}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    ))}
  </div>
);

export default Testimonials;
