import img1 from "../assets/images/img1.png"
function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={img1} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            At Wit Jab, we follow an agile and collaborative approach to software development. We work closely with our clients to understand their business requirements, and we use the latest development methodologies and technologies to deliver software solutions that meet their needs. We also place a strong emphasis on quality assurance, ensuring that our software is tested rigorously and meets the highest standards of performance and security.            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
