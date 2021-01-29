import Pet from "./pet";

const Pets = () => {
  const pets = ["Dog", "Cat", "Bearded Dragon", "Mouse"];
  return pets.map((pet) => {
    return <Pet pet={pet} />;
  });
};

export default Pets;
