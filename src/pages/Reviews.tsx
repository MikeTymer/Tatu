import { Navbar } from "@/components/layout/Navbar";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { SEO } from "@/components/common/SEO";
import { ReviewForm } from "@/components/common/ReviewForm";
import { useEffect, useState } from "react";
import { db, handleFirestoreError, OperationType } from "@/lib/firebase";
import { collection, query, where, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Review {
  id: string;
  name: string;
  company?: string;
  content: string;
  rating?: number;
  createdAt: Timestamp;
}

const ReviewsPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const path = "reviews";
    const q = query(
      collection(db, path),
      where("approved", "==", true),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedReviews = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[];
      setReviews(fetchedReviews);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <SEO 
        title="Client Reviews"
        description="Read what our clients have to say about Tatu Enterprises and submit your own feedback."
        canonical="/reviews"
      />
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold tracking-tight mb-6"
              >
                Client Feedback
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground"
              >
                We value your input. See how we've helped others and share your own experience.
              </motion.p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 space-y-8">
                <h2 className="text-2xl font-semibold mb-6">Latest Reviews</h2>
                
                {loading ? (
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-40 rounded-xl bg-accent/10 animate-pulse" />
                    ))}
                  </div>
                ) : reviews.length === 0 ? (
                  <div className="text-center py-12 border rounded-xl bg-accent/5">
                    <p className="text-muted-foreground">No reviews yet. Be the first to review us!</p>
                  </div>
                ) : (
                  reviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="border-none shadow-sm bg-background/50">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <Avatar className="h-10 w-10 border">
                              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`} />
                              <AvatarFallback>{review.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold text-sm">{review.name}</p>
                              {review.company && <p className="text-xs text-muted-foreground">{review.company}</p>}
                            </div>
                            <div className="ml-auto flex gap-0.5">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-3.5 h-3.5 ${i < (review.rating || 5) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {review.content}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))
                )}
              </div>

              <div className="lg:col-span-2">
                <div className="sticky top-24">
                  <ReviewForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactFooter />
      <WhatsAppButton />
    </main>
  );
};

export default ReviewsPage;
