import React from "react";
import styles from "./styles/BillboardRow.module.css";
import "react-awesome-slider/dist/styles.css";
import Slider from "infinite-react-carousel";


const BillboardRow = () => {
  return (
    <div className={styles.frame}>
      <Slider dots>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Carousel/kova_misir_kampanyasi_1920x420.jpg"
            alt="Billboard-cover"
          />
          
          <h1 className={styles.description}>
          3 TL Farkla %30 Daha Fazla Mısır!

          </h1>
          
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            İncele
          </button>
        
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Carousel/pcr_3-03-20210922.jpg"
            alt="Billboard-cover"
          />
            <h1 className={styles.description}>
            Covid-19 Aşı  Genelgesi 
          
          </h1>
          
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/DUNE_1920x420_.jpg"
            alt="Billboard-cover"
          />
            <h1 className={styles.description}>
            Dune: Çöl Gezegeni Vizyonda!
          
          </h1>
          
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/CC_slider.jpg"
            alt="Billboard-cover"
          />
            <h1 className={styles.description}>
            Coca Cola'lı Menü İndirimli!
          
          </h1>
          
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Yeni_Kampanya__s_kl_k_artt_rma_2_1920x420.jpg"
            alt="Billboard-cover"
          />
            <h1 className={styles.description}>
            Cinemaximum’da Üç Deyince Kazanıyoruz!
          
          </h1>
          
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/hep_yek_slider.jpg"
            alt="Billboard-cover"
          />
            <h1 className={styles.description}>
            Hep Yek 4: Bela Okuma Altan
          
          </h1>
          
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Carousel/annette-revize.jpg"
            alt="Billboard-cover"
          />
            <h1 className={styles.description}>
            Annette Vizyonda! Hemen Tıkla Biletini Al!
          
          </h1>
          
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/Carousel/halloween-kills.jpg"
            alt="Billboard-cover"
          />
            <h1 className={styles.description}>
            Cadılar Bayramı Öldürür Vizyonda!
          
          </h1>
          
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/YEN_-Pazar_gorseli_yerine_yeni_Paconlu_Gorsel_1920x420.jpg"
            alt="Billboard-cover"
          />
            <h1 className={styles.description}>
            Sendromsuz Pazartesi Cinemaximum’da! 
          
          </h1>
          
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            İncele
          </button>
        </div>
        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/CGV_Ogrenci_isi_indirim_SM_1920x420.jpg"
            alt="Billboard-cover"
          />
            <h1 className={styles.description}>
             İndirim Cinemaximum'da!
          
          </h1>
          
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            İncele
          </button>
        </div>

        <div>
          <img
            className={styles.image}
            src="https://www.cinemaximum.com.tr/Files/DUNE_1920x420_.jpg"
            alt="Billboard-cover"
          />
            <h1 className={styles.description}>
            Dune: Çöl Gezegeni Vizyonda!
          
          </h1>
          
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            İncele
          </button>
        </div>
      </Slider>
    </div>
  );
};

export default BillboardRow;
