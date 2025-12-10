export default function PrivacyPolicyPage() {
  return (
    <main className="bg-brand-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-blue mb-3">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-brand-slate mb-8">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="space-y-6 text-sm text-brand-slate leading-relaxed">
          <p>
            At CoreTech Agile Limited (“CoreTech Agile”, “we”, “us” or “our”),
            we respect your privacy and are committed to protecting the personal
            information you share with us. This Privacy Policy explains how we
            collect, use and safeguard your information when you interact with
            our website, services and communications.
          </p>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              1. Information we collect
            </h2>
            <p className="mb-2">
              We may collect and process the following types of information:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                <span className="font-medium">Contact information</span> such as
                your name, email address, phone number and organisation when you
                complete a form or contact us directly.
              </li>
              <li>
                <span className="font-medium">Usage data</span> such as pages
                visited, time on site, browser type and device information to
                help us improve our services.
              </li>
              <li>
                <span className="font-medium">Service-related information</span>{" "}
                that you provide in the context of consulting, training or
                delivery engagements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              2. How we use your information
            </h2>
            <p className="mb-2">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>To respond to enquiries and provide our services.</li>
              <li>
                To manage our relationship with you, including proposals,
                statements of work and ongoing engagements.
              </li>
              <li>
                To improve our website, content and service offerings based on
                how visitors use our site.
              </li>
              <li>
                To send relevant updates or insights where you have opted in to
                receive them.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              3. Legal bases for processing
            </h2>
            <p>
              Where applicable data protection laws require a legal basis, we
              process personal data on the basis of legitimate interest,
              performance of a contract, compliance with a legal obligation or
              your consent (where explicitly requested and provided).
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              4. How we share information
            </h2>
            <p className="mb-2">
              We do not sell your personal data. We may share information with:
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Trusted service providers who support the operation of our
                website, analytics, communications or project delivery.
              </li>
              <li>
                Professional advisers such as legal or financial consultants
                where reasonably necessary.
              </li>
              <li>
                Regulators, law enforcement or other authorities where we are
                required to do so by law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              5. Data retention
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfil
              the purposes outlined in this Policy, including any legal,
              accounting or reporting requirements. When data is no longer
              required, we will take reasonable steps to delete or anonymise it.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              6. Your rights
            </h2>
            <p className="mb-2">
              Depending on your location, you may have rights regarding your
              personal data, including:
            </p>
            <ul className="list-disc ml-5 space-y-1 mb-2">
              <li>Access to the personal data we hold about you.</li>
              <li>Correction of inaccurate or incomplete information.</li>
              <li>
                Deletion of your data, where there is no overriding reason for
                us to continue processing it.
              </li>
              <li>Restriction or objection to certain types of processing.</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the details
              below. We may need to verify your identity before acting on your
              request.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              7. Security
            </h2>
            <p>
              We implement reasonable technical and organisational measures to
              protect personal data from unauthorised access, loss or misuse.
              However, no method of transmission over the internet or electronic
              storage is completely secure, so we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              8. International transfers
            </h2>
            <p>
              Where information is transferred across borders, we take steps to
              ensure that appropriate safeguards are in place in accordance with
              applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              9. Updates to this Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technologies or legal requirements. Any
              updates will be posted on this page with a revised “Last updated”
              date.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-brand-dark mb-2">
              10. Contact us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your personal data, please contact us at:
            </p>
            <p className="mt-2">
              <span className="font-medium text-brand-dark">
                CoreTech Agile Limited
              </span>
              <br />
              Email:{" "}
              <span className="text-brand-blue">
                connect@coretechagile.com </span>
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
