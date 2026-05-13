export const VisionMission = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container grid md:grid-cols-2 gap-16">
        <div className="p-10 border rounded-[3rem] bg-background/50">
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            To be the foremost provider of transformative technology and engineering 
            solutions that define the future of infrastructure in East Africa.
          </p>
        </div>
        <div className="p-10 border rounded-[3rem] bg-background/50">
          <h2 className="text-3xl font-bold mb-6 text-accent">Our Mission</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            To deliver innovative, reliable, and sustainable engineering services 
            that empower our clients and enhance the lives of the communities we serve.
          </p>
        </div>
      </div>
    </section>
  );
};
