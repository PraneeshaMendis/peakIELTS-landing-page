import { Link } from "react-router-dom";

const sections = [
  {
    title: "Introduction",
    paragraphs: [
      "This Privacy Policy explains how PeakIELTS collects, uses, and protects your information when you use our website, products, or services.",
      "By using PeakIELTS, you agree to this policy. If you do not agree, please discontinue using our services.",
    ],
  },
  {
    title: "Information We Collect",
    bullets: [
      "Account details you provide (name, email, password, or Google authentication info)",
      "Practice data you generate (audio recordings, responses, scores, feedback)",
      "Usage and device data (browser type, IP address, log data, cookies)",
      "Payment details handled securely by our payment partner (we do not store full card data)",
    ],
  },
  {
    title: "How We Use Your Information",
    bullets: [
      "Provide and improve AI speaking practice and feedback",
      "Maintain your account, dashboards, and progress tracking",
      "Process payments for subscriptions and manage billing",
      "Improve product performance, security, and user experience",
      "Communicate updates, service notices, and support responses",
    ],
  },
  {
    title: "How We Share Information",
    paragraphs: [
      "We do not sell your personal data.",
      "We may share necessary data with trusted providers (e.g., payment processing, hosting, analytics) to operate the service, always under appropriate safeguards.",
    ],
  },
  {
    title: "Data Security & Retention",
    bullets: [
      "We use reasonable technical and organizational measures to protect your data.",
      "We retain data only as long as needed for the purposes outlined here or as required by law.",
    ],
  },
  {
    title: "Your Choices",
    bullets: [
      "You may update or delete your account information.",
      "You may request deletion of your practice data, subject to legal or operational requirements.",
      "You can manage cookie preferences in your browser settings.",
    ],
  },
  {
    title: "Children",
    paragraphs: [
      "PeakIELTS is intended for users at least 5 years old. If we learn we have collected data from a younger child without consent, we will delete it.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy. Continued use after updates means you accept the revised policy.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "If you have questions about privacy, contact us at:",
      "pnethpriya2002@gmail.com",
    ],
  },
];

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-neon-cyan"
          >
            Back to home
          </Link>
          <div className="text-sm text-muted-foreground">Privacy Policy</div>
        </div>

        <div className="mb-10">
          <h1 className="text-4xl font-light tracking-tight md:text-5xl">Privacy Policy</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            How PeakIELTS collects, uses, and protects your information.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, idx) => (
            <section
              key={idx}
              className="rounded-2xl border border-border/30 bg-card/40 p-6 md:p-8"
            >
              <div className="mb-3 flex items-baseline gap-3">
                <span className="text-lg font-semibold text-neon-cyan">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <h2 className="text-xl font-semibold text-foreground/90 md:text-2xl">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                {section.paragraphs?.map((text, pIdx) => (
                  <p key={pIdx}>{text}</p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="ml-5 list-disc space-y-2">
                    {section.bullets.map((item, bIdx) => (
                      <li key={bIdx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Privacy;
