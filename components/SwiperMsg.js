/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Grid, Text } from "@nextui-org/react";
import Svg from "./Svg";

export default function SwiperMSG({ resenas }) {

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper'>
        {resenas.map((item) => (
          <SwiperSlide>
            <Grid.Container>
              <Grid.Container justify='center' xs={12}>
                <Text h2> {item.name}</Text>
              </Grid.Container>
              <Grid.Container justify='center' xs={12}>
                <Text h3>{item.message}</Text>
              </Grid.Container>
              <Grid.Container justify='center' xs={12}>
                {item.numStars == "1" ? <Svg /> :( 
                    console.log()
                )}
                {item.numStars == "2" ? (
                  <div>
                    <Svg />
                    <Svg />
                  </div>
                ) : (
                    console.log()
                )}
                {item.numStars == "3" ? (
                  <div>
                    <Svg />
                    <Svg />
                    <Svg />
                  </div>
                ) : (
                    console.log()
                )}
                {item.numStars == "4" ? (
                  <div>
                    <Svg />
                    <Svg />
                    <Svg />
                    <Svg />
                  </div>
                ) : (
                    console.log()
                )}
                {item.numStars == "5" ? (
                  <div>
                    <Svg />
                    <Svg />
                    <Svg />
                    <Svg />
                    <Svg />
                  </div>
                ) : (
                    console.log()
                )}
              </Grid.Container>
            </Grid.Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
