import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cor | Agua Mineral para Distinguir tu Negocio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Agua Mineral, Agua Mineral Personalizada, Regalo Corporativo, Agua Personalizada, Merchandasing, Regalo personalizado, Agua con tu marca"
        />
        <meta
          name="description"
          content="Regala Agua Mineral pura y cristalina de la Cordillera de los Andes con la marca de tu Empresa."
        />
        <meta
          property="og:title"
          content="Cor | Agua Mineral para Distinguir tu Negocio"
        />
        <meta property="og:url" content="https://corchile.com" />
        <meta property="og:image" content="/CorOG.webp" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Regala Agua Mineral pura y cristalina de la Cordillera de los Andes con la marca de tu Empresa."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cor | Agua Mineral para Distinguir tu Negocio"
        />
        <meta
          name="twitter:description"
          content="Regala Agua Mineral pura y cristalina de la Cordillera de los Andes con la marca de tu Empresa."
        />
        <meta name="twitter:creator" content="@diorrego" />
        <meta name="twitter:image" content="/CorOG.webp" />
        <meta name="author" content="Diego Orrego" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://corchile.com" key="canonical" />
      </Head>
      <main className="relative w-screen h-screen overflow-hidden overscroll-none flex items-center justify-center">
        <Image
          src="/corlogo.png"
          alt="Logo de Cor"
          unoptimized
          width={500}
          height={500}
          className="absolute mx-auto top-4 w-24 h-24 object-cover"
        />
        <div className="absolute top-[9.5rem] sm:top-52 sm:mx-auto bg-black/50 sm:bg-black/30 text-white w-fit h-fit p-4 rounded-xl mx-4 flex flex-col space-y-8 max-w-[35rem]">
          <h1 className="font-bold text-4xl text-center w-fit h-hit">
            Agua Mineral para Distinguir tu Negocio
          </h1>
          <h2 className="font-medium text-xl text-center">
            Regala Agua Mineral pura y cristalina de la Cordillera de los Andes
            con la marca de tu Empresa.
          </h2>
        </div>
        <Image
          src="/corchile.webp"
          alt="Río Diguillín a las faldas de la Cordillera de Los Andes"
          unoptimized
          width={5184}
          height={4888}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 inset-x-0 bg-black text-white h-fit text-center p-1">
          <h2>hola@corchile.com</h2>
          <h2>Cor SpA | Sector Atacalco, Región del Ñuble, Chile</h2>
        </div>
      </main>
    </>
  );
}
