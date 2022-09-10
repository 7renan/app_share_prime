import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

// styles
import styles from './slider.module.scss'

export function Slider (){
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <div>
                <Image
                    src="/previous.png"
                    width={50}
                    height={20}
                />
            </div>
            <div className={styles.containerCarousel}>

            </div>
            <div>
                <Image
                    src="/next.png"
                    width={50}
                    height={20}
                />
            </div>
        </div>
        </div>
    )
}