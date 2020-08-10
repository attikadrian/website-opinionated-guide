import Footer from "../components/footer";
import { useState } from "react";

export default () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const getLinks = async (e) => {
    e.preventDefault();
    setError(false);
    if (!email) {
      setError(true);
      return;
    }

    await Paddle.User.History(email, 595964, (rsp) => {
      if (rsp.error) {
        return;
      }
      const link = Paddle.Download.GetURLFromID(595964);
      setSuccess({
        link,
      });
    });
  };
  return (
    <main className="text-gray-400">
      <div
        className="container px-5 py-24 mx-auto leading-normal mt-20"
        style={{
          height: "calc(100vh - 200px)",
          width: "100vw",
        }}
      >
        <div className="flex flex-col text-center w-full mb-6">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Recover Past Downloads
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
            Paddle will email you a link to the product when you buy it and that
            link will always be updated. If you can't find it please provide
            your email that was used to buy the buy.
          </p>
        </div>
        <form onSubmit={getLinks} className="flex items-end justify-center">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-5 text-gray-400"
            >
              Email
            </label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: 300 }}
                id="email"
                class={`text-gray-800 form-input block w-full pr-10 sm:text-sm sm:leading-5 ${
                  error
                    ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red"
                    : null
                }`}
                required
                placeholder="you@example.com"
                aria-invalid={error}
                aria-describedby="email-error"
              />
              {error ? (
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    class="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </div>
          <span class="inline-flex rounded-md shadow-sm ml-4">
            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
              Recover
            </button>
          </span>
        </form>
        {error ? (
          <p class="mt-2 text-sm text-red-600 text-center" id="email-error">
            No purchase was found with that email
          </p>
        ) : null}
        {success ? (
          <>
            <p class="mt-4 text-sm text-green-200 text-center" id="email-error">
              Paddle sent you the details of your purchase to your email.
            </p>
            <a
              href={success.link}
              className="mt-2 text-center block flex items-center justify-center text-white underline"
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
              Download the latest version of the book
            </a>
          </>
        ) : null}
      </div>

      <Footer notHome />
    </main>
  );
};
