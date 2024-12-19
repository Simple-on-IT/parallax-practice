import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import styles from '../MainPage.module.scss';

import { Mousewheel, Parallax } from 'swiper/modules';
import { FirstSlide } from '../FirstSlide/FirstSlide';
import { SecondSlide } from '../SecondSlide/SecondSlide';
import { Speed } from '../../model/types/speed';

const imagesSpeed: Speed = {
  // заполните поля
}

export const MainPage = () => {
  return (
    <>
      <Swiper
        direction="vertical" // Вертикальная прокрутка
        slidesPerView={1}    // Одна страница на экране
        spaceBetween={0}
        mousewheel={true}    // Включаем прокрутку мышью
        style={{ height: '100vh', width: '100vw' }}
      >
        <SwiperSlide className={styles.slide}>
          <FirstSlide imagesSpeed={imagesSpeed} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <SecondSlide imagesSpeed={imagesSpeed} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
