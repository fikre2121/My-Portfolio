import Layout from "../Components/site/Layout";
import PageHero from "../Components/site/PageHero";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you within 24 hours.");
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <Layout>
      <PageHero eyebrow="Get In Touch" title="Let's start a conversation." />
      <section className="container-page py-20 grid lg:grid-cols-3 gap-10">
        <div className="space-y-5">
          <Card icon={Mail} label="Email" value="hello@reeni.studio" />
          <Card icon={Phone} label="Phone" value="+1 (555) 010 — 4422" />
          <Card icon={MapPin} label="Studio" value="66 Brooklyn Ave, NY 3269" />
        </div>
        <form
          onSubmit={onSubmit}
          className="lg:col-span-2 rounded-3xl border border-border bg-card p-8 md:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Input label="Your Name" name="name" required />
            <Input label="Email" name="email" type="email" required />
          </div>
          <Input label="Subject" name="subject" required />
          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full rounded-2xl border border-border bg-background px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            disabled={sending}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-glow hover:opacity-95 transition disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Message"} <Send size={16} />
          </button>
        </form>
      </section>
    </Layout>
  );
};

const Card = ({ icon: Icon, label, value }: any) => (
  <div className="rounded-3xl border border-border bg-card p-7 hover:shadow-card transition">
    <div className="w-12 h-12 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center">
      <Icon size={20} />
    </div>
    <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mt-5">
      {label}
    </p>
    <p className="font-display text-xl font-bold mt-1">{value}</p>
  </div>
);

const Input = ({ label, ...props }: any) => (
  <div>
    <label className="block text-sm font-semibold mb-2">{label}</label>
    <input
      {...props}
      className="w-full rounded-full border border-border bg-background px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
);

export default Contact;
