import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "1 Konsep Desain Logo",
  "Revisi max 1 kali",
  "File HD(JPG/PNG/PDF)",
  "File Master EPS(CDR/AI)",
];

const Tampilan = () => {
  return (
    <div className="bg-gradient-to-tr from-[#0F172A] from-60% via-[#18334F] via-80% to-[#0F172A] to-90% py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 md:-mt-12 lg:-mt-10">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Harga Spesial
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Dapatkan desain grafis profesional dengan harga terjangkau, revisi
            sepuasnya, dan hasil cepat untuk meningkatkan citra bisnis Anda!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight">
              Lifetime membership
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-400">
              Hanya dengan 120K, Anda sudah mendapatkan berbagai layanan desain
              grafis, termasuk desain logo profesional!
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                Dapat apa aja?
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-400 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-indigo-400"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Bayar sekali, miliki selamanya
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    Rp.120
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    .000
                  </span>
                </p>
                <a
                  href="https://wa.me/6283112080715"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Dapatkan Sekarang
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Nikamti hasil Desain yang berkualitas dari Grafistix
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tampilan;
