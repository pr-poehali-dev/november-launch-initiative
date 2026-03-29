CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  text TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO reviews (name, text, rating) VALUES
('Ольга', 'Стиральная машина перестала отжимать вечером в пятницу. Уже на следующем день мастер приехал, нашёл причину и всё исправил. Дал гарантию на 6 месяцев.', 5),
('Андрей', 'Холодильник перестал морозить. Мастер приехал быстро, заменил компрессор. Работает отлично уже полгода.', 5),
('Наталья', 'Вызвала мастера по поломке посудомойки — приехал в тот же день, всё объяснил и починил за час. Рекомендую!', 5);
