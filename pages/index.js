import React from "react";
import { Grid, Spacer, Text, Card, Image, Progress, Row, Col, Button, Modal, Input } from "@nextui-org/react";
import Layout from "@/components/Layout";

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <Layout >
      {/*--------------------------------------Section de Home-----------------------------------------------------*/}
      <section id="Home" style={{ marginTop: "50px" }}>
        <Grid.Container justify="center">
          <Grid xs={12} justify="center">
            <Text className="titulo" >
              We are DivGeeks
            </Text>
          </Grid>
          <Grid className="titulo-abajo"  justify="center">
            <Text className="titulo" >
              Web developers
            </Text>
          </Grid>
          <Grid.Container justify="center">
            <Text className="frase">
              If you can imagine it, we can program it
            </Text>
          </Grid.Container>
        </Grid.Container>
      </section>
      <Spacer y={4} />
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
              <Card css={{ bg: "#E1C190", br: "64px",mb:'25px' }}>
                <Image
                  width={"100%"}
                  height={300}
                  layout="intrinsic"
                  src={"img/about.png"}
                />
              </Card>
            </Grid>
            <Grid xs={0} md={1}></Grid>
            <Grid xs={11} md={6} css={{ height: "300px" }}>
              <Card
                css={{
                  bg: "#DECAC9",
                  br: "64px",
                  p: "20px"
                }}
              >
                <Card.Body
                  css={{ textAlign: "center", alignItems: "center", flexDirection: "row" }}
                >
                  <Grid>
                    <Text>
                      We are a group formed by 3 Argentine members, who studied
                      programming 2 years ago. We focus on web development and
                      development of android mobile applications
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
            <Grid xs={11} md={6} css={{ height: "100%" }}>
              <Card css={{ bg: "#BAE0F5", br: "64px", p: "20px",mb:'25px' }}>
                <Card.Body
                  css={{ textAlign: "center", alignItems: "center", flexDirection: "row" }}
                >
                  <Grid>
                    <Text>
                      login llasdasdasdasdadh  ghads ghdas gjasd jas jhadsjsad
                    </Text>
                  </Grid>
                </Card.Body>
              </Card>
            </Grid>
            <Grid xs={0} md={1} ></Grid>
            <Grid xs={11} md={3}>
              <Card css={{ bg: "#D9D9D9", br: "64px", p: "20px" }}>
                <Grid.Container >
                  <Grid.Container>
                    <Text>Fronend</Text>
                  </Grid.Container>
                  <Grid.Container >
                    <Progress shadow color="secondary" status={"secondary"} size="sm" value={90} />
                  </Grid.Container>
                  <Grid.Container>
                    <Text>Backend</Text>
                  </Grid.Container>
                  <Grid.Container >
                    <Progress shadow color="secondary" status={"secondary"} size="sm" value={90} />
                  </Grid.Container>
                  <Grid.Container>
                    <Text>Fronend</Text>
                  </Grid.Container>
                  <Grid.Container >
                    <Progress shadow color="secondary" status={"secondary"} size="sm" value={90} />
                  </Grid.Container>
                  <Grid.Container>
                    <Text>Fronend</Text>
                  </Grid.Container>
                  <Grid.Container >
                    <Progress shadow className="color-prroges" size="sm" value={90} />
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
        <Grid.Container>
          <Grid.Container justify="center">
            <Grid>
              <Text className="titulo">Project</Text>
            </Grid>
          </Grid.Container>
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
            <Grid xs={5}>
              <Card css={{ bg: "#BAE0F5", br: "64px", p: "20px" }}>
                <Card.Body
                  css={{ textAlign: "center", alignItems: "center", flexDirection: "row", justifyContent: "center " }}
                >
                  <Grid justify="center">
                    <Image
                      width={"100%"}
                      height={'auto'}
                      layout="intrinsic"
                      src={"img/mensaje.png"}
                    />
                  </Grid>
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    alignItems: "center",
                    justifyContent: 'center',
                    position: "absolute",
                    bg: "transparent",
                    backdropFilter: "none",
                    bottom: '63%',
                    zIndex: 1,
                  }}
                >
                  <Button auto css={{ bg: 'transparent', color: 'black' }} onPress={handler}>
                    Click here
                  </Button>
                  {/*-------------------------------------------MODAL-----------------------------------------*/}
                  <Modal
                    closeButton
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                  >
                    <Modal.Header>
                      <Text id="modal-title" size={18}>
                        Welcome to
                        <Text b size={18}>
                          NextUI
                        </Text>
                      </Text>
                    </Modal.Header>
                    <Modal.Body>
                      <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                      />
                      <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                      />
                      <Row justify="space-between">
                        <Text size={14}>Forgot password?</Text>
                      </Row>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button auto flat color="error" onPress={closeHandler}>
                        Close
                      </Button>
                      <Button auto onPress={closeHandler}>
                        Sign in
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Card.Footer>
              </Card>
            </Grid>
            <Spacer />
            <Grid xs={5}>
              <Card css={{ bg: "#BAE0F5", br: "64px", p: "20px" }}>

              </Card>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </section>
      <Spacer y={4} />
    </Layout>
  );
}
