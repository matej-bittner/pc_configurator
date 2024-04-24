"use client";
import React, { useEffect, useState } from "react";
import { PiComputerTowerLight } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { gpu, cpu, memory, hardDisk, ssdDisk, images } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import {
  bottomChildVariants,
  bottomLeftChildVariants,
  bottomLeftVariants,
  bottomRightVariants,
  chosenComponent,
  componentsButtonsVariants,
  componentsChildVariants,
  componentsVariants,
  fpsOverlay,
  gamesImagesVariants,
  topLeftChildVariants,
  topLeftVariants,
  topRightChildVariants,
  topRightVariants,
} from "@/variants/configureVariants";
import LoadingCircle from "@/components/LoadingCircle";
import CheckoutForm from "@/components/CheckoutForm";
import {
  checkoutArticleSectionChildrenVariants,
  checkoutArticleTextVariants,
  checkoutComponentsVariants,
  checkoutMultipleVariants,
  checkoutLeftVariants,
  checkoutRightChildVariants,
  checkoutRightVariants,
} from "@/variants/checkoutVarinats";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [price, setPrice] = useState(0);
  const [graphicCard, setGraphicCard] = useState({
    selectedCard: 1,
    cardScore: 27023,
    cardPrice: 14000,
    cardName: "RTX 4070 12gb",
  });
  const [processor, setProcessor] = useState({
    selectedProcessor: 1,
    processorScore: 34374,
    processorPrice: 11000,
    processorName: "Ryzen 7 7800X3D",
  });
  const [hdd, setHdd] = useState({
    selectedHdd: 1,
    hddPrice: 1500,
    hddCapacity: "1TB HDD",
  });
  const [ssd, setSsd] = useState({
    selectedSsd: 1,
    ssdPrice: 1800,
    ssdCapacity: "512GB",
  });
  const [ram, setRam] = useState({
    selectedRam: 1,
    ramPrice: 1100,
    ramCapacity: "16 GB",
  });
  const [game, setGame] = useState({
    gameName: "",
    visible: false,
  });
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    setLoading(false);

    setPrice(
      graphicCard.cardPrice +
        processor.processorPrice +
        ram.ramPrice +
        ssd.ssdPrice +
        hdd.hddPrice,
    );
  }, [graphicCard, processor, hdd, ssd, ram, loading]);

  return (
    <section className="flex flex-col w-[1100px] h-[720px] mx-auto mt-[60px] relative">
      {loading && <LoadingCircle />}
      {slide === 1 && (
        <motion.div>
          {/*top */}
          <div className="flex w-full h-[550px] ">
            {/*top left*/}
            <motion.div
              variants={topLeftVariants}
              initial="initial"
              animate="animate"
              className="flex flex-1"
            >
              {/*games*/}
              <motion.div
                variants={topLeftChildVariants}
                className="w-[96px] h-[364px] self-end relative flex justify-center"
              >
                {images.map((item) => {
                  return (
                    <motion.img
                      variants={gamesImagesVariants}
                      whileHover={{
                        scale: 1.05,
                        zIndex: 10,
                        transition: { duration: 0.15 },
                      }}
                      onMouseEnter={() =>
                        setGame({ gameName: item.name, visible: true })
                      }
                      onMouseLeave={() =>
                        setGame({ gameName: "", visible: false })
                      }
                      key={item.id}
                      src={item.source}
                      alt={item.name}
                      style={{ top: item.top }}
                      className={`absolute cursor-pointer h-[${item.height + "px"}] w-[${item.width + "px"}]`}
                    />
                  );
                })}
              </motion.div>
              {/*case*/}
              <motion.div
                variants={topLeftChildVariants}
                className="flex-1 flex items-end relative"
              >
                {/*gk animation*/}
                {gpu.map((item) => {
                  return (
                    <AnimatePresence key={item.id}>
                      {graphicCard.selectedCard === item.id && (
                        <motion.img
                          variants={chosenComponent}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="w-[180px] h-[40px] absolute left-[60px] bottom-[170px] z-20"
                          src={`/gk/gk-${graphicCard.selectedCard}.png`}
                        />
                      )}
                    </AnimatePresence>
                  );
                })}
                {/*cpu animation*/}
                {cpu.map((item) => {
                  return (
                    <AnimatePresence key={item.id}>
                      {processor.selectedProcessor === item.id && (
                        <motion.img
                          variants={chosenComponent}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="h-[40px] aspect-square absolute left-[160px] bottom-[250px] z-20"
                          src={`/cpu/cpu-${processor.selectedProcessor}.png`}
                        />
                      )}
                    </AnimatePresence>
                  );
                })}
                {/*mb*/}
                <motion.img
                  variants={chosenComponent}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="h-[250px] w-[200px] absolute left-[70px] bottom-[100px] z-10"
                  src="/mb.png"
                />
                <Image
                  src="/case.png"
                  alt="case"
                  width={450}
                  height={450}
                  className="z-0"
                />
                <AnimatePresence>
                  {game.visible && (
                    <motion.div
                      variants={fpsOverlay}
                      initial="initial"
                      animate="animate"
                      exit="initial"
                      className="w-[160px] aspect-square bg-gradient-to-b from-white to-purple-light absolute rounded-full ring-[3px] ring-purple-dark bottom-[350px] -left-[20px] flex items-center justify-center"
                    >
                      <p className="text-[36px] font-bold whitespace-nowrap">
                        155 FPS
                      </p>
                      <p className="absolute -top-[4px] bg-purple-darker-light min-w-[150px] min-h-[26px] text-white flex items-center justify-center rounded-md text-sm font-medium">
                        {game.gameName}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
            {/*components*/}
            <motion.div
              variants={topRightVariants}
              initial="initial"
              animate="animate"
              className="flex flex-1 flex-col items-center gap-[40px]"
            >
              <motion.h1
                variants={topRightChildVariants}
                className="text-3xl font-medium"
              >
                Konfigurace
              </motion.h1>
              <motion.div
                variants={topRightChildVariants}
                className="flex flex-col size-full gap-y-[12px]"
              >
                {/*gk*/}
                <motion.div variants={componentsVariants} id="component">
                  <motion.h2 variants={componentsChildVariants}>
                    Grafická Karta:
                  </motion.h2>
                  <motion.div variants={componentsChildVariants} id="choose">
                    {gpu.map((item) => {
                      return (
                        <motion.p
                          variants={componentsButtonsVariants}
                          key={item.id}
                          className={`${graphicCard.selectedCard === item.id ? "bg-purple-dark" : "bg-purple-main"}`}
                          onClick={() =>
                            setGraphicCard({
                              selectedCard: item.id,
                              cardScore: item.benchmark,
                              cardPrice: item.price,
                              cardName: item.model,
                            })
                          }
                        >
                          {item.model}
                        </motion.p>
                      );
                    })}
                  </motion.div>
                </motion.div>
                <motion.div variants={componentsVariants} id="component">
                  <motion.h2 variants={componentsChildVariants}>
                    Procesor:
                  </motion.h2>
                  <motion.div variants={componentsChildVariants} id="choose">
                    {cpu.map((item) => {
                      return (
                        <motion.p
                          variants={componentsButtonsVariants}
                          key={item.id}
                          className={`${processor.selectedProcessor === item.id ? "bg-purple-dark" : "bg-purple-main"}`}
                          onClick={() =>
                            setProcessor({
                              selectedProcessor: item.id,
                              processorScore: item.benchmark,
                              processorPrice: item.price,
                              processorName: item.model,
                            })
                          }
                        >
                          {item.model}
                        </motion.p>
                      );
                    })}
                  </motion.div>
                </motion.div>
                <motion.div variants={componentsVariants} id="component">
                  <motion.h2 variants={componentsChildVariants}>
                    Disk:
                  </motion.h2>
                  <motion.div variants={componentsChildVariants} id="choose">
                    {hardDisk.map((item) => {
                      return (
                        <motion.p
                          variants={componentsButtonsVariants}
                          key={item.id}
                          className={`${hdd.selectedHdd === item.id ? "bg-purple-dark" : "bg-purple-main"}`}
                          onClick={() =>
                            setHdd({
                              selectedHdd: item.id,
                              hddPrice: item.price,
                              hddCapacity: item.capacity,
                            })
                          }
                        >
                          {item.capacity}
                        </motion.p>
                      );
                    })}
                    {ssdDisk.map((item) => {
                      return (
                        <motion.p
                          variants={componentsButtonsVariants}
                          key={item.id}
                          className={`${ssd.selectedSsd === item.id ? "bg-purple-dark" : "bg-purple-main"}`}
                          onClick={() =>
                            setSsd({
                              selectedSsd: item.id,
                              ssdPrice: item.price,
                              ssdCapacity: item.capacity,
                            })
                          }
                        >
                          {item.capacity + " NVmE"}
                        </motion.p>
                      );
                    })}
                  </motion.div>
                </motion.div>
                <motion.div variants={componentsVariants} id="component">
                  <motion.h2 variants={componentsChildVariants}>Ram:</motion.h2>
                  <motion.div variants={componentsChildVariants} id="choose">
                    {memory.map((item) => {
                      return (
                        <motion.p
                          variants={componentsButtonsVariants}
                          key={item.id}
                          className={`${ram.selectedRam === item.id ? "bg-purple-dark" : "bg-purple-main"}`}
                          onClick={() =>
                            setRam({
                              selectedRam: item.id,
                              ramPrice: item.price,
                              ramCapacity: item.model,
                            })
                          }
                        >
                          {item.model}
                        </motion.p>
                      );
                    })}
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          {/*bottom*/}
          <div className="w-full h-[170px] flex">
            {/*graph*/}
            <motion.div
              variants={bottomLeftVariants}
              initial="initial"
              animate="animate"
              className="flex flex-1 items-center justify-around"
            >
              {/*workstation*/}
              <motion.div
                variants={bottomLeftChildVariants}
                className="flex flex-col items-center font-semibold gap-3"
              >
                <PiComputerTowerLight size={85} />
                <p>Pracovní Stanice</p>
                <div className="flex flex-col items-center flex-1">
                  <div className="h-[16px] w-[150px] rounded-full ring-[2px] ring-black overflow-clip">
                    <div
                      className="bg-purple-dark h-full "
                      style={{ width: "80%" }}
                    />
                  </div>
                  <p>80%</p>
                </div>
              </motion.div>
              {/*graphic*/}
              <motion.div
                variants={bottomLeftChildVariants}
                className="flex flex-col items-center font-semibold gap-3"
              >
                <RiComputerLine size={85} />
                <p className="">Grafické Programy</p>
                <div className="flex flex-col items-center flex-1">
                  <div className="h-[16px] w-[150px] rounded-full ring-[2px] ring-black overflow-clip">
                    <div
                      className="bg-purple-dark h-full "
                      style={{ width: "80%" }}
                    />
                  </div>
                  <p>80%</p>
                </div>
              </motion.div>
              {/*gaming*/}
              <motion.div
                variants={bottomLeftChildVariants}
                className="flex flex-col items-center font-semibold gap-3"
              >
                <IoGameControllerOutline size={85} />
                <p>Herní</p>
                <div className="flex flex-col items-center flex-1">
                  <div className="h-[16px] w-[150px] rounded-full ring-[2px] ring-black overflow-clip">
                    <div
                      className="bg-purple-dark h-full "
                      style={{ width: "80%" }}
                    />
                  </div>
                  <p>80%</p>
                </div>
              </motion.div>
            </motion.div>
            {/*price*/}
            <motion.div
              variants={bottomRightVariants}
              initial="initial"
              animate="animate"
              className="flex flex-1 flex-col items-center justify-center gap-3"
            >
              <motion.p variants={bottomChildVariants} className="text-3xl">
                Cena:
              </motion.p>
              <motion.p
                variants={bottomChildVariants}
                className="text-5xl font-bold flex items-center gap-4 pl-2"
              >
                {price.toLocaleString("fr")}
                <span className="text-2xl font-light"> Kč</span>
              </motion.p>
            </motion.div>
          </div>
          {/*next slide*/}

          <FaArrowRight
            size={70}
            className="absolute bottom-7 right-3 cursor-pointer hover:scale-[1.05] transition"
            onClick={() => setSlide(2)}
          />
        </motion.div>
      )}
      {slide === 2 && (
        <div className="w-full h-[600px] flex relative">
          {/*left side*/}
          <motion.div
            variants={checkoutLeftVariants}
            initial="initial"
            animate="animate"
            className="w-[690px] p-[33px] flex flex-col  gap-[30px] border-r-[1.5px] border-black relative"
          >
            <motion.h1
              variants={checkoutMultipleVariants}
              className="font-medium text-3xl"
            >
              Doručení a Platba
            </motion.h1>
            {/*content*/}
            <motion.div
              variants={checkoutMultipleVariants}
              className="flex h-fit gap-[50px]"
            >
              <CheckoutForm />
              <motion.div
                variants={checkoutMultipleVariants}
                className="flex-1 h-full justify-between flex flex-col"
              >
                <motion.h2
                  variants={checkoutArticleSectionChildrenVariants}
                  className="text-xl"
                >
                  Jak to bude probíhat
                </motion.h2>
                <motion.article
                  variants={checkoutArticleSectionChildrenVariants}
                  className="h-[210px] text-base flex flex-col justify-between"
                >
                  <motion.p variants={checkoutArticleTextVariants}>
                    Počítač sestavíme, zabalíme a odešleme.
                  </motion.p>

                  <motion.p variants={checkoutArticleTextVariants}>
                    Nejčastěji odesíláme pomocí PPl. Doručení by mělo proběhnout
                    do deseti pracovních dnů.
                  </motion.p>
                  <motion.p variants={checkoutArticleTextVariants}>
                    Pokud máte před objednáním dotazy, obraťte se na nás na 755
                    852 654 nebo pcnamiru@info.cz
                  </motion.p>
                </motion.article>
                <motion.div
                  variants={checkoutArticleSectionChildrenVariants}
                  className="w-full h-[70px] flex flex-col items-center justify-between"
                >
                  <p className="text-2xl">K Platbě</p>
                  <p className="font-bold text-3xl flex items-center justify-center gap-1">
                    {price.toLocaleString("fr")}
                    <span className="font-light text-2xl">Kč</span>
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          {/*right side*/}
          <motion.div
            variants={checkoutRightVariants}
            initial="initial"
            animate="animate"
            className="py-[33px] w-[360px] mx-auto flex flex-col justify-between"
          >
            <motion.h1
              variants={checkoutRightChildVariants}
              className="font-medium text-3xl text-center"
            >
              Komponenty
            </motion.h1>
            {/*choose components*/}
            <motion.div
              variants={checkoutRightChildVariants}
              id="checkout-chosen-components"
              className="flex flex-col gap-[27px]"
            >
              <motion.div
                variants={checkoutComponentsVariants}
                className="main-div"
              >
                <p className="flex-1 text-end text-lg">Grafická Karta:</p>
                <div className="flex-1">
                  <p className="component-name">{graphicCard.cardName}</p>
                </div>
              </motion.div>
              <motion.div
                variants={checkoutComponentsVariants}
                className="main-div"
              >
                <p className="flex-1 text-end text-lg">Procesor:</p>
                <div className="flex-1">
                  <p className="component-name">{processor.processorName}</p>
                </div>
              </motion.div>
              <motion.div
                variants={checkoutComponentsVariants}
                className="main-div"
              >
                <p className="flex-1 text-end text-lg">Ram:</p>
                <div className="flex-1">
                  <p className="component-name">{ram.ramCapacity}</p>
                </div>
              </motion.div>
              <motion.div
                variants={checkoutComponentsVariants}
                className="main-div gap-[38px]"
              >
                <p className="flex-1 text-end text-lg">Disk:</p>
                <motion.div
                  variants={checkoutComponentsVariants}
                  className="flex-1 flex flex-col gap-[18px]"
                >
                  <p className="component-name">{ssd.ssdCapacity + " NVmE"}</p>
                  {hdd.hddPrice !== 0 && (
                    <p className="component-name">{hdd.hddCapacity}</p>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
            {/*prebuild*/}
            <motion.div
              variants={checkoutRightChildVariants}
              id="checkout-prebuild-components"
              className="flex flex-col gap-[15px]"
            >
              <motion.div
                variants={checkoutComponentsVariants}
                className="main-div gap-[38px]"
              >
                <p className="flex-1 text-end text-lg">Operační Systém:</p>
                <div className="flex-1 flex flex-col gap-[18px]">
                  <p className="component-name">Windows 11</p>
                </div>
              </motion.div>
              <motion.div
                variants={checkoutComponentsVariants}
                className="main-div gap-[38px]"
              >
                <p className="flex-1 text-end text-lg">Základní Deska:</p>
                <div className="flex-1 flex flex-col gap-[18px]">
                  <p className="component-name">ASUS PRIME B760M-A</p>
                </div>
              </motion.div>
              <motion.div
                variants={checkoutComponentsVariants}
                className="main-div gap-[38px]"
              >
                <p className="flex-1 text-end text-lg">Chlazení:</p>
                <div className="flex-1 flex flex-col gap-[18px]">
                  <p className="component-name">Endorfy Fera 5</p>
                </div>
              </motion.div>
              <motion.div
                variants={checkoutComponentsVariants}
                className="main-div gap-[38px]"
              >
                <p className="flex-1 text-end text-lg">Skříň:</p>
                <div className="flex-1 flex flex-col gap-[18px]">
                  <p className="component-name">NZXT H9 Flow Black</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          <FaArrowRight
            size={70}
            className="absolute bottom-7 left-3 cursor-pointer hover:scale-[1.05] transition rotate-180"
            onClick={() => setSlide(1)}
          />
        </div>
      )}
    </section>
  );
};

export default Home;
