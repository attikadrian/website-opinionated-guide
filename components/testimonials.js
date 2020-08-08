const testimonials = [
  {
    name: "Tomasz Łakomy",
    text: "The fuck did I just read?",
    link: "https://twitter.com/tlakomy",
    job: "Senior developer, OLX",
    pic:
      "https://pbs.twimg.com/profile_images/1251913970660843520/hyH5ML2H_400x400.jpg",
  },
];

const Testimonials = () => (
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        Testimonials
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-white">
        Some people read the book and did not mind being on the website as
        marketing!
      </p>
    </div>
    {testimonials.map((testimonial) => (
      <section class="py-12 overflow-hidden md:py-20 lg:py-24">
        <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative">
            <blockquote class="mt-8">
              <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-50 ">
                <p>{testimonial.text}</p>
              </div>
              <footer class="mt-8">
                <div class="md:flex md:items-center md:justify-center">
                  <div class="md:flex-shrink-0">
                    <img
                      class="mx-auto h-10 w-10 rounded-full"
                      src={testimonial.pic}
                      alt={testimonial.name}
                    />
                  </div>
                  <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <a
                      className="text-gray-50"
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener norefereer"
                    >
                      <div class="text-base leading-6 font-medium text-gray-50 ">
                        {testimonial.name}
                      </div>
                    </a>

                    <svg
                      class="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div class="text-base leading-6 font-medium text-gray-500">
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
