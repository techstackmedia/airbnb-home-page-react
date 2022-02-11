import JumbotronImage from "../../images/group.png";

const Jumbotron = () => {
  return (
    <div>
      <section className="header-image">
        <img className="jumbotron" src={JumbotronImage} alt="Jumbotron airbnb" />
      </section>
    </div>
  );
};

export default Jumbotron;
