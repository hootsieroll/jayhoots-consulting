export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border text-center">
      <div className="max-w-5xl mx-auto px-10">
        <div className="bg-bg2 border border-border rounded-3xl py-20 px-10 max-w-2xl mx-auto">
          <div className="section-label justify-center">Let&apos;s Talk</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
            Ready to build something great?
          </h2>
          <p className="text-muted text-base max-w-[44ch] mx-auto leading-relaxed mb-8">
            Whether you&apos;re pre-product, scaling fast, or tangled in tech debt — let&apos;s spend 30 minutes
            figuring out if I can help.
          </p>
          <a href="mailto:jayhoots@gmail.com" className="btn-primary">
            Book a Discovery Call
          </a>
          <span className="block text-xs text-muted2 mt-5">
            Or email me at{" "}
            <a href="mailto:jayhoots@gmail.com" className="text-accent hover:underline">
              jayhoots@gmail.com
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
