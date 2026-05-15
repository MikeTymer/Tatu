import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db, handleFirestoreError, OperationType } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Star } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().optional(),
  content: z.string().min(10, "Review must be at least 10 characters."),
  rating: z.number().min(1).max(5),
});

export function ReviewForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(5);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      content: "",
      rating: 5,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const path = "reviews";
    try {
      await addDoc(collection(db, path), {
        ...values,
        approved: true, // Self-approve for immediate feedback
        createdAt: serverTimestamp(),
      });
      
      toast({
        title: "Review Published!",
        description: "Thank you! Your feedback is now live on our reviews page.",
      });
      form.reset();
      setRating(5);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-xl shadow-lg border">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Write a Review</h3>
          <p className="text-sm text-muted-foreground">Share your experience with Tatu Enterprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company / Affiliation</FormLabel>
                <FormControl>
                  <Input placeholder="Company Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="rating"
          render={() => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setRating(i);
                      form.setValue("rating", i);
                    }}
                    className="focus:outline-none"
                  >
                    <Star 
                      className={`w-6 h-6 ${i <= rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`} 
                    />
                  </button>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review Content</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us what you think..." 
                  className="min-h-[120px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </Form>
  );
}
