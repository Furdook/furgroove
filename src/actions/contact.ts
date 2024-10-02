"use server";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export async function SubmitContact(form: ContactForm) {
  fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: "service_bern45r",
      template_id: "template_17zh1yb",
      user_id: process.env.EMAILJS_KEY,
      template_params: {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    }),
  });
}
