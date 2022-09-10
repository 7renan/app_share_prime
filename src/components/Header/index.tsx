import Image from "next/image"

// styles
import styles from './header.module.scss'
export function Header(){
    return (
        <div className={styles.header} >
            <div className={styles.content}>
            <Image
                src="/log.png"
                width={39}
                height={49}
            />

            <div className={styles.menu}>
                <div className={styles.menuItem}>
                    SLIDER
                </div>
                <div className={styles.menuItem}>
                    CADASTRO
                </div>
            </div>
            </div>
        </div>
    )
}