export default function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">
          <span className="text-blue-500 font-semibold uppercase">
            Contact
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Book Your First Session
          </h2>

          <p className="text-gray-300 mt-4">
            Start your fitness journey today. Fill out the form below and we'll get in touch.
          </p>
        </div>

        <form className="mt-12 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-white text-black outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-white text-black outline-none"
          />

          <textarea
            rows="5"
            placeholder="Tell us about your goals..."
            className="w-full p-4 rounded-lg bg-white text-black outline-none resize-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}