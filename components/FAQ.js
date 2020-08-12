const data = [
  {
    question: "Who designed the cover?",
    answer: `The cover was designed by the amazingly talented 
    <a class="underline" href="https://dribbble.com/NataliaBalska">
      Natalia Balska
    </a>
    .`,
  },
  {
    question: "What is the code font in the book?",
    answer: `The font is <a class="underline" href="https://monolisa.dev">MonoLisa</a>`,
  },
  {
    question: " Can I get a discount if I am student?",
    answer: `Sure! Please fill in <a  class="underline" href="https://docs.google.com/forms/d/e/1FAIpQLSfT8XLlLVWclAYXFxEbGF2Ap5JJaqjY2eWz-L6QqlY7WVRpRQ/viewform?usp=sf_link">this form</a> and I will get back to you.`,
  },
  {
    question: " Can I get VAT discounted?",
    answer: ` YES! 
      Paddle will do that for you if you input a valid VAT
      ID. It's amazing!`,
  },
  {
    question: "What if I hate it?",
    answer: `Oh no, I will definitely give you a refund, email me at
  <a class="underline" href="mailto:sara@opinionatedreact.com ">
    sara@opinionatedreact.com
  </a>
  .`,
  },
  {
    question: "I bought the book on leanpub, do I have to buy it again?",
    answer: `Nop, before releasing today I updated the latest version to Leanpub as well so please login to your account to get it. Thank you for being an early supporter.`,
  },
  {
    question: " I have another question!",
    answer: `Sure! Email me at <a class="underline" href="mailto:sara@opinionatedreact.com
    ">sara@opinionatedreact.com</a> and let's talk about it.`,
  },
];

const FAQ = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-40 lg:pb-28 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 border-t-2 border-gray-100 pt-10">
          <dl className="md:grid md:grid-cols-2 md:gap-8">
            {data.map((faq) => (
              <div key={faq.question} className="mt-4 md:mt-0">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2">
                  <p
                    className="text-base leading-6 text-gray-500"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
