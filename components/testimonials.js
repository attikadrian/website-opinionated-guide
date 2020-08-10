const testimonials = [
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
