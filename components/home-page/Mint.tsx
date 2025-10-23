import React from "react";
import Link from "next/link";
import Image from "next/image";

import SectionTitle from "./SectionTitle";
import Carousel from "./Carousel";
import PrimaryButton from "../ui/PrimaryButton";
import cloud from "@/public/images/home-page/how-to-buy/cloud.png";

const Mint = () => {
  return (
    <section className="bg-secondary relative pb-[15%] sm:pb-[12%] lg:pb-[10%]">
      <div className="px-container relative container mx-auto">
        <SectionTitle
          text="Mint possum"
          className="mb-[0.5em] pt-[0.8em] text-center"
        />
        <Carousel />
      </div>

      <div className="text-dark container mx-auto mt-[2em] text-center">
        <p className="text-[2em]">1000/1000 MINTED</p>

        <div className="mt-[1em] flex flex-col justify-center gap-[1em] sm:flex-row">
          <Link href="https://magiceden.io/marketplace/wtf_opossum">
            <PrimaryButton
              buttonText="Trade on Magic Eden"
              className="w-[30ch] text-[1.4em] sm:text-[1.4em] md:text-[1.4em] lg:text-[1.4em] xl:text-[1.4em] 2xl:text-[1.4em]"
              spanStyle="bg-[#FFFFEF]"
            />
          </Link>

          <Link href="https://www.tensor.trade/trade/wtf_opossum">
            <PrimaryButton
              buttonText="Trade on Tensor"
              className="w-[30ch] text-[1.4em] sm:text-[1.4em] md:text-[1.4em] lg:text-[1.4em] xl:text-[1.4em] 2xl:text-[1.4em]"
              spanStyle="bg-[#FFFFEF]"
            />
          </Link>
        </div>
      </div>

      <Image
        src={cloud}
        alt="Cloud"
        className="absolute top-[20%] left-0 w-1/4 max-w-[550px] object-cover object-center select-none md:top-[15%]"
      />
      <Image
        src={cloud}
        alt="Cloud"
        className="absolute top-[50%] right-0 w-1/4 max-w-[550px] object-cover object-center select-none"
      />
    </section>
  );
};

export default Mint;
