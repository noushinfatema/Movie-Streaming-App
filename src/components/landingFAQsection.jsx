const faqs = [
  "What is Netflix?",
  "How much does Netflix cost?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on Netflix?",
  "Is Netflix good for kids?",
];

const LandingFAQSection = () => {
  return (
    <section className="bg-black px-6 py-16 text-white md:px-14">
      <h2 className="mb-8 text-4xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center justify-between bg-[#2d2d2d] px-6 py-6 hover:bg-[#414141]"
          >
            <span className="text-xl">{faq}</span>
            <span className="text-4xl font-light">+</span>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col justify-center gap-3 md:flex-row">
          <input
            type="email"
            placeholder="Email address"
            className="w-80 rounded border border-gray-500 bg-black/50 px-4 py-4"
          />

          <button className="rounded bg-red-600 px-8 py-4 font-semibold hover:bg-red-700">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingFAQSection;