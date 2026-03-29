import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SITE_URL = "https://masterfiksanapa-ru.ru/";

export default function QRPage() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-sm w-full text-center">
        <div className="text-2xl font-bold mb-1">МастерФикс</div>
        <p className="text-gray-500 text-sm mb-8">Отсканируйте QR-код, чтобы перейти на сайт</p>

        <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg inline-block mb-6">
          <QRCodeSVG
            value={SITE_URL}
            size={220}
            bgColor="#ffffff"
            fgColor="#000000"
            level="M"
          />
        </div>

        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-1">Адрес сайта:</p>
          <a
            href={SITE_URL}
            className="text-teal-600 font-medium hover:underline break-all"
            target="_blank"
            rel="noreferrer"
          >
            {SITE_URL}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            onClick={handlePrint}
            className="bg-black text-white hover:bg-gray-800 rounded-full w-full"
          >
            <Icon name="Printer" size={16} className="mr-2" />
            Распечатать
          </Button>
          <a href="/">
            <Button variant="outline" className="rounded-full w-full bg-transparent">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              На главную
            </Button>
          </a>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
        }
      `}</style>
    </div>
  );
}
