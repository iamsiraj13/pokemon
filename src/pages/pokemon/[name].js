import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/img/Logo.png";
import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const pokeIndex = ("000" + pokemon.id).slice(-3);
  const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const renderTypes = () =>
    pokemon.types.map((type) => (
      <li key={type.slot} className="px-2 py-1 text-white bg-[#B97FC9] rounded">
        {type.type.name}
      </li>
    ));

  const renderStats = () =>
    pokemon.stats.map((stat, index) => (
      <>
        <p>{stat.stat.name}</p>
        <div
          key={index}
          className="bg-[#D9D9D9] w-full mb-2   rounded  h-[5px] relative"
        >
          <div
            className="bg-[#30A7D7] rounded px-2 h-[5px] absolute left-0 top-0 "
            style={{ width: `${stat.base_stat}%` }}
          >
            {/* {stat.base_stat} */}
          </div>
        </div>
      </>
    ));

  return (
    <>
      <div className=" mx-auto bg-white h-screen py-10">
        <div className="flex justify-around">
          <Link href="/">
            <Image src={logo} width={`100px`} />
          </Link>
        </div>
        <div className="md:container sm:container lg:container xl:container flex justify-between lg:px-32">
          <div className="w-[30%]">
            <h2 className="text-xxl text-[#257BC4] text-[40px] font-bold capitalize tracking-tight">
              {pokemon.name} #{pokeIndex}
            </h2>
            <p className="text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              adipisci placeat culpa itaque deserunt quae sequi, accusamus
              molestiae dolorum ea.
            </p>
            <div className="w-full h-[200] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 mt-10 rounder-sm">
              <div className="bg-white p-4">
                <ul className="text-black">
                  <li>Height: {pokemon.height}</li>
                  <li>weight: {pokemon.weight}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <Image
              alt={pokemon.name}
              width={400}
              height={400}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
            />
          </div>
          <div className="w-[30%]">
            <div className=" text-black rounded p-5">
              <h2 className="mb-4">Types</h2>
              <ul className="flex gap-5">{renderTypes()}</ul>
              <div className="mt-10">{renderStats()}</div>
            </div>
          </div>

          {/* <span className="absolute text-[400px] font-bold text-slate-500">
          #{pokeIndex}
        </span> */}
        </div>
      </div>
    </>
  );
};

export default Pokemon;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.query.name}`
  );
  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
  };
}
