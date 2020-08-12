import FAQ from "./FAQ";
import CheckMark from "./checkmark";
import Button from "./button";

const Buy = () => {
  const openBookCheckout = () => {
    window.Paddle.Checkout.open({ product: 595964 });
  };

  return (
    <div className="bg-gray-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:max-w-none">
            <h2 className="mt-2 text-3xl leading-9 font-extrabold text-brandGreen sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none pb-4">
              Pricing
            </h2>
            <p className="mt-4 text-xl leading-7 text-gray-300">
              Rent is expensive in a major city and the berlin winters are
              pretty harsh.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-1 lg:gap-5">
              <div
                className="rounded-lg shadow-lg overflow-hidden"
                style={{ maxWidth: 500, margin: "auto" }}
              >
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                    $30
                  </div>
                  <p className="mt-5 text-lg leading-7 text-gray-500">
                    The book pack
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                  <ul>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckMark />
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Book in Light & Dark Versions
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <CheckMark />
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        All Code Examples
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <CheckMark />
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        PDF + Kindle version downloads and online book version
                      </p>
                    </li>
                  </ul>
                  <Button onClick={openBookCheckout}>Get the book pack</Button>
                </div>
              </div>
              {/* <div className="mt-4 rounded-lg shadow-lg overflow-hidden lg:mt-0">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                    $60
                  </div>
                  <p className="mt-5 text-lg leading-7 text-gray-500">
                    The super opinionated pack
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                  <ul>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckMark />
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Everything in the book pack
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <CheckMark />
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        More exercises and code examples
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <CheckMark />
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Video Lessons
                      </p>
                    </li>
                  </ul>
                  <Button>
                    <a
                      data-formkit-toggle="c358896839"
                      href="https://colossal-artist-8004.ck.page/c358896839"
                    >
                      Let me know when this launches
                    </a>
                  </Button>
                </div>
              </div>*/}
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-screen-xl mx-auto  px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto lg:max-w-none">
              <h2 className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none text-center">
                About the author
              </h2>
            </div>
            <div className="mt-12 flex md:justify-center items-start">
              <img
                src="/gayme.jpeg"
                alt="Sara Vieira"
                className="rounded hidden md:block mr-8"
                style={{ width: 350 }}
              />
              <p style={{ maxWidth: 600, fontSize: 17 }}>
                Sara Vieira is a developer at CodeSandbox. GraphQL and Open
                Source enthusiast by day, football aficionado at night. Her
                experience and cat-like curiosity have taken her to build stuff
                with all sorts of frontend technologies that range from PHP and
                NodeJS to Vue and Reason, but since 2016, she has focused the
                majority of her projects in React.
                <br />
                <br />
                As a self-taught programmer, Sara advocates for the importance
                of learning by building dumb (or not so dumb) shit that can make
                people smile, as well as to give back to the community by
                sharing what you learn with others.
                <br />
                <br />
                Actively involved in the frontend community as a conference
                speaker, Sara is also the founder of QueerJS, a series of small
                community meetups where everybody is welcomed, but it's queer
                speakers that take the stage.
                <br />
                <br />
                Her talents include banging sticks into a drum kit and saying
                the wrong thing at the wrong time. You may find her having
                coffee in the streets of Berlin while talking about terrible
                horror movies, airports and TypeScript.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Buy;
