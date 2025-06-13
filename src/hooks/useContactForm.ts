import { useState, ChangeEvent, FormEvent } from "react";

type FormState = {
  nombre: string;
  correo: string;
  telefono: string;
};

export default function useContactForm() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    correo: "",
    telefono: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Simular envío (reemplazá con API real si tenés backend)
    console.log("Formulario enviado:", form);
    setEnviado(true);

    // Reset del formulario luego de unos segundos (opcional)
    setTimeout(() => {
      setForm({ nombre: "", correo: "", telefono: "" });
      setEnviado(false);
    }, 4000);
  };

  return {
    form,
    enviado,
    handleChange,
    handleSubmit,
  };
}
