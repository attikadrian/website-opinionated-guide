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
            <h2 className="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
              Pricing
            </h2>
            <p className="mt-2 text-xl leading-7 text-gray-300">
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
            <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="rounded-lg shadow-lg overflow-hidden">
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
                        Online book version
                      </p>
                    </li>
                  </ul>
                  <Button onClick={openBookCheckout}>Get the book pack</Button>
                </div>
              </div>
              <div className="mt-4 rounded-lg shadow-lg overflow-hidden lg:mt-0">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default Buy;
