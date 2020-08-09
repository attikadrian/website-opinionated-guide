const Features = () => (
  <div class="py-12 bg-gray-900">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg
              width={24}
              height={24}
              x={0}
              y={0}
              enableBackground="new 0 0 512 512"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentcolor"
                d="M383.9 23.8c-2-2-4.5-3.2-7.3-3.4l-2.1-.3c-.4 0-.8-.1-1.2-.1H202c-23.2 0-42 18.9-42 42.1V91H85c-23.2 0-42 19.2-42 42.3v316.6c0 23.2 18.8 42.1 42 42.1h225c23.2 0 42-18.9 42-42.1V421h75c23.2 0 42-19.2 42-42.3v-265c0-3.2-1.3-6.2-3.5-8.5l-81.6-81.4zM387 61l41.2 41H387V61zm-77 407H85c-9.9 0-18-8.2-18-18.1V133.3c0-9.9 8.1-18.3 18-18.3h161v70.1c0 6.6 5.6 11.9 12.2 11.9H328v252.9c0 9.9-8.1 18.1-18 18.1zm-40-335.8l41.2 40.8H270v-40.8zM427 397h-75V184.9c0-3.2-1.3-6.2-3.5-8.5L266.9 95c-2-2-4.5-3.2-7.3-3.4l-2.1-.4c-.4 0-.8-.2-1.2-.2H184V62.1c0-9.9 8.1-18.1 18-18.1h161v69.9c0 6.6 5.6 12.1 12.2 12.1H445v252.7c0 9.9-8.1 18.3-18 18.3z"
              />
              <path
                fill="currentcolor"
                d="M125.9 298h51.8c6.6 0 12-5.4 12-12s-5.4-12-12-12h-51.8c-6.6 0-12 5.4-12 12s5.3 12 12 12zM269.1 355H125.9c-6.6 0-12 5.4-12 12s5.4 12 12 12h143.2c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
              />
            </svg>
          </div>
          <div class="mt-5">
            <h5 class="text-lg leading-6 font-medium text-white">+180 pages</h5>
            <p class="mt-2 text-base leading-6 text-gray-400">
              More than 180 pages of React recipes.
            </p>
          </div>
        </div>
        <div class="mt-10 lg:mt-0">
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
          <div class="mt-5">
            <h5 class="text-lg leading-6 font-medium text-white">
              Dozens of code examples
            </h5>
            <p class="mt-2 text-base leading-6 text-gray-400">
              Plenty of code examples all hosted on{" "}
              <a href="https://codesandbox.io">CodeSandbox</a> so that you can
              edit and play around with.
            </p>
          </div>
        </div>
        <div class="mt-10 lg:mt-0">
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div class="mt-5">
            <h5 class="text-lg leading-6 font-medium text-white">
              Transfers are instant
            </h5>
            <p class="mt-2 text-base leading-6 text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Features;
