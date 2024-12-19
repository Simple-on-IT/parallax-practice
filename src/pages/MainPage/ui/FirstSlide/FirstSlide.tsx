// data-swiper-parallax={speed}
import styles from '../MainPage.module.scss';

import BACK from '../../../../shared/images/first/back.png'
import MIDDLE from '../../../../shared/images/first/middle.png'
import FRONT from '../../../../shared/images/first/front.png'
import { Speed } from '../../model/types/speed';

export const FirstSlide = ({ imagesSpeed }: {
  imagesSpeed: Speed;
}) => {
  return (
    <>
      <img
        src={BACK}
        data-swiper-parallax={imagesSpeed.back}
        className={styles.image}
      />
      <img
        src={MIDDLE}
        data-swiper-parallax={imagesSpeed.middle}
        className={styles.image}
      />
      <img
        src={FRONT}
        data-swiper-parallax={imagesSpeed.front}
        className={styles.image}
      />
    </>
  )
}