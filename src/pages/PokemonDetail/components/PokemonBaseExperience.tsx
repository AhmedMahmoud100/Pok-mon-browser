interface PokemonBaseExperienceProps {
  baseExperience: number;
}

const PokemonBaseExperience = ({ baseExperience }: PokemonBaseExperienceProps) => {
  return (
    <div>
      <h2 className="text-lg font-bold text-(--color-gray-800) mb-1">Base Experience</h2>
      <p className="text-xl font-bold text-(--color-primary)">{baseExperience} XP</p>
    </div>
  );
};

export default PokemonBaseExperience;
