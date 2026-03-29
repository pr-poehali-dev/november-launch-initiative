import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Phone, Wrench, Clock, Shield, X, MapPin } from "lucide-react";
import OrderForm from "@/components/OrderForm";
import Reviews from "@/components/Reviews";

const Index = () => {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="bg-teal-500 text-white text-center text-sm py-2 font-medium tracking-wide">
        Мастер Фикс — Анапа и Анапский район
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold">МастерФикс</div>
          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <a href="#how-we-work" onClick={(e) => { e.preventDefault(); document.getElementById('how-we-work')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-gray-900">
              Как работаем
            </a>
            <a href="#reviews" onClick={(e) => { e.preventDefault(); document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-gray-900">
              Отзывы
            </a>
            <a href="#contacts" onClick={(e) => { e.preventDefault(); document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-gray-900">
              Контакты
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <a href="tel:+79933167884" className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-teal-500">
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">+7 993 316-78-84</span>
            <span className="md:hidden">Позвонить</span>
          </a>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6" onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}>
            Вызвать мастера
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center bg-black text-white text-sm px-4 py-2 rounded-full mb-8">
          <span className="bg-white text-black text-xs px-2 py-1 rounded-full mr-3">
            Быстро
          </span>
          Мастер приедет в течение 30 минут.
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
          Ремонт бытовой техники
          <br />
          на дому — быстро и{" "}
          <span className="text-teal-500">с гарантией</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
          Сломалась стиральная машина, холодильник или посудомойка? Наши мастера
          диагностируют и отремонтируют любую технику прямо у вас дома — без лишних
          хлопот.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3" onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}>
            <Phone className="w-4 h-4 mr-2" />
            Оставить заявку
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Получить консультацию
          </Button>
        </div>
      </section>

      {/* Trust Logos Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-12 opacity-60">
            <div className="text-lg font-medium">Samsung</div>
            <div className="text-lg font-bold border-b-2 border-black pb-1">
              LG
            </div>
            <div className="text-2xl font-bold">Bosch</div>
            <div className="text-lg font-bold">Indesit</div>
            <div className="text-lg font-medium">Whirlpool</div>
          </div>
        </div>
      </section>

      <Reviews />

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">Наши услуги</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ремонтируем любую технику
          </h2>
          <p className="text-gray-600 mb-12">
            Опытные мастера с инструментом и запчастями — решим проблему за
            один выезд.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" className="rounded-full bg-transparent">
              Стиральные машины
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Холодильники
            </Button>
            <Button className="bg-black text-white rounded-full">
              Посудомойки
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Духовые шкафы
            </Button>
            <Button variant="outline" className="rounded-full bg-transparent">
              Кондиционеры
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-we-work" className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ремонт, который
              <br />
              делается правильно
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Диагностика бесплатно при выполнении ремонта</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Оригинальные запчасти от производителей</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Гарантия на работу до 12 месяцев</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span>Работаем без выходных, с 8:00 до 22:00</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-gray-100 rounded-2xl p-4 shadow-lg">
              <div className="bg-white rounded-xl h-full p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-medium text-gray-500">Заявка #1042</div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-600">В работе</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <div className="text-sm font-bold mb-1">Стиральная машина LG</div>
                  <div className="text-xs text-gray-500">Не сливает воду</div>
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                      <Clock className="w-3 h-3 text-teal-600" />
                    </div>
                    <div className="text-xs text-gray-600">Мастер едет — 14:30</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-3 h-3 text-green-600" />
                    </div>
                    <div className="text-xs text-gray-600">Гарантия 6 месяцев</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Wrench className="w-3 h-3 text-blue-600" />
                    </div>
                    <div className="text-xs text-gray-600">Замена помпы — 1 900 ₽</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 mt-auto">
                  <div className="text-xs font-medium mb-1">Адрес выезда:</div>
                  <div className="text-xs text-gray-500">
                    ул. Ленина 42, кв. 18
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16 px-6 bg-gray-50" id="order">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm text-gray-500 mb-2">Заявка</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Вызвать мастера на дом
            </h2>
            <p className="text-gray-600">
              Заполните форму — перезвоним в течение 15 минут и согласуем удобное время.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <OrderForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">МастерФикс</div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-gray-900">
              Условия использования
            </a>
            <button onClick={() => setShowContacts(true)} className="hover:text-gray-900">
              Контакты
            </button>
            <a href="/qr" className="hover:text-gray-900">
              QR-код сайта
            </a>
          </div>
        </div>
      </footer>

      {/* Contacts Modal */}
      {showContacts && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4" onClick={() => setShowContacts(false)}>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowContacts(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Контакты</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm text-gray-500 mb-0.5">Телефон</div>
                  <a href="tel:+79933167884" className="text-lg font-semibold text-gray-900 hover:text-teal-500">
                    +7 993 316-78-84
                  </a>
                  <div className="text-sm text-gray-500">Иван Владимирович</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm text-gray-500 mb-0.5">Адрес</div>
                  <div className="text-gray-900 font-medium">г. Анапа, ул. Владимирская, 105</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;