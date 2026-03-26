import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const SEND_ORDER_URL = "https://functions.poehali.dev/e73f8d3e-b58e-4ef0-97b4-7e9f1da0618d";

const APPLIANCES = [
  "Стиральная машина",
  "Холодильник",
  "Посудомоечная машина",
  "Духовой шкаф",
  "Кондиционер",
  "Другое",
];

export default function OrderForm() {
  const [form, setForm] = useState({ name: "", phone: "", appliance: "", problem: "", address: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(SEND_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", appliance: "", problem: "", address: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Icon name="CheckCircle" size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">Заявка принята!</h3>
        <p className="text-gray-500 mb-6">Мастер свяжется с вами в ближайшее время.</p>
        <Button variant="outline" className="rounded-full" onClick={() => setStatus("idle")}>
          Отправить ещё заявку
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Ваше имя *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Иван Петров"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Телефон *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+7 900 000-00-00"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="appliance">Тип техники</Label>
        <select
          id="appliance"
          name="appliance"
          value={form.appliance}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Выберите технику</option>
          {APPLIANCES.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="address">Укажите адрес <span className="text-red-500">*</span></Label>
        <Input
          id="address"
          name="address"
          placeholder="Улица, дом, квартира"
          value={form.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="problem">Опишите проблему</Label>
        <Textarea
          id="problem"
          name="problem"
          placeholder="Например: не сливает воду, не охлаждает, не включается..."
          value={form.problem}
          onChange={handleChange}
          rows={3}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-500">Ошибка отправки. Попробуйте позже или позвоните нам.</p>
      )}
      <Button
        type="submit"
        className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-3"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <Icon name="Loader2" size={18} className="animate-spin" />
            Отправляем...
          </span>
        ) : (
          "Вызвать мастера"
        )}
      </Button>
      <p className="text-xs text-center text-gray-400">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}