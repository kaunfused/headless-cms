import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            tempora, maxime corrupti, quo cupiditate assumenda perferendis
            corporis magnam et soluta dicta. Molestias numquam harum similique
            voluptates eius nam, nisi soluta maxime? Minus nemo corrupti
            delectus, veniam magni commodi voluptates cum.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
