import Image from "next/image";
import testImg from "../assets/Header.png";
import yellowShape from "../assets/yellow.png";
import grayShape from "../assets/gray.png";
import mobile from "../assets/mobile.png";
import bowl from "../assets/Bowl.png";
import bin from "../assets/bin.png";
import line from "../assets/circle line.png";
import shop from "../assets/shop.png";
import truck from "../assets/truck.png";
import cta from "../assets/CTA  MINITAB.png";
import drop from "../assets/drop.png";
import white from "../assets/white.png";

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
          {/* the pattern image */}
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
      <div className="bg-rose-600 relative">
        <div className="absolute 2xl:left-[-80px] 2xl:top-[-172px] xl:left-[-60px] xl:top-[-120px] lg:left-[-110px] lg:top-[-120px] max-2xl:w-[250px] md:left-[-50px] md:top-[-80px] max-lg:w-[150px] left-[-20px] top-[-50px] max-md:w-[95px]">
          <Image src={white} alt="pattern2"></Image>
        </div>
        <p className="text-[14px] leading-[20px] pt-[70px] 2xl:pt-[130px] 2xl:ml-[260px] xl:ml-[200px] lg:ml-[90px] md:ml-[60px] ml-5 mb-5 text-rose-800">
          NOS VALEURS
        </p>
        <h1 className="2xl:ml-[260px] xl:ml-[200px] lg:ml-[90px] md:ml-[60px] ml-5 hl1 mb-5 md:mb-[70px] text-kumera-900">
          Des actions concrètes <br /> pour un avenir durable
        </h1>
        <div className="relative">
          {/* paragraph box */}
          <div className="flex flex-col md:flex-row xl:gap-12 2xl:gap-24 gap-4 2xl:ml-[480px] xl:ml-[400px] lg:ml-[162px] md:ml-[60px] mx-5 mb-[110px] lg:mb-[120px] xl:mb-[280px] ">
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
          <div className="absolute right-0 2xl:bottom-[-150px] xl:bottom-[-120px] lg:bottom-[-20px] md:bottom-[-50px] opacity-[0.6] xl:w-[480px] xl:h-[380px] lg:w-[430px] lg:h-[340px] md:w-[330px] md:h-[260px] hidden md:block">
            <Image src={grayShape} alt="test2"></Image>
          </div>
        </div>
        {/* Section three */}
        <div className="flex flex-col lg:flex-row max-md:mx-5 pb-12 md:pb-16 xl:pb-24">
          <div className="order-2 lg:order-1 2xl:mr-48 xl:mr-36 lg:mr-10 ">
            <div className="flex ">
              <div className="hidden md:block">
                <Image
                  src={line}
                  alt="circle line"
                  // width={100}
                  height={800}
                  // layout="responsive"
                ></Image>
              </div>
              <div className="w-full">
                <div
                  className="bg-white w-full md:w-[450px] xl:w-[516px] 2xl:w-[616px] mb-5 flex flex-col md:flex-row gap-4 md:gap-[50px] xl:gap-[45px] 2xl:gap-[60px] p-5 md:px-16 rounded-b-[30px]
            max-md:text-center"
                >
                  <div className="md:border-r md:border-laurel-600 md:pr-10">
                    <Image
                      src={mobile}
                      alt="mobile icon"
                      className="max-md:mx-auto md:my-10"
                    ></Image>
                  </div>

                  <h3 className="hl4 text-laurel-800 w-full md:w-[280px] md:my-10">
                    Vous commandez jusqu &apos a 48h avant le jour de livraison
                  </h3>
                </div>
                <div
                  className="bg-white w-full md:w-[450px] xl:w-[516px] 2xl:w-[616px] mb-5 flex flex-col md:flex-row gap-4 md:gap-[50px] xl:gap-[45px] 2xl:gap-[60px] p-5 md:px-16 rounded-b-[30px]
            max-md:text-center"
                >
                  <div className="md:border-r md:border-laurel-600 md:pr-10">
                    <Image
                      src={bowl}
                      alt="mobile icon"
                      width={102}
                      className="max-md:mx-auto md:my-10"
                    ></Image>
                  </div>

                  <h3 className="hl4 text-laurel-800 w-full md:w-[280px] md:my-10">
                    Nous produisons la quantité nécessaire pour chaque commande.
                  </h3>
                </div>
                <div
                  className="bg-laurel-600 w-full md:w-[450px] xl:w-[516px] 2xl:w-[616px] flex flex-col md:flex-row gap-4 md:gap-[50px] xl:gap-[45px] 2xl:gap-[60px] p-10 md:px-16 rounded-b-[30px]
            max-md:text-center"
                >
                  <div>
                    <h3 className="hl4 text-laurel-800 mb-4 md:mb-[70px] xl:mb-[80px] 2xl:mb-[90px]">
                      Pas d’invendus
                    </h3>
                    <p className="text-laurel-800 text-[64px] leading-[26px] text-bold mb-5 md:mb-10">
                      0<span className="text-[36px]">%</span>
                    </p>
                    <h3 className="hl4 text-laurel-800">
                      déchets alimentaires
                    </h3>
                  </div>
                  <div>
                    <Image
                      src={bin}
                      alt="Bin Icon"
                      // width={133}
                      className="max-md:mx-auto "
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full md:w-[450px] lg:w-[242px] xl:w-[274px] 2xl:w-[326px] max-lg:mx-auto">
            <p className="text-[14px] leading-[20px]  mb-5 text-rose-800 lg:text-right">
              FOOD WASTE
            </p>
            <h1 className="hl1 mb-8 lg:mb-[70px] text-kumera-900 lg:text-right">
              Zéro gaspillage alimentaire, plaisir maximal
            </h1>
            <p className="bt text-kumera-900 lg:text-right max-lg:mb-8 ">
              Grâce à notre système de réservation en ligne, vous pouvez être
              assuré de recevoir des produits frais et de qualité, tout en
              contribuant à réduire le gaspillage alimentaire en évitant les
              invendus.
            </p>
          </div>
        </div>
      </div>
      {/* Section Three */}
      <div className="bg-[#F1F1F1] 2xl:py-52 2xl:pl-52 xl:pt-36 xl:pl-28 xl:pb-52 lg:pt-28 xl:lg-20 lg:pb-36 md:p-28 max-md:px-4 pt-20 max-md:pb-10">
        <div className="flex flex-col lg:justify-between lg:flex-row gap-6 md:gap-16 lg:gap-9 2xl:gap-16">
          <div className="w-full lg:w-[250px] xl:w-[324px] max-lg:mx-auto">
            <p className="text-[14px] leading-[20px]  mb-5 text-rose-800">
              LIVRAISON 100% ELECTRIQUE
            </p>
            <h1 className="hl1 mb-8 lg:mb-[70px] text-kumera-900 ">
              Une solution de livraison durable pour votre confort matinal
            </h1>
            <p className="bt text-kumera-900 max-lg:mb-8 ">
              Nous avons choisi des véhicules électriques pour nos livraisons,
              contribuant ainsi à réduire les émissions de CO2 liées aux
              transports.
            </p>
          </div>
          <div className="flex flex-col md:flex-row max-lg:mx-auto gap-3">
            <div>
              <div className="bg-rose-600 p-10 rounded-t-[500px] rounded-b-[40px]">
                <Image src={shop} alt="shop" layout="responsive"></Image>
              </div>
              <div className="flex items-center bg-rose-700 p-6 mt-3 rounded-[16px]">
                <div className="">
                  <span className="text-[#805246] text-[37px] leading-[35px] tracking-[-1px] font-medium mr-4">
                    592g
                  </span>
                  <span className="text-[12px] leading-[35px] text-[#805246] font-semibold">
                    C02
                  </span>
                </div>
                <h3 className="hl4 text-[#805246] text-right ml-auto">
                  émissions de <br />
                  30 voitures
                </h3>
              </div>
            </div>
            <div>
              <div className="bg-laurel-600 p-10 rounded-t-[500px] rounded-b-[40px] ">
                <Image
                  src={truck}
                  alt="shop"
                  layout="responsive"
                  className="pt-[25px]"
                ></Image>
              </div>
              <div className="flex items-center bg-laurel-700 p-6 mt-3 rounded-[16px]">
                <div className="">
                  <span className="text-laurel-900 text-[37px] leading-[35px] tracking-[-1px] font-medium mr-4">
                    400g
                  </span>
                  <span className="text-[12px] leading-[35px] text-laurel-900 font-semibold">
                    C02
                  </span>
                </div>
                <h3 className="hl4 text-laurel-900 text-right ml-auto">
                  émissions de <br />
                  notre livraison
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1] relative">
        <div className="absolute 2xl:left-[337px] 2xl:top-[-80px] xl:left-[260px] xl:top-[-80px] lg:left-[104px] lg:top-[-60px] md:left-[20px] md:top-[-40px] hidden md:block">
          <Image src={drop} alt="drop pattern" className=""></Image>
        </div>

        <Image src={cta} alt="cta" width={"100vw"} layout="responsive"></Image>
      </div>
    </div>
  );
}
