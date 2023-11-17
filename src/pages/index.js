import Image from "next/image";
import testImg from "../assets/Header.png";
import yellowShape from "../assets/yellow.png";
import grayShape from "../assets/gray.png";
import mobile from "../assets/mobile.png";
import bowl from "../assets/Bowl.png";
import bin from "../assets/bin.png";

export default function Home() {
  return (
    <div>
      {/* section 1 */}
      <div className="px-0 md:px-4 overflow-hidden">
        <div className="relative">
          {/* header */}
          <Image
            src={testImg}
            width={"100vw"}
            height={100}
            layout="responsive"
            alt="test"
          ></Image>
          {/* the patter image */}
          <div
            className="absolute 2xl:-right-32 2xl:-bottom-48 lg:-right-32 lg:-bottom-40 md:-right-28 md:-bottom-24 -right-12 -bottom-20 2xl:w-[590px] 2xl:h-[430px] lg:w-[410px] lg:h-[300px]
          md:w-[310px] md:h-[260px] w-[240px] h-[200px] -z-10"
          >
            <Image
              src={yellowShape}
              layout="responsive"
              alt="yelloshape"
            ></Image>
          </div>
        </div>
        <p className="border-s border-laurel-800 my-24 w-[277px] md:w-[660px] lg:w-[712px] xl:w-[708px] 2xl:w-[828px] mx-auto pl-5 xl:pl-12 lg:pl-10 md:pl-7 font-medium text-[31px] leading-[52px] tracking-[0.57] text-laurel-800">
          Notre engagement pour la durabilité se reflète dans toutes les
          facettes de notre entreprise. Nous croyons que chaque petite action
          compte et que nous pouvons tous contribuer à un avenir plus durable.
          C&apos est pourquoi nous avons mis en place une série d&apos
          initiatives pour réduire notre impact environnemental et favoriser une
          agriculture plus respectueuse de la nature.{" "}
        </p>
      </div>
      {/* section two */}
      <div className="bg-rose-600">
        <p className="text-[14px] leading-[20px] pt-[70px] 2xl:pt-[130px] 2xl:ml-[260px] xl:ml-[200px] lg:ml-[90px] md:ml-[60px] ml-5 mb-5 text-rose-800">
          NOS VALEURS
        </p>
        <h1 className="2xl:ml-[260px] xl:ml-[200px] lg:ml-[90px] md:ml-[60px] ml-5 hl1 mb-5 md:mb-[70px] text-kumera-900">
          Des actions concrètes <br /> pour un avenir durable
        </h1>
        <div className="relative">
          {/* paragraph box */}
          <div className="flex flex-col md:flex-row md:gap-24 gap-4 2xl:ml-[480px] xl:ml-[400px] lg:ml-[162px] md:ml-[60px] mx-5 mb-[110px] lg:mb-[120px] xl:mb-[280px] ">
            <div className="w-full md:w-[375px]">
              <p className="bt text-kumera-900">
                Chez Gerard Bakery, nous sommes convaincus que chaque geste
                compte pour préserver notre planète. C &apos est pourquoi nous
                avons mis en place une série de solutions durables pour réduire
                notre empreinte écologique.
              </p>
            </div>
            <div className="w-full md:w-[375px]">
              <p className="bt text-kumera-900">
                Chez Gerard Bakery, nous sommes convaincus que chaque geste
                compte pour préserver notre planète. C &apos est pourquoi nous
                avons mis en place une série de solutions durables pour réduire
                notre empreinte écologique.
              </p>
            </div>
          </div>
          {/* <div className="absolute right-0 bottom-0 2xl:w-[480px] 2xl:h-[380px]">
            <Image src={grayShape} alt="test2"></Image>
          </div> */}
        </div>
        <div className="flex lg:flex-col gap-5 md:gap-24 max-md:mx-5">
          <div className="order-2 md:order-1">
            <div
              className="bg-white w-full md:w-[450px] xl:w-[516px] 2xl:w-[616px] mb-5 flex flex-col md:flex-row gap-4 md:gap-[70px] xl:gap-[84px] 2xl:gap-[94px] p-5 md:p-[50px] rounded-b-[30px]
            max-md:text-center"
            >
              <Image
                src={mobile}
                alt="mobile icon"
                className="max-md:mx-auto"
              ></Image>
              <h3 className="hl4 text-laurel-800 w-full md:w-[250px]">
                Vous commandez jusqu &apos a 48h avant le jour de livraison
              </h3>
            </div>
            <div
              className="bg-white w-full md:w-[450px] xl:w-[516px] 2xl:w-[616px] mb-5 flex flex-col md:flex-row gap-4 md:gap-[70px] xl:gap-[84px] 2xl:gap-[94px] p-5 md:p-[50px] rounded-b-[30px]
            max-md:text-center"
            >
              <Image
                src={bowl}
                alt="mobile icon"
                className="max-md:mx-auto"
              ></Image>
              <h3 className="hl4 text-laurel-800 w-full md:w-[250px]">
                Nous produisons la quantité nécessaire pour chaque commande.
              </h3>
            </div>
            <div></div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[14px] leading-[20px] 2xl:ml-[260px] xl:ml-[200px] lg:ml-[90px] md:ml-[60px] ml-5 mb-5 text-rose-800 lg:text-right">
              NOS VALEURS
            </p>
            <h1 className="2xl:ml-[260px] xl:ml-[200px] lg:ml-[90px] md:ml-[60px] ml-5 hl1 mb-8 md:mb-[70px] text-kumera-900 lg:text-right">
              Des actions concrètes <br /> pour un avenir durable
            </h1>
            <p className="bt text-kumera-900 lg:text-right">
              Chez Gerard Bakery, nous sommes convaincus que chaque geste compte
              pour préserver notre planète. C &apos est pourquoi nous avons mis
              en place une série de solutions durables pour réduire notre s
              empreinte écologique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
