export default function TermsPage() {
  return (
    <main className="bg-brand-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-blue mb-3">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-brand-slate mb-8">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="space-y-6 text-sm text-brand-slate leading-relaxed">
          <p>
            These Terms &amp; Conditions (“Terms”) govern your use of the
            CoreTech Agile Limited (“CoreTech Agile”, “we”, “us” or “our”)
            website and any services, content or materials made available
            through it. By accessing or using this site, you agree to be bound
            by these Terms.
          </p>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              1. Use of the website
            </h2>
            <p>
              The information on this website is provided for general
              information purposes only and does not constitute professional
              advice. You agree not to misuse the site, interfere with its
              operation, attempt unauthorised access or engage in any activity
              that could damage our systems or reputation.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              2. Professional services
            </h2>
            <p>
              Any consulting, training or delivery services provided by CoreTech
              Agile are governed by the specific contract, statement of work or
              proposal agreed with you. In the event of any conflict, the terms
              of that agreement will prevail over these website Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              3. Intellectual property
            </h2>
            <p className="mb-2">
              Unless stated otherwise, all content on this website, including
              text, graphics, logos, icons and layouts, is the property of
              CoreTech Agile or its licensors.
            </p>
            <p>
              You may view and download content for your own internal use, but
              you may not reproduce, distribute or create derivative works from
              any part of this site without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              4. Confidentiality
            </h2>
            <p>
              Information you share with us in the context of potential or
              active engagements may be treated as confidential subject to the
              terms of any applicable agreement. You should not provide
              sensitive or confidential information through this website except
              via agreed secure channels.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              5. Third-party links
            </h2>
            <p>
              This site may contain links to third-party websites for your
              convenience. We do not control and are not responsible for the
              content, security or privacy practices of those sites. Following
              any such links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              6. Limitation of liability
            </h2>
            <p className="mb-2">
              While we aim to keep information on this site accurate and
              up-to-date, it is provided “as is” without any warranty, express
              or implied. To the fullest extent permitted by law, we exclude all
              liability for any loss or damage arising from your use of or
              reliance on this site.
            </p>
            <p>
              Nothing in these Terms limits liability that cannot be excluded
              under applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              7. Changes to these Terms
            </h2>
            <p>
              We may update these Terms from time to time. Any changes will be
              posted on this page with a revised “Last updated” date. Continued
              use of the site after changes are made constitutes acceptance of
              the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              8. Governing law
            </h2>
            <p>
              These Terms and any dispute or claim arising out of or in
              connection with them shall be governed by and construed in
              accordance with the laws of the jurisdiction in which CoreTech
              Agile Limited is established, unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms &amp; Conditions,
              please contact:
            </p>
            <p className="mt-2">
              <span className="font-medium text-brand-dark">
                CoreTech Agile Limited
              </span>
              <br />
              Email:{" "}
              <span className="text-brand-blue">
                connect@coretechagile.com
              </span>
              <br />
              Mobile:{" "}<span className="text-brand-blue">
                +233 262610089
              </span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
