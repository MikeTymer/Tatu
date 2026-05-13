export const WhyUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="bg-gradient-fire rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Experience That Builds <br/>Beyond The Obvious.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-2">Certified Expertise</h3>
                <p className="text-white/80 text-sm">Highly skilled engineers with international certifications and local experience.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Agile Methodology</h3>
                <p className="text-white/80 text-sm">Efficient project management ensuring on-time and within-budget delivery.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Aftercare Support</h3>
                <p className="text-white/80 text-sm">Dedicated support teams available to ensure your systems never fail.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
