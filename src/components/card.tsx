import { useState } from "react";
import { ContentRepository } from "../api/ContentRepository";
import { Sport } from "src/models/sports";
import { useAppSelector } from "src/store/configureStore";

type CardProps = {
  title: string;
  description: string;
};

const initial : Sport[] = [{name: '', description: ''}]

export const Card = ({ title, description }: CardProps) => {
  const sports = useAppSelector(state => state.sports)
  
  return (
  <div>
    <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:max-w-xs lg:max-w-sm xl:max-w-md">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  </div>
  );
};
