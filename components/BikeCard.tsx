"use client";

import { useState } from "react";
import Image from "next/image";

import { generateBikeImageUrl } from "@/utils";
import { BikeProps } from "@/types";
import CustomButton from "./CustomButton";
import BikeDetails from "./BikeDetails";

interface BikeCardProps {       
    bike: BikeProps;
}

const BikeCard = ({ bike }: BikeCardProps) => {
    const { year, make, model, engine } = bike;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bike-card group">
            <div className="bike-card__content">
                <h2 className="bike-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src={generateBikeImageUrl(bike)} alt='bike model' fill priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-grey'>
                
                    <div className="bike-card__icon">
                        <Image src="/tire.svg" width={20} height={20} alt="seat" />
                        <p className="bike-card__icon-text">{engine.toUpperCase()}</p>
                    </div>
                </div>

                <div className="bike-card__btn-container">
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <BikeDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} bike={bike} />
        </div>
    );
};

export default BikeCard;
