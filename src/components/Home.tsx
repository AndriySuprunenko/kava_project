// Imports
// import styles from './home.module.scss';
// import initMap from '../elements/Maps';
import '../styles/components/home.scss';
const Locale = require('../assets/images/locale.png');
const Time = require('../assets/images/time.png');
const Reservation = require('../assets/images/reservation.png');
// const Cart = require('../assets/images/cart-1.png');
const Signature = require('../assets/images/signature.png');

const Home = () => {
  return (
    <section className="home" id="sec-2">
      {/* Aboute Us */}
      <div className="aboute_us">
        {/* Block */}
        <div className="aboute_us__block">
          <div className="aboute_us__img">
            <img src={Locale} alt="locale" />
          </div>
          <div className="aboute_us__data">
            <div className="aboute_us__title">Locate Us</div>
            <div className="aboute_us__text">
              Riverside 25, San Diego, California
            </div>
          </div>
        </div>
        {/* Block */}
        <div className="aboute_us__block">
          <div className="aboute_us__img">
            <img src={Time} alt="time" />
          </div>
          <div className="aboute_us__data">
            <div className="aboute_us__title">Open Hours</div>
            <div className="aboute_us__text">Mon To Fri 9:00 AM - 9:00 PM</div>
          </div>
        </div>
        {/* Block */}
        <div className="aboute_us__block">
          <div className="aboute_us__img">
            <img src={Reservation} alt="reservation" />
          </div>
          <div className="aboute_us__data">
            <div className="aboute_us__title">Reservation</div>
            <div className="aboute_us__text">restaurantate@gmail.com</div>
          </div>
        </div>
      </div>

      {/* Home Block */}
      <div className="home__block">
        <div className="home__image">{/* <initMap /> */}</div>
        <div className="home__texts">
          <div className="home__texts_title">The Delicious Story</div>
          <div className="home__texts_text">
            The people, food and the prime locations make the perfect place for
            the friends & family to come together and have great time.
          </div>
          <div className="home__texts_blocks">
            <div className="home__texts_block">
              <div className="home__texts_title">2018</div>
              <div className="home__texts_text">
                Plan for this restaurant to deliver healthy food.
              </div>
            </div>
            <div className="home__texts_block">
              <div className="home__texts_title">2022</div>
              <div className="home__texts_text">
                Happily in the fourth year by fulfill the motto.
              </div>
            </div>
          </div>
          <div className="home__texts_img">
            <div className="home__texts_name">JOSEFINE</div>
            <div className="home__texts_image">
              <img src={Signature} alt="signature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
