import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const REVIEWS_URL = "https://functions.poehali.dev/53420e3f-2d81-4642-ab27-f677363734ab";

interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  created_at: string;
}

const StarRating = ({ rating, onChange }: { rating: number; onChange?: (r: number) => void }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((s) => (
      <button
        key={s}
        type="button"
        onClick={() => onChange?.(s)}
        className={onChange ? "cursor-pointer" : "cursor-default"}
      >
        <Icon
          name="Star"
          size={18}
          className={s <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      </button>
    ))}
  </div>
);

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    fetch(REVIEWS_URL)
      .then((r) => r.json())
      .then((d) => setReviews(d.reviews || []))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch(REVIEWS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), text: text.trim(), rating }),
      });
      if (res.ok) {
        const newReview = await res.json();
        setReviews([newReview, ...reviews]);
        setName("");
        setText("");
        setRating(5);
        setShowForm(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500 mb-2">Отзывы</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Что говорят клиенты</h2>
          <p className="text-gray-600 mb-6">Реальные отзывы от жителей Анапы и района</p>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-black text-white hover:bg-gray-800 rounded-full px-6"
          >
            <Icon name="PenLine" size={16} className="mr-2" />
            Оставить отзыв
          </Button>
        </div>

        {submitted && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 text-center text-green-700 flex items-center justify-center gap-2">
            <Icon name="CheckCircle" size={18} />
            Спасибо за отзыв! Он уже виден на сайте.
          </div>
        )}

        {showForm && (
          <div className="mb-8 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Ваш отзыв</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Ваше имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Например, Ольга"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Оценка</label>
                <StarRating rating={rating} onChange={setRating} />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Текст отзыва</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Расскажите о своём опыте..."
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                  required
                />
              </div>
              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-black text-white hover:bg-gray-800 rounded-full px-6"
                >
                  {submitting ? "Отправляем..." : "Отправить"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="rounded-full bg-transparent"
                >
                  Отмена
                </Button>
              </div>
            </form>
          </div>
        )}

        {loading ? (
          <div className="text-center text-gray-400 py-8">Загружаем отзывы...</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {reviews.map((r) => (
              <div key={r.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-semibold text-sm">
                      {r.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium text-gray-900">{r.name}</span>
                  </div>
                  <StarRating rating={r.rating} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
