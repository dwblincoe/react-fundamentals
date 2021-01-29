import ContactCard from "./contact-card";

const group = [
  {
    name: "Jason Freeman",
    age: "35",
    school: "Hard Knocks",
    graduationYear: "2029",
  },
  {
    name: "Betty Cooker",
    age: "35",
    school: "Bakersfield",
    graduationYear: "2024",
  },
  {
    name: "Rosie River",
    age: "42",
    school: "Bakersfield",
    graduationYear: "2053",
  },
];

const Contacts = () => {
  return group.map((person) => (
    <ContactCard
      name={person.name}
      age={person.age}
      school={person.school}
      graduationYear={person.graduationYear}
    />
  ));
};

export default Contacts;
