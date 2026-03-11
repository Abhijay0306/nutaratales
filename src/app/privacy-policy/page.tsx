import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and Affiliate Disclosure for Nutura Tales.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg prose-green max-w-none text-text">
        <p className="text-sm text-text/60 mb-8">Last updated: March 2026</p>
        
        <p>
          At Mutual Retails, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Mutual Retails and how we use it.
        </p>

        <h2 className="font-serif text-2xl text-dark mt-10 mb-4">Cookies and Web Beacons</h2>
        <p>
          Like any other website, Nutura Tales uses &quot;cookies&quot;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
        </p>

        <h2 className="font-serif text-2xl text-dark mt-10 mb-4">Analytics</h2>
        <p>
          We may use third-party Service Providers to monitor and analyze the use of our Service. These providers use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
        </p>

        <h2 className="font-serif text-2xl text-dark mt-10 mb-4">Affiliate Disclosure</h2>
        <p>
          Nutura Tales is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and affiliated sites.
        </p>
        <p>
          When you click on links to various merchants on this site and make a purchase, this can result in this site earning a commission. Affiliate programs and affiliations include, but are not limited to, the Amazon Associate network.
        </p>
        <div className="bg-light/20 p-4 border-l-4 border-primary rounded-r-md mt-4 text-sm text-dark/80">
          <strong>Important Note:</strong> The inclusion of affiliate links does not influence the editorial content, product reviews, or recommendations on Mutual Retails. We only recommend products we genuinely believe provide value to our readers.
        </div>

        <h2 className="font-serif text-2xl text-dark mt-10 mb-4">Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
      </div>
    </div>
  );
}
