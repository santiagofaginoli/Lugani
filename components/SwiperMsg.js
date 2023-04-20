/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Grid, Text, Avatar, Card, Textarea } from "@nextui-org/react";
import Svg from "./svgs/Svg";
import { color } from "framer-motion";

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
        className="mySwiper"
      >
        {resenas.map((item) => (
          <SwiperSlide>
            <Grid.Container>
              <Grid.Container justify="center" xs={12}>
                <Card
                  css={{
                    bg: "#E3DAC9",
                    border: ".5px solid black",
                    mb: "10px",
                    width: "60%",
                  }}
                >
                  <Card.Body>
                    <Grid.Container
                      justify="flex-start"
                      xs={12}
                      alignItems="center"
                    >
                      <Grid css={{ ml: "5px" }}>
                        <Avatar
                          squared
                          css={{ border: "1px solid black", mr: "10px", h:"20px", padding: "0" }}
                          icon={
                            <svg
                              width="25px"
                              height="25px"
                              viewBox="-2.4 -2.4 28.80 28.80"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#000000"
                              transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                              stroke="#ffffff"
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke="#CCCCCC"
                                stroke-width="0.048"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <title></title>{" "}
                                <g id="Complete">
                                  {" "}
                                  <g id="user">
                                    {" "}
                                    <g>
                                      {" "}
                                      <path
                                        d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2"
                                        fill="none"
                                        stroke="#000000"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.2"
                                      ></path>{" "}
                                      <circle
                                        cx="12"
                                        cy="7"
                                        fill="none"
                                        r="4"
                                        stroke="#000000"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.2"
                                      ></circle>{" "}
                                    </g>{" "}
                                  </g>{" "}
                                </g>{" "}
                              </g>
                            </svg>
                          }
                        />
                      </Grid>
                      <Grid>
                        <Text h4> {item.name} {item.day}/{item.month}/{item.year}</Text>
                      </Grid>
                    </Grid.Container>
                    <Textarea
                    id="TextArea"
                      className="textoArea"
                      css={{ width: "100%" }}
                      initialValue={item.message}
                      rows={4}
                      readOnly={true}
                    />

                    <Grid.Container
                      justify="center"
                      css={{ mb: "10px" }}
                      xs={12}
                    >
                      {item.numStars == "1" ? <Svg /> : console.log()}
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
                  </Card.Body>
                </Card>
              </Grid.Container>
            </Grid.Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
