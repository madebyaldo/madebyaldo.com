import { motion } from 'framer-motion';

function Clients() {
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
            Start a project.
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
                Website (Optional)
              </p>
              <input
                type="url"
                name="Website"
                placeholder="Your website"
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
                Company type
              </p>
              <select
                name="Location"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '16px',
                  letterSpacing: '-0.02em',
                }}
              >
                <option value="" disabled selected>Select…</option>
                <option value="Early Stage Startup">Early Stage Startup</option>
                <option value="Growing Brand">Growing Brand</option>
                <option value="Agency">Agency</option>
                <option value="Solo Entrepreneur">Solo Entrepreneur</option>
                <option value="Other">Other</option>
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
                Budget
              </p>
              <select
                name="Location"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded"
                style={{
                  fontFamily: '"Matter Regular", sans-serif',
                  fontSize: '16px',
                  letterSpacing: '-0.02em',
                }}
              >
                <option value="" disabled selected>Select…</option>
                <option value="25-50k">25-50k</option>
                <option value="50-100k">50-100k</option>
                <option value="100k+">100k+</option>
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

export default Clients;
