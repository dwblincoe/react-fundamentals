import Pet from "./components/pet";
import "./App.css";

const App = () => {
  const pets = ["Dog", "Cat", "Bearded Dragon", "Mouse"];

  return (
    <div className="App">
      {pets.map((pet) => {
        return <Pet pet={pet} />;
      })}
    </div>
  );
};

export default App;
