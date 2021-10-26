import React, { Component } from 'react'
import styles from './styles/cinema.module.css';



export default class Cinema extends Component {
    render() {
        return (
            <div>
            <div className={styles.container}>
              <div className={styles['info-container']}>
                <h1 className={styles.text}>
                 Deneme
                </h1>
                <h2 className={styles['movie-info']}></h2>
                <div className={styles['button-container']}>
                
                </div>
              </div>
              <div className={styles.block} />
              <div className={styles['image-container']}>
                <img
                  className={styles.image}
                  src=""
                  alt="saS"
                />
              </div>
            </div>
          </div>
        )
    }
}
