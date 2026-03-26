import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold">НотоПлан</div>
          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Начать
            </a>
            <a href="#" className="hover:text-gray-900">
              Продукты
            </a>
            <a href="#" className="hover:text-gray-900">
              Решения
            </a>
            <a href="#" className="hover:text-gray-900">
              Сравнение
            </a>
            <a href="#" className="hover:text-gray-900">
              Цены
            </a>
            <a href="#" className="hover:text-gray-900">
              Вопросы
            </a>
          </nav>
        </div>
        <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6">
          Тарифы
        </Button>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 max-w-4xl mx-auto">
        {/* New Badge */}
        <div className="inline-flex items-center bg-black text-white text-sm px-4 py-2 rounded-full mb-8">
          <span className="bg-white text-black text-xs px-2 py-1 rounded-full mr-3">
            Новинка
          </span>
          Ваши заметки станут великолепными.
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
          Приложение для заметок,
          <br />
          работающее как{" "}
          <span className="text-teal-500">Органайзер</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
          Отличные заметки заслуживают системы, которая делает все: от списков
          дел для организованной жизни до запуска вашего стартапа быстрее
          конкурентов.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3">
            <Star className="w-4 h-4 mr-2" />
            Получить приглашение
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-8 py-3 bg-transparent"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Записаться на звонок
          </Button>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-lg font-medium">Старт</div>
            <div className="text-lg font-bold border-b-2 border-black pb-1">
              Запуск
            </div>
            <div className="text-2xl font-bold">N</div>
            <div className="text-lg font-bold">Итерация</div>
            <div className="text-lg font-medium">Масштабирование</div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden">
            <img
              src="/professional-headshot.png"
              alt="Отзыв"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Быстрая и простая настройка
          </h3>
          <p className="text-gray-600 mb-2">
            "Мы масштабировались до тысяч заметок ежедневно. Панель управления
            приложения — единственное, что помогает нам оставаться в здравом
            уме."
          </p>
          <p className="text-sm text-gray-500">
            Михаил из НотоПлан, официальный представитель
          </p>
        </div>
      </section>

      {/* Branding Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">Брендинг</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Настройте весь опыт под себя
          </h2>
          <p className="text-gray-600 mb-12">
            От заметки до страницы и организованной жизни — сосредоточьтесь на
            росте.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="rounded-full bg-transparent">
              Магазин
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Оформление
            </Button>
            <Button className="bg-black text-white rounded-full">
              Почта
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Рассылка
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Сканер
            </Button>
          </div>
        </div>
      </section>

      {/* Email Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Письма, которые
              <br />
              отражают вас
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Добавьте ваш логотип и соцсети</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Напишите собственное благодарственное сообщение</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Ваше имя, ваш email отправителя</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span>Интеграция с социальными сетями</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-gray-100 rounded-2xl p-4 shadow-lg">
              <div className="bg-white rounded-xl h-full p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs">9:19</div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="text-sm font-medium mb-2">
                  Ваш проект с Михаилом уже в приложении!
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  21 заметка в списке дел
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex-1">
                  <div className="text-lg font-bold mb-2">организовано</div>
                  <div className="text-sm mb-2">
                    Ваш проект с Михаилом уже в приложении!
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-pink-200 rounded-full"></div>
                    <div className="text-xs">
                      Создайте первую заметку и организуйте
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">НотоПлан</div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-gray-900">
              Условия использования
            </a>
            <a href="#" className="hover:text-gray-900">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
