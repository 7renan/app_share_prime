import { divProperties } from "@fluentui/react";
import Image from "next/image";
import { useState } from "react";

import { Item } from "../../@types/Item"
import { FontIcon, initializeIcons, Link, Text } from "@fluentui/react";

// styles
import styles from './carousel.module.scss'

export interface ICarrosselProps {
    items: Item[];
  }


export function Carousel (props: ICarrosselProps){

    initializeIcons();
    const [current, setCurrent] = useState(0);
    const length = props.items.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (props.items.length <= 0) {
      return null;
    }

    return (
      <div className={styles.container}>
        <img className={styles.arrows} src="/previous.png" onClick={prevSlide} alt="Slide" />
        <section className={styles.slider}>
        {/* <div className={styles.leftArrow} onClick={prevSlide}>
        <Image
            width={40}
            height={40}
            src="/next.png"
        />
        </div>
        <div className={styles.rightArrow} onClick={nextSlide}>
          <Image
            width={40}
            height={40}
            src="/next.png"
            />
        </div> */}
        {props.items.map((slide, i) => {
          return (
            <>
              <div className={i === current ? styles.slideActive : styles.slide}>
              {i === current && (
                <div className={styles.contentCarousel}>
                  <div className={styles.carouselText}>
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                  </div>
                  <img className={styles.image} src={slide.img} alt="Slide" />
                </div>
              )}
            </div>
            </>
          );
        })}
      </section>
      <img className={styles.arrows} src="/next.png" onClick={nextSlide} alt="Slide" />
      </div>
        
    )
}