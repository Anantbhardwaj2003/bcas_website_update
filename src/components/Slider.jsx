import "./Slider.css";

export const Slider = () => {
  return (
    <div className="slider">
      <div className="overlap-group">
        <div className="slider-background">
          <img src="/slider_hero.jpg" className="slider-image" />
          <div className="slider-image-overlay" />
        </div>
        <div className="slider-main">
          {/* <div className="about-us">
            <svg
              width="172"
              height="48"
              viewBox="0 0 260 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H260L228 72H0V0Z" fill="#B8AC8C"></path>
            </svg>
            <span className="about-us-text">ABOUT US</span>
          </div> */}
          <div className="slider-container">
            <div className="slider-title">
              Smarter Students,
              <br />
              clever tech
            </div>
            <div className="divider" />
            <p className="slider-body">
              With the help of smartphone and fitness data from UW students
              like Mei Wu, an iSchool team is studying and predicting Husky
              health and academic success.
            </p>
            {/* <div className="read-story">
              <div className="read-story-text">
                <a href="/">Learn More</a>
              </div>
              <div className="divider" />
              <div className="read-story-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 -960 960 960"
                  width="48"
                >
                  <path
                    d="M508-481 310-679l65-65 263 263-263 262-65-65 198-197Z"
                    fill="#d9d9d9"
                  ></path>
                </svg>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
