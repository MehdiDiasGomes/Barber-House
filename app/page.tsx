export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <section className="py-20 px-6 bg-gradient-to-b from-zinc-900 to-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Barber House</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Votre destination pour un rasage et une coupe de cheveux premium
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded transition">
            Prendre rendez-vous
          </button>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 dark:text-white">Nos Services</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-lg hover:shadow-lg transition">
              <h4 className="text-2xl font-bold mb-4 dark:text-white">Coupe de Cheveux</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Coupes modernes et classiques adaptées à votre style personnel.
              </p>
              <p className="font-bold text-amber-500">À partir de 25€</p>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-lg hover:shadow-lg transition">
              <h4 className="text-2xl font-bold mb-4 dark:text-white">Rasage Premium</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Rasage à l&apos;ancienne avec soin et attention particulière à votre peau.
              </p>
              <p className="font-bold text-amber-500">À partir de 20€</p>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-lg hover:shadow-lg transition">
              <h4 className="text-2xl font-bold mb-4 dark:text-white">Soins de la Barbe</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Modelage, taille et soins complets pour votre barbe.
              </p>
              <p className="font-bold text-amber-500">À partir de 15€</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 dark:text-white">À Propos</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            Chez Barber House, nous croyons que la coupe de cheveux et le rasage sont bien plus qu&apos;un service.
            C&apos;est un moment de détente et de soin personnel. Nos barbiers expérimentés vous offrent une expérience
            unique avec des techniques traditionnelles et modernes.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 dark:text-white">Nous Contacter</h3>
          <p className="text-lg mb-4 dark:text-gray-300">📍 123 Rue de la Coupe, Paris 75001</p>
          <p className="text-lg mb-4 dark:text-gray-300">📞 01 23 45 67 89</p>
          <p className="text-lg dark:text-gray-300">📧 contact@barberhouse.fr</p>
        </div>
      </section>

      <footer className="bg-zinc-950 dark:bg-black text-gray-300 py-8 text-center">
        <p>&copy; 2024 Barber House. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
