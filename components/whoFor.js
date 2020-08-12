const WhoIsItFor = () => {
  return (
    <section className="text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="mt-2 text-3xl leading-9 font-extrabold text-brandGreen sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none pb-4">
            Who is this book for?
          </h2>

          <p className="mt-4 text-xl leading-7 text-gray-300">
            Is that person you? That is the ultimate question.
          </p>
        </div>
        <div className="flex justify-center text-center">
          <p style={{ "max-width": 600, fontSize: 17 }}>
            I want to start by saying that this book will <b>not</b> teach you
            how to use React from scratch, and it also won't teach you some
            advanced diffing algorithm. <br />
            <br />
            The target audience isn't really about experience in this book, I
            wrote this for anyone who sometimes feels like they need a map to
            navigate through the React world.
            <br />
            <br />
            I will share my knowledge and things that I have used through all my
            years of React, my opinions on several packages and also ways of
            making things, I will share what helped me so that it can hopefully,
            help you.
            <br />
            <br />
            There will be opinions you don't agree, and that's okay we are all
            different, and we all build things differently. What I want you to
            get out of this book is a way to find possible paths, make sense of
            the tools, concepts, and packages you come across while building
            things with React, and to help making you feel confident enough to
            do a project from start to end or to speak up in a company meeting
            with your idea.
            <br />
            <br />I hope you learn as much from this book as I learned writing
            it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
