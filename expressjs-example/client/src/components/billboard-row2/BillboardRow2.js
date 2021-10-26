import React from "react";
import styles from "./styles/BillboardRow2.module.css";
import "react-awesome-slider/dist/styles.css";
import Slider from "infinite-react-carousel";

const BillboardRow = () => {
  return (
    <div>
      <Slider dots>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/goldclass/1920x420px_goldclass_new.jpg"
            alt="Billboard-cover"
          />

          <h1 className={styles.description}>
          Ev rahatlığında sinema keyfi!
          </h1>

          <button
            type="submit"
            className={`${styles.button} ${styles.button2}`}
          >
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Teknolojiler/1920x420px_skybox.jpg"
            alt="Billboard-cover"
          />

          <h1 className={styles.description}>
          Skybox
          </h1>

          <button
            type="submit"
            className={`${styles.button} ${styles.button2}`}
          >
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/files/Teknolojiler/1920x420px_skyAuditorium.jpg"
            alt="Billboard-cover"
          />
          <h1 className={styles.description}>
            Cinemaximum’dan Sky Auditorium!</h1>

          <button
            type="submit"
            className={`${styles.button} ${styles.button2}`}
          >
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Teknolojiler/1920x420px_premium.jpg"
            alt="Billboard-cover"
          />
          <h1 className={styles.description}>Premium Cinema</h1>

          <button
            type="submit"
            className={`${styles.button} ${styles.button2}`}
          >
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Teknolojiler/_MAX.jpg"
            alt="Billboard-cover"
          />
          <h1 className={styles.description}> “Gerçeğe En Yakın” Sinema Teknolojisi!</h1>

          <button
            type="submit"
            className={`${styles.button} ${styles.button2}`}
          >
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Teknolojiler/4DX.jpg"
            alt="Billboard-cover"
          />
          <h1 className={styles.description}>
          4DX ile Filmi Yaşamaya Hazır Mısın?
          </h1>

          <button
            type="submit"
            className={`${styles.button} ${styles.button2}`}
          >
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Teknolojiler/starium_yenigorsel.jpg"
            alt="Billboard-cover"
          />
          <h1 className={styles.description}>‘Starium’ Türkiye’de sadece Cinemaximum'da!</h1>

          <button
            type="submit"
            className={`${styles.button} ${styles.button2}`}
          >
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Teknolojiler/ScreenX.jpg"
            alt="Billboard-cover"
          />
          <h1 className={styles.description}>
          ScreenX ile Dünyanı Genişlet!
          </h1>

          <button
            type="submit"
            className={`${styles.button} ${styles.button2}`}
          >
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Teknolojiler/1920x420px_tempur.jpg"
            alt="Billboard-cover"
          />
          <h1 className={styles.description}>
          Cinemaximum'dan Tempur Sinema Salonu
          </h1>

          <button
            type="submit"
            className={`${styles.button} ${styles.button2}`}
          >
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Teknolojiler/DBOX.jpg"
            alt="Billboard-cover"
          />
          <h1 className={styles.description}>
          Filme Göre Hareket Eden Koltuklar!
          </h1>

          <button
            type="submit"
            className={`${styles.button} ${styles.button2}`}
          >
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Teknolojiler/MPX.jpg"
            alt="Billboard-cover"
          />
          <h1 className={styles.description}>Mars Premium Experience</h1>

          <button
            type="submit"
            className={`${styles.button} ${styles.button2}`}
          >
            İncele
          </button>
        </div>

        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Teknolojiler/cinemini_slider.jpg"
            alt="Billboard-cover"
          />
          <h1 className={styles.description}>Türkiye’nin İlk Çocuk Sineması  Palladium’da!</h1>

          <button
            type="submit"
            className={`${styles.button} ${styles.button2}`}
          >
            İncele
          </button>
        </div>
      </Slider>
    </div>
  );
};

export default BillboardRow;
