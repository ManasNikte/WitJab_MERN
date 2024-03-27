import Card from "./Card.jsx";
import Card1 from "../assets/images/card1.png";
import Card2 from "../assets/images/card2.png";
import Card3 from "../assets/images/card3.png";
function Services() {
  return (
    <section id = "services">
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title="Web Development"
                img={Card1}
                text="We develop customized websites according to your requirements."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Search Engine Optimization"
                img={Card2}
                text="Enhance your google search engine result rankings."
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="App Development"
                img={Card3}
                text="We develop customized applications according to your requirements."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Services;

