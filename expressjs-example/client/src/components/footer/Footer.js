import React from 'react';
import {
  ImFacebook2, ImInstagram, ImTwitter, ImYoutube,
} from 'react-icons/im';
import styles from './styles/footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles['flex-container']}>
        <div className={styles.title}>
          <ImFacebook2 className={styles.icons} />
          <ImInstagram className={styles.icons} />
          <ImTwitter className={styles.icons2} />
          <ImYoutube className={styles.icons2} />
        </div>
        <br/>
        <br/>
        <br/>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.link} href="#">Vizyonda</div>
            <div className={styles.link} href="#">Yakında</div>
            <div className={styles.link} href="#">Sinemalar</div>
            <div className={styles.link} href="#">CGV Arthouse</div>
            <div className={styles.link} href="#">CGV Cinema Club</div>
            <div className={styles.link} href="#">Ayrıcalıklı Salonlar</div>
            <div className={styles.link} href="#">Kampanyalar</div>
            <div className={styles.link} href="#">Özel Etkinlik Talepleri</div>
          </div>

          <div className={styles.column}>
            <div className={styles.link} href="#">E-Bilet</div>
            <div className={styles.link} href="#">İade İşlemleri</div>
            <div className={styles.link} href="#">İnsan Kaynakları</div>
            <div className={styles.link} href="#">Sıkça Sorulan Sorular</div>
            <div className={styles.link} href="#">İşlem Rehberi</div>
            <div className={styles.link} href="#">Hakkımızda</div>
            <div className={styles.link} href="#">Yorum ve Öneriler</div>
            <div className={styles.link} href="#">İletişim</div>

          </div>

          <div className={styles.column}>
            <div className={styles.link} href="#">KVK Aydınlatma Bildirimi</div>
            <div className={styles.link} href="#">Kamera Sistemleri Bildirimi</div>
            <div className={styles.link} href="#">KVKK Basvuru Formu</div>
            <div className={styles.link} href="#">KVK Politikasi</div>
          </div>

          <div className={styles.column}>
            <div className={styles.link} href="#">Gizlilik</div>
            <div className={styles.link} href="#">Kullanım Koşulları</div>
            <div className={styles.link} href="#">Mesafeli Bilet Satış Sözleşmesi</div>
            <div className={styles.link} href="#">Reklam vermek için: www.marsmedia.com.tr</div>
            <div className={styles.link} href="#">© Copyright 2021</div>
          </div>

        </div>
        
      </div>
    
    </div>
  );
}

export default Footer;