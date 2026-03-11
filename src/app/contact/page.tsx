import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Nutara Tales.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">Contact Us</h1>
      <p className="text-lg text-text/80 mb-12">
        Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-2xl text-dark mb-4">Get in Touch</h2>
          <p className="mb-6 text-text/80 leading-relaxed">
            Fill out the form, and we&apos;ll get back to you as soon as possible. For partnership inquiries or media requests, you can also reach us directly via email.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-1">Email</h3>
              <a href="mailto:hello@nutaratales.com" className="text-primary hover:text-dark transition-colors">
                hello@nutaratales.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-bold text-dark uppercase tracking-wider mb-1">Social</h3>
              <p className="text-text/80">Follow our journey on social media to stay updated with the latest eco-friendly tips.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-light/50 shadow-sm">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-4 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-4 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                className="w-full px-4 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-dark text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
