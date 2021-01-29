const ContactCard = (props) => {
  const { name, age, school, graduationYear } = props;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{age}</h3>
      <h3>{school}</h3>
      <h3>{graduationYear}</h3>
    </div>
  );
};

export default ContactCard;
