"use client";

import { SubmitContact } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholder-shuffle";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const [formSent, setFormSent] = useState(false);
  const placeholders = [
    "Hunter",
    "Beatbird",
    "Mai Tai",
    "Menos",
    "Ryan",
    "Jay",
    "Vaelken",
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Not Submitted",
      email: "",
      message: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue("name", e.target.value);
    form.trigger("name");
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // SubmitContact(values);
    form.reset();
    setFormSent(true);
  }

  return (
    <>
      {formSent ? (
        <div className="flex h-full w-full flex-col gap-2 rounded bg-primary-800/50 p-4 pb-8 shadow-md">
          <h2 className="text-yellow">Contact Us?</h2>
          <h3 className="text-lg">Your Message has been sent!</h3>
          <p>Someone on the team will get back to you as soon as they can!</p>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-4 rounded bg-primary-800/50 p-4 shadow-md"
          >
            <h2 className="text-yellow">Contact Us?</h2>
            <FormField
              control={form.control}
              name="name"
              render={() => (
                <FormItem>
                  <FormLabel className="text-lg font-normal">Name</FormLabel>
                  <FormControl>
                    <PlaceholdersAndVanishInput
                      placeholders={placeholders}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-normal">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@pawmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-normal">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="I have a question about..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="pink"
              className="ml-auto w-full sm:w-44"
            >
              Send Message
            </Button>
          </form>
        </Form>
      )}
    </>
  );
}
