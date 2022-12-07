import Hero1 from "./images/image-web-3-desktop.jpg";
import Hero2 from "./images/image-web-3-mobile.jpg";
import RetroComputer from "./images/image-retro-pcs.jpg";
import TopLaptop from "./images/image-top-laptops.jpg";
import GamingGrowth from "./images/image-gaming-growth.jpg";

const MainPage = () => {
  return (
    <section className="section">
      <div className="grid-items">
        <div className="hero grid-item1">
          <img className="hero1" src={Hero1} alt="hero1" />
          <img className="hero2" src={Hero2} alt="hero2" />
        </div>
        <div className="popular grid-item2">
          <div className="hero-text">
            <h2>The Bright Future of Web 3.0?</h2>
            <div className="hero-subtext">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="btn">Read more</button>
            </div>
          </div>
        </div>

        <div className="trending grid-item3">
          <h2 className="trending-header">New</h2>
          <div className="single-news">
            <h3 className="single-news-header ">
              The Downsides of AI Artistry
            </h3>
            <p className="single-news-description underline">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="single-news">
            <h3 className="single-news-header">The Downsides of AI Artistry</h3>
            <p className="single-news-description underline">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="single-news">
            <h3 className="single-news-header">Is VC Funding Drying Up?</h3>
            <p className="single-news-description ">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <div className="categories flex-items">
        <div className="category">
          <img
            src={RetroComputer}
            alt="retro computer"
            className="category-image"
          />
          <div className="category-desc">
            <h3 className="category-rank">01</h3>
            <p className="category-title">Reviving Retro PCs</p>
            <p className="category-text">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="category">
          <img src={TopLaptop} alt="top laptop" className="category-image" />
          <div className="category-desc">
            <h3 className="category-rank">02</h3>
            <p className="category-title">Top 10 Laptops of 2022</p>
            <p className="category-text">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="category">
          <img
            src={GamingGrowth}
            alt="gaming growth"
            className="category-image"
          />
          <div className="category-desc">
            <h3 className="category-rank">03</h3>
            <p className="category-title">The Growth of Gaming</p>
            <p className="category-text">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
