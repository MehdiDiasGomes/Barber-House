import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero/bg.jpg"
        alt="Barber House Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <p className="text-sm uppercase tracking-widest text-gray-300 mb-6">
          Bienvenue à Barber House
        </p>

        <h1 className="mb-4 leading-tight">
          Meilleure <span className="bg-amber-500 text-black px-3 py-1 inline-block">Coupe</span>
        </h1>

        <h2 className="mb-8 text-gray-200">
          Pour une Allure Professionnelle
        </h2>

        <p className="text-base lg:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Découvrez nos services de barberie haut de gamme. Expérience des techniques traditionnelles combinées avec les styles modernes,
          livrés par des professionnels expérimentés dédiés à votre satisfaction.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-10 uppercase tracking-widest transition">
            Prendre Rendez-vous
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-10 uppercase tracking-widest transition">
            Tous les Services
          </button>
        </div>
      </div>
    </section>
  );
}
