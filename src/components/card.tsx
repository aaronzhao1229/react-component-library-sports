
import { Sport } from "../models/sports";
import { useAppSelector } from "../hooks/hooks";


type CardProps = {
  title: string;
  description: string;
};

const initial : Sport[] = [{name: '', description: ''}]

export const Card = ({ title, description }: CardProps) => {
  const {sports}  = useAppSelector(state => state.sports)

  return (
  <div>
    {sports.map((sport, i) => 
        <div key={i} className="bg-emrald m-4 rounded-lg shadow-lg overflow-hidden sm:max-w-sm lg:max-w-xl xl:max-w-2xl">
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{sport.name}</h2>
              <p className="text-gray-700 text-base text-justify">{sport.description}</p>
            </div>
        </div>)
    }
    
  </div>
  );
};
