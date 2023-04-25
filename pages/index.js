/** @format */

import React, { useState, useEffect } from "react";
import {
  Grid,
  Spacer,
  Text,
  Card,
  Image,
  Progress,
  Button,
  Modal,
  Input,
  Textarea,
  Loading,
  Col,
  Row,
} from "@nextui-org/react";
import { MongoClient } from "mongodb";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Layout from "/components/Layout";
import SwiperMSG from "/components/SwiperMsg";
import Swal from "sweetalert2";
import CardProjects from "@/components/CardProjects";
export default function Home({ resenas, projects }) {
  const [visible, setVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const [resena, setResena] = useState({
    name: "",
    message: "",
    numStars: "",
    day: "",
    month: "",
    year: "",
  });
  const verificacion = () => {
    if (!resena.name || !resena.message || !resena.numStars) {
      console.log(resena)

      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "All fields are required!",
      });
    } else {
      handleSubmit();
    }
    setVisible(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth();
    const ano = fecha.getFullYear();
    setResena({...resena, day: dia, month: mes + 1, year: ano });
    console.log(resena)

    try {
      await fetch(`/api/resena`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resena),
      });
    } catch (error) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "error almandarlo",
      });
    }
    setLoading(false);
    setVisible(false);
    setResena({
      name: "",
      message: "",
      numStars: "",
      day: "",
      month: "",
      year: "",
    });
    Swal.fire({
      icon: "success",
      title: "Thank you",
      text: "Your review was sent",
    });

  };
  //* Framer Motion*//
  const count = useMotionValue(0);
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const rounded1 = useTransform(count1, (latest) => Math.round(latest));
  const rounded2 = useTransform(count2, (latest) => Math.round(latest));
  const rounded3 = useTransform(count3, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 95, { duration: 10 });

    return controls.stop;
  }, []);

  useEffect(() => {
    const controls1 = animate(count1, 80, { duration: 10 });

    return controls1.stop;
  }, []);

  useEffect(() => {
    const controls2 = animate(count2, 90, { duration: 10 });

    return controls2.stop;
  }, []);

  useEffect(() => {
    const controls3 = animate(count3, 85, { duration: 10 });

    return controls3.stop;
  }, []);

  return (
    <Layout>
      {/*--------------------------------------Section de Home-----------------------------------------------------*/}
      <section id="Home" style={{ marginTop: "50px" }}>
        <Grid.Container justify="center">
          <Grid xs={12} justify="center">
            <Text className="titulo divgeek">We are DivGeeks</Text>
          </Grid>
          <Grid className="titulo-abajo" justify="center">
            <Text className="titulo divgeek">Web developers</Text>
          </Grid>
          <Grid.Container justify="center">
            <Text className="frase divgeek">
              If you can imagine it, we can program it
            </Text>
          </Grid.Container>
        </Grid.Container>
      </section>
      <Spacer y={15} />
      <Modal
        blur
        css={{ bg: "none", shadow: "none" }}
        aria-labelledby="modal-title"
        open={loading}
        onClose={() => setLoading(false)}
      >
        <Loading size="xl" color="secondary" />
      </Modal>
      {/* --------------------------------------Section de About-----------------------------------------------------*/}
      <section id="About">
        <Grid.Container>
          <Grid.Container justify="center">
            <Grid>
              <Text className="titulo">About us</Text>
            </Grid>
          </Grid.Container>
          <Grid.Container
            alignItems="center"
            justify="center"
            style={{ marginTop: "25px" }}
          >
            <Grid xs={11} md={4}>
              <Card css={{ bg: "#E1C190", br: "64px", mb: "25px", p: "20px" }}>
                <Image
                  width={"100%"}
                  height={300}
                  layout="intrinsic"
                  src={"img/about.png"}
                />
                <Card.Body
                  css={{
                    textAlign: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Grid>
                    <Text className="cardText">
                      We are a group formed by 3 Argentine members, who studied
                      programming 2 years ago. We focus on web development and
                      development of android mobile applications.
                    </Text>
                  </Grid>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={0} md={1}></Grid>
            <Grid xs={11} md={6} css={{ height: "300px" }}>
              <Card
                css={{
                  bg: "#DECAC9",
                  br: "64px",
                  p: "20px",
                }}
              >
                <Card.Body
                  css={{
                    textAlign: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Grid>
                    <Text className="cardText">
                      We are a group integrated by 3 Argentinian members, who
                      started studying programming 2 years ago. We focus on web
                      and android mobile applications development, we are about
                      to start our university's computer cience carrear, we love
                      challenges and the usage of modern technology.
                    </Text>
                  </Grid>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </section>
      <Spacer y={4} />
      {/* --------------------------------------Section de Skills-----------------------------------------------------*/}
      <section id="Skills">
        <Grid.Container justify="center">
          <Grid.Container justify="center">
            <Grid>
              <Text className="titulo">Skills</Text>
            </Grid>
          </Grid.Container>
          <Grid.Container
            alignItems="center"
            justify="center"
            style={{ marginTop: "25px" }}
          >
            <Grid xs={11} md={6} css={{ height: "300px" }}>
              <Card css={{ bg: "#BAE0F5", br: "64px", p: "20px", mb: "25px" }}>
                <Card.Body
                  css={{
                    textAlign: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Grid>
                    <Text className="cardText">
                      We started studying 2 years ago with the basic html, css,
                      sass, bootstrap and javascript files, then we moved to
                      React where we focused on the manage of components and
                      different files, once we got better we studied react's
                      framework "next.js", finally, we are studying NextUI, the
                      latest techonogoly available, we have deep knowledge into
                      developing resposive projects, we can also link a Mongo
                      database to the website to save information like stocks,
                      employees, etc.
                    </Text>
                  </Grid>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={0} md={1}></Grid>
            <Grid xs={11} md={3}>
              <Card css={{ bg: "#D9D9D9", br: "64px", p: "20px" }}>
                <Grid.Container>
                  <Grid.Container>
                    <Grid xs={6}>
                      <Text className="textoSkills">Frontend</Text>
                    </Grid>
                    <Grid justify="end" xs={5}>
                      <motion.div className="textoSkills">{rounded}</motion.div>
                    </Grid>
                    <Spacer></Spacer>
                  </Grid.Container>
                  <Grid.Container>
                    <Progress
                      shadow
                      color="secondary"
                      status={"secondary"}
                      size="sm"
                      value={95}
                    />
                  </Grid.Container>
                  <Grid.Container>
                    <Grid xs={6}>
                      <Text className="textoSkills">Backend</Text>
                    </Grid>
                    <Grid justify="end" xs={5}>
                      <motion.div className="textoSkills">
                        {rounded1}
                      </motion.div>
                    </Grid>
                  </Grid.Container>
                  <Grid.Container>
                    <Progress
                      shadow
                      color="secondary"
                      status={"secondary"}
                      size="sm"
                      value={80}
                    />
                  </Grid.Container>
                  <Grid.Container>
                    <Grid xs={6}>
                      <Text className="textoSkills">Next JS</Text>
                    </Grid>
                    <Grid justify="end" xs={5}>
                      <motion.div className="textoSkills">
                        {rounded2}
                      </motion.div>
                    </Grid>
                  </Grid.Container>
                  <Grid.Container>
                    <Progress
                      shadow
                      color="secondary"
                      status={"secondary"}
                      size="sm"
                      value={90}
                    />
                  </Grid.Container>
                  <Grid.Container>
                    <Grid xs={6}>
                      <Text className="textoSkills">Next UI</Text>
                    </Grid>
                    <Grid justify="end" xs={5}>
                      <motion.div className="textoSkills">
                        {rounded3}
                      </motion.div>
                    </Grid>
                  </Grid.Container>
                  <Grid.Container>
                    <Progress
                      shadow
                      className="color-prroges"
                      size="sm"
                      value={85}
                    />
                  </Grid.Container>
                </Grid.Container>
              </Card>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </section>
      <Spacer y={4} />
      {/* --------------------------------------Section de Project-----------------------------------------------------*/}
      <section id="Project">
        <Grid.Container justify="center">
          <Grid>
            <Text className="titulo">Work</Text>
          </Grid>
        </Grid.Container>
        <Grid.Container justify="center">
          {projects.map((project) => (
            <Grid justify='center' css={{mb:"30px"}} xs={10} sm={3} key={project.text}>
            <CardProjects
              text={project.text}
              textTecnos={project.textTecnos}
              img={project.img}
              icon1={project.icon1}
              icon2={project.icon2}
              icon3={project.icon3}
              icon4={project.icon4}
              icon5={project.icon5}
              link={project.link}
            ></CardProjects>
            </Grid>
          ))}
        </Grid.Container>
      </section>
      <Spacer y={4} />
      {/* --------------------------------------Section de Reviews----------------------------------------------------- */}
      <section id="Reviews">
        <Grid.Container>
          <Grid.Container justify="center">
            <Grid>
              <Text className="titulo">Reviews</Text>
            </Grid>
          </Grid.Container>
          <Grid.Container justify="center">
            <Grid css={{ minHeight: 300 }} xs={8}>
              <SwiperMSG resenas={resenas}></SwiperMSG>
            </Grid>
          </Grid.Container>
          <Grid.Container css={{ mt: "30px" }} justify="center">
            <Grid>
              <Button
                css={{ bg: "#025a4e;" }}
                id="boton-Reviws"
                rounded
                shadow
                onPress={() => setVisible(true)}
              >
                Send Reviews
              </Button>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </section>
      {/*-------------------------------------------MODAL-----------------------------------------*/}
      <Modal
        blur
        css={{ bg: "#16181a" }}
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={() => setVisible(false)}
      >
        <Modal.Header>
          <Text css={{ color: "#ffffff" }} id="modal-title" b size={18}>
            DivGeeks
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input 
          aria-labelledby="tac" 
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Name"
            name="name"
            value={resena.name}
            onChange={(e) => {
              setResena({
                ...resena,
                [e.target.name]: e.target.value,
              });
            }}
            contentLeft={
              <svg
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="User / User_02">
                    {" "}
                    <path
                      id="Vector"
                      d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
                      stroke="#3a3d44"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            }
          />
          <Textarea
            bordered
            color="primary"
            fullWidth
            size="lg"
            placeholder="✉ Message"
            name="message"
            value={resena.message}
            onChange={(e) => {
              setResena({
                ...resena,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <Grid.Container justify="center">
            <Grid>
              <div class="clasificacion">
                <Input aria-labelledby="tac" 
                  id="radio1"
                  type="radio"
                  name="numStars"
                  value="5"
                  onChange={(e) => {
                    setResena({
                      ...resena,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <label aria-label="tac" for="radio1">
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>star</title>{" "}
                      <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>{" "}
                    </g>
                  </svg>
                </label>
                <Input aria-labelledby="tac" 
                  id="radio2"
                  type="radio"
                  name="numStars"
                  value="4"
                  onChange={(e) => {
                    setResena({
                      ...resena,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <label aria-label="tac" for="radio2">
                  {" "}
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>star</title>{" "}
                      <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>{" "}
                    </g>
                  </svg>
                </label>
                <Input aria-labelledby="tac" 
                  id="radio3"
                  type="radio"
                  name="numStars"
                  value="3"
                  onChange={(e) => {
                    setResena({
                      ...resena,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <label aria-label="tac" for="radio3">
                  {" "}
                  <svg
                    f
                    width="64px"
                    height="64px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>star</title>{" "}
                      <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>{" "}
                    </g>
                  </svg>
                </label>
                <Input aria-labelledby="tac" 
                  id="radio4"
                  type="radio"
                  name="numStars"
                  value="2"
                  onChange={(e) => {
                    setResena({
                      ...resena,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <label aria-label="tac" for="radio4">
                  {" "}
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>star</title>{" "}
                      <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>{" "}
                    </g>
                  </svg>
                </label>
                <Input aria-labelledby="tac" 
                  id="radio5"
                  type="radio"
                  name="numStars"
                  value="1"
                  onChange={(e) => {
                    setResena({
                      ...resena,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <label aria-label="tac" for="radio5">
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>star</title>{" "}
                      <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>{" "}
                    </g>
                  </svg>{" "}
                </label>
              </div>
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            css={{ bg: "#3a3d44", color: "White" }}
            auto
            flat
            onPress={() => setVisible(false)}
          >
            Close
          </Button>
          <Button
            css={{ bg: "#3a3d44", color: "White" }}
            auto
            onPress={() => verificacion()}
          >
            Send{" "}
            <svg
              fill="#fff"
              width="40px"
              height="40px"
              viewBox="-8 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>paper-plane</title>{" "}
                <path d="M5.64 25.24c-0.12 0-0.24-0.040-0.36-0.080-0.28-0.16-0.48-0.44-0.48-0.76v-4.36c0-0.2 0.080-0.4 0.2-0.56l6-6.6c0.32-0.36 0.84-0.36 1.2-0.040s0.36 0.84 0.040 1.2l-5.76 6.32v2.36l3.36-2.52c0.24-0.16 0.56-0.2 0.8-0.12l2.12 0.84 1.8-11.8-12 6.68 1.92 1.12c0.4 0.24 0.52 0.76 0.28 1.16s-0.76 0.52-1.16 0.28l-3.2-1.88c-0.28-0.16-0.4-0.44-0.4-0.72 0-0.32 0.16-0.56 0.44-0.72l14.8-8.16c0.28-0.16 0.64-0.12 0.88 0.040 0.28 0.2 0.4 0.48 0.36 0.8l-2.24 14.52c-0.040 0.24-0.2 0.48-0.4 0.6s-0.48 0.16-0.72 0.040l-2.68-1.080-4.32 3.24c-0.12 0.12-0.28 0.2-0.48 0.2z"></path>{" "}
              </g>
            </svg>
          </Button>
        </Modal.Footer>
      </Modal>
      <Spacer y={4} />
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db();
  const resena = await db
    .collection("resenas")
    .find()
    .sort({ $natural: -1 })
    .limit(7)
    .toArray();

  const res = await fetch(
    "https://6442dd1576540ce225973a12.mockapi.io/projects"
  );
  const projects = await res.json();
  return {
    props: {
      resenas: JSON.parse(JSON.stringify(resena)),
      projects: projects,
    },
  };
}
