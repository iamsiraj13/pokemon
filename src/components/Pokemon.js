import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pokemon = ({ pokemon, index }) => {
  const pokeIndex = ("000" + (index + 1)).slice(-3);

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <div className="">
        <div className="bg-white rounded  mx-2 py-2 flex flex-col justify-center items-center ">
          <div className="bg-[#F2F2F2] p-4 relative">
            <span className="absolute text-sm text-slate-500 top-2 left-3 font-bold">
              #{pokeIndex}
            </span>
            <Image
              alt={pokemon.name}
              width={150}
              height={150}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
            />
          </div>
          <span className="uppercase font-semibold tracking-wider text-left text-amber-400">
            {pokemon.name}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
