import { motion } from 'framer-motion';

function Crew() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <main className="min-h-screen bg-white pt-[104px]">
      <section className="px-4 md:px-10 py-12 md:py-12">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[96px] md:text-[88px] lg:text-[96px] mb-12 md:mb-12 text-center"
            style={{
              fontFamily: '"Matter Regular", sans-serif',
              letterSpacing: '-0.02em',
              lineHeight: '100%',
              color: 'var(--color-black)',
            }}
          >
            Join the crew.
          </motion.h1>
          
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-[600px] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <label className="block mb-6">
              <p
                className="mb-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '18px',
                  letterSpacing: '-0.02em',
                  lineHeight: '135%',
                  color: 'var(--color-black)',
                }}
              >
                Name
              </p>
              <input
                type="text"
                required
                name="Name"
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '16px',
                  letterSpacing: '-0.02em',
                }}
              />
            </label>

            <label className="block mb-6">
              <p
                className="mb-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '18px',
                  letterSpacing: '-0.02em',
                  lineHeight: '135%',
                  color: 'var(--color-black)',
                }}
              >
                Email
              </p>
              <input
                type="email"
                required
                name="Email"
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '16px',
                  letterSpacing: '-0.02em',
                }}
              />
            </label>

            <label className="block mb-6">
              <p
                className="mb-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '18px',
                  letterSpacing: '-0.02em',
                  lineHeight: '135%',
                  color: 'var(--color-black)',
                }}
              >
                Portfolio URL (Optional)
              </p>
              <input
                type="url"
                name="Portfolio"
                placeholder="yourwebsite.com"
                className="w-full px-4 py-3 border border-gray-300 rounded"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '16px',
                  letterSpacing: '-0.02em',
                }}
              />
            </label>

            <label className="block mb-6">
              <p
                className="mb-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '18px',
                  letterSpacing: '-0.02em',
                  lineHeight: '135%',
                  color: 'var(--color-black)',
                }}
              >
                Twitter URL (Optional)
              </p>
              <input
                type="url"
                name="Twitter"
                placeholder="twitter.com/yourhandle"
                className="w-full px-4 py-3 border border-gray-300 rounded"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '16px',
                  letterSpacing: '-0.02em',
                }}
              />
            </label>

            <label className="block mb-6">
              <p
                className="mb-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '18px',
                  letterSpacing: '-0.02em',
                  lineHeight: '135%',
                  color: 'var(--color-black)',
                }}
              >
                Hourly rate
              </p>
              <select
                name="Rate"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '16px',
                  letterSpacing: '-0.02em',
                }}
              >
                <option value="" disabled selected>Select…</option>
                <option value="< $50/hr">&lt; $50/hr</option>
                <option value="$50-100/hr">$50-100/hr</option>
                <option value="$100-200/hr">$100-200/hr</option>
                <option value="$200+/hr">$200+/hr</option>
              </select>
            </label>

            <label className="block mb-6">
              <p
                className="mb-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '18px',
                  letterSpacing: '-0.02em',
                  lineHeight: '135%',
                  color: 'var(--color-black)',
                }}
              >
                Skills
              </p>
              <textarea
                required
                name="Skills"
                placeholder="Please list your expertise and passions"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded resize-none"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '16px',
                  letterSpacing: '-0.02em',
                }}
              />
            </label>

            <label className="block mb-6">
              <p
                className="mb-2"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '18px',
                  letterSpacing: '-0.02em',
                  lineHeight: '135%',
                  color: 'var(--color-black)',
                }}
              >
                Message
              </p>
              <textarea
                required
                name="Name"
                placeholder="Your message"
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded resize-none"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '16px',
                  letterSpacing: '-0.02em',
                }}
              />
            </label>

            <button
              type="submit"
              className="w-full py-4 rounded text-center"
              style={{
                fontFamily: '"Matter Regular", sans-serif',
                fontSize: '18px',
                letterSpacing: '-0.02em',
                color: 'var(--color-black)',
                backgroundColor: 'var(--color-yellow-green)',
              }}
            >
              Submit
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-10 py-6 md:py-6">
        <div>
          <h2
            className="text-[32px] md:text-[40px] lg:text-[32px]"
            style={{
              fontFamily: '"Matter Regular", sans-serif',
              letterSpacing: '-0.02em',
              lineHeight: '125%',
              color: 'var(--color-black)',
            }}
          >
            © Copyright ALDO Creative Inc. 2025.
          </h2>
        </div>
      </footer>
    </main>
  );
}

export default Crew;
