
"use client";
import { useState } from "react";

const messages = {'en': "We are currently renewing our platform for our valued customers. We'll be back soon.", 'tr': 'Platformumuzu siz değerli müşterilerimiz için yeniliyoruz. Yakında tekrar buradayız.', 'ar': 'نقوم حاليًا بتجديد منصتنا لعملائنا الكرام. سنعود قريبًا.', 'de': 'Wir erneuern derzeit unsere Plattform für unsere geschätzten Kunden. Wir sind bald zurück.', 'fr': 'Nous rénovons actuellement notre plateforme pour nos précieux clients. Nous serons bientôt de retour.', 'it': 'Stiamo attualmente rinnovando la nostra piattaforma per i nostri clienti stimati. Torneremo presto.', 'es': 'Actualmente estamos renovando nuestra plataforma para nuestros valiosos clientes. Volveremos pronto.', 'pt': 'Estamos atualmente renovando nossa plataforma para nossos valiosos clientes. Estaremos de volta em breve.', 'zh': '我们正在为尊贵的客户更新平台。我们很快就会回来。'};

export default function Home() {
  const [lang, setLang] = useState("en");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="absolute top-4 right-4">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
          <option value="ar">العربية</option>
          <option value="de">Deutsch</option>
          <option value="fr">Français</option>
          <option value="it">Italiano</option>
          <option value="es">Español</option>
          <option value="pt">Português</option>
          <option value="zh">中文</option>
        </select>
      </div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Velmondo</h1>
      </div>
      <p className="text-center text-lg max-w-xl">{messages[lang]}</p>
    </main>
  );
}
