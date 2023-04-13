import React from "react";
import { Grid, Spacer, Text, Card, Image, Progress } from "@nextui-org/react";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <section style={{ marginTop: "50px" }}>
        <Grid.Container justify="center">
          <Grid justify="center">
            <Text className="titulo" h1>
              We are DivGeeks <br></br>
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
      <section>
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
            <Grid xs={12} md={4}>
              <Card css={{ bg: "#E1C190", br: "64px" }}>
                <Image
                  width={"100%"}
                  height={300}
                  layout="intrinsic"
                  src={"img/about.png"}
                />
              </Card>
            </Grid>
            <Spacer x={2}></Spacer>
            <Grid xs={12} md={6} css={{ height: "100%" }}>
              <Card
                css={{
                  bg: "#DECAC9",
                  br: "64px",
                  width: "100%",
                  height: "auto",
                  p:"20px"
                }}
              >
                <Card.Body
                  css={{ py: "$10", alignItems: "center", textAlign: "center" }}
                >
                  <Text>
                    We are a group formed by 3 Argentine members, who studied
                    programming 2 years ago. We focus on web development and
                    development of android mobile applications
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </section>
      <section>
        <Grid.Container>
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
            <Grid xs={12} md={7} css={{ height: "100%" }}>
              <Card css={{ bg: "#BAE0F5", br: "64px",p:"20px" }}>
                <Card.Body>
                  <Text>
                    login llasdasdasdasdadh  ghads ghdas gjasd jas jhadsjsad
                  </Text>
                </Card.Body>
              </Card>
            </Grid>
            <Spacer></Spacer>
            <Grid xs={12} md={4}>
              <Card css={{ bg: "#D9D9D9", br: "64px",p:"20px" }}>
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
        <Spacer></Spacer>
      </section>
    </Layout>
  );
}
