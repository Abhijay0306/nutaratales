export default function Newsletter() {
  return (
    <section className="bg-light/30 rounded-2xl p-8 md:p-12 text-center my-12 mx-auto max-w-4xl border border-light/50">
      <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-dark">Join the Sustainable Living Movement</h2>
      <p className="text-text/80 max-w-lg mx-auto mb-8">
        Get weekly tips on low-energy cooking, zero-waste habits, and our latest eco-friendly recommendations directly to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input 
          type="email" 
          placeholder="Your email address" 
          aria-label="Email Address"
          required
          className="flex-1 px-4 py-3 rounded-md border border-light focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background"
        />
        <button 
          type="submit" 
          className="bg-primary hover:bg-dark text-background font-medium px-6 py-3 rounded-md transition-colors"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-text/60 mt-4">We respect your privacy. No spam.</p>
    </section>
  );
}
