import { Link } from "react-router-dom";

const sections = [
  {
    id: 1,
    title: "Introduction",
    paragraphs: [
      'Welcome to PeakIELTS ("we", "our", "us").',
      'By accessing or using our website, products, or services, you agree to follow these Terms and Conditions ("Terms"). If you do not agree, please stop using our services immediately.',
      "PeakIELTS provides AI-powered tools for IELTS speaking practice, feedback, and training. We are not affiliated with Cambridge, British Council, or IDP.",
    ],
  },
  {
    id: 2,
    title: "Eligibility",
    paragraphs: ["You must be:"],
    bullets: [
      "At least 5 years old",
      "Legally able to agree to these Terms",
      "Using our services for lawful purposes only",
    ],
  },
  {
    id: 3,
    title: "Service Description",
    paragraphs: ["PeakIELTS offers:"],
    bullets: [
      "AI-based IELTS speaking simulations",
      "AI feedback, band estimation, grammar analysis, and coaching",
      "Access to personalized dashboards",
      "Subscription-based premium features",
    ],
    footer: "We do not guarantee any specific IELTS score.",
  },
  {
    id: 4,
    title: "Account Registration",
    paragraphs: [
      "To use premium features, you must create an account using email and password or Google authentication.",
      "You agree to:",
    ],
    bullets: [
      "Provide accurate information",
      "Not share your account with others",
      "Notify us immediately if unauthorized access occurs",
    ],
    footer: "We may suspend accounts that violate these Terms.",
  },
  {
    id: 5,
    title: "Payments & Subscriptions",
    paragraphs: [
      "Payments are processed securely through Paddle, our official payment partner.",
      "By subscribing, you authorize Paddle to charge your payment method. Subscription renewals occur automatically unless canceled. Refunds follow Paddle's Refund Policy. You are responsible for any fees from your bank or payment provider. If payment fails, access to premium features may be restricted.",
    ],
  },
  {
    id: 6,
    title: "No Official IELTS Affiliation",
    paragraphs: ["PeakIELTS is not affiliated with:"],
    bullets: ["IELTS", "Cambridge Assessment", "British Council", "IDP Australia"],
    footer: "Our AI predictions are estimates only and should not be considered official IELTS results.",
  },
  {
    id: 7,
    title: "Acceptable Use",
    paragraphs: ["You agree not to:"],
    bullets: [
      "Use the service to harm, spam, or harass others",
      "Reverse-engineer, copy, or resell the platform",
      "Misuse AI features for unethical purposes",
      "Attempt to breach security or gain unauthorized access",
    ],
    footer: "Violation may result in termination of your account.",
  },
  {
    id: 8,
    title: "AI Limitations & Disclaimer",
    paragraphs: [
      "Our AI provides feedback based on machine-learning models. We do not guarantee accuracy of band prediction, error-free responses, or perfect grammar evaluation. Use AI feedback as support, not as a substitute for human instruction.",
    ],
  },
  {
    id: 9,
    title: "Intellectual Property",
    paragraphs: [
      "All content, including website design, text, images, AI models, and branding, is owned by PeakIELTS and may not be reproduced without permission.",
      "You retain ownership of the content you upload (audio recordings, responses), but you give us permission to process it to improve your experience.",
    ],
  },
  {
    id: 10,
    title: "Privacy",
    paragraphs: [
      "Your data is handled according to our Privacy Policy (create a separate page). We do not sell your personal information.",
    ],
  },
  {
    id: 11,
    title: "Termination",
    paragraphs: [
      "We may suspend or terminate your account if you violate these Terms, we detect fraudulent behavior, or it is required by law.",
      "You may stop using the service at any time by deleting your account.",
    ],
  },
  {
    id: 12,
    title: "Limitation of Liability",
    paragraphs: ["We are not responsible for:"],
    bullets: ["Exam failure", "Data loss", "Service interruptions", "Inaccurate AI predictions"],
    footer: "Use the platform at your own risk.",
  },
  {
    id: 13,
    title: "Changes to Terms",
    paragraphs: [
      "We may update these Terms at any time. Continued use means you accept the updated version.",
    ],
  },
  {
    id: 14,
    title: "Contact Information",
    paragraphs: ["If you have questions, contact us at:"],
    bullets: ["your support email here", "pnethpriya2002@gmail.com"],
  },
];

const Terms = () => {
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
          <div className="text-sm text-muted-foreground">Template for your IELTS AI tutor website</div>
        </div>

        <div className="mb-10">
          <h1 className="text-4xl font-light tracking-tight md:text-5xl">Terms &amp; Conditions</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Please read these Terms and Conditions carefully before using PeakIELTS. By accessing or
            using our services, you agree to be bound by these Terms.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.id}
              className="rounded-2xl border border-border/30 bg-card/40 p-6 md:p-8"
            >
              <div className="mb-3 flex items-baseline gap-3">
                <span className="text-sm font-semibold text-neon-cyan">
                  {section.id.toString().padStart(2, "0")}
                </span>
                <h2 className="text-xl font-semibold text-foreground/90 md:text-2xl">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                {section.paragraphs?.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="ml-5 list-disc space-y-2">
                    {section.bullets.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.footer && <p className="text-sm text-foreground/80">{section.footer}</p>}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;
