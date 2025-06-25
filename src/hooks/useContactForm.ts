import { useState, ChangeEvent, FormEvent } from "react";

type FormState = { name: string; email: string; phone: string };

export default function useContactForm() {
  const [form, setForm]   = useState<FormState>({ name: "", email: "", phone: "" });
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error ?? "Error al enviar datos");
      }

      setSent(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { form, sent, error, loading, handleChange, handleSubmit };
}
