import { useEffect, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { collection, query, where, getDocs, limit, orderBy } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "@/lib/firebase";
import { motion } from "motion/react";
import { Star } from "lucide-react";

interface Review {
  id: string;
  name: string;
  company?: string;
  content: string;
  rating?: number;
}

const fallbackTestimonials: Review[] = [
  {
    id: "fb1",
    name: "John Kamau",
    company: "Nakuru Tech Hub",
    content: "Tatu Enterprises transformed our surveillance infrastructure with state-of-the-art AI-driven systems. Their professionalism and technical expertise are unmatched.",
    rating: 5
  },
  {
    id: "fb2",
    name: "Sarah Mwangi",
    company: "East Africa Logistics",
    content: "The biometric systems installed by Tatu have drastically improved our security protocols. Highly recommend their software engineering services.",
    rating: 5
  },
  {
    id: "fb3",
    name: "David Ochieng",
    company: "Smart Cities Initiative",
    content: "Working with Tatu on urban surveillance was a game changer. They don't just deliver software; they deliver future-proof solutions.",
    rating: 4
  }
];

export const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const path = "reviews";
      try {
        const q = query(
          collection(db, path), 
          where("approved", "==", true),
          orderBy("createdAt", "desc"),
          limit(5)
        );
        const snapshot = await getDocs(q);
        const fetchedReviews = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Review[];
        
        if (fetchedReviews.length > 0) {
          setReviews(fetchedReviews);
        } else {
          setReviews(fallbackTestimonials);
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, path);
        setReviews(fallbackTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="py-24 bg-accent/5 overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Trusted by leading organizations across East Africa to deliver reliable and innovative technological solutions.
          </motion.p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-none shadow-md bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < (testimonial.rating || 5) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`} 
                          />
                        ))}
                      </div>
                      <blockquote className="flex-grow">
                        <p className="text-muted-foreground mb-6 line-clamp-4 italic">
                          "{testimonial.content}"
                        </p>
                      </blockquote>
                      <div className="flex items-center gap-4 mt-auto">
                        <Avatar className="h-12 w-12 border">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} />
                          <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
