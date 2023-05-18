/** @format */

import React from "react";
import { Grid, Spacer, Text, Link, Navbar, Avatar } from "@nextui-org/react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>DivGeeks</title>
        <link rel="icon" type="image/png" href="/img/logo.png"  ></link>
        <meta
          name="description"
          content="Desarrollo web rapido, moderno, bonito y confiable"
        />
        <meta name="author" content="DivGeeks" />
        <meta name="robots" content="index" />
        <meta lang="es"/>
        <meta
          name="keywords"
          content="desarrolo web, paginas web, web development, web page, nextJs, html, css, wonderful, increible, asombroso, incredible, amazing, empresa de desarrolo web, web development company"
        />
        <meta charset="utf-8" />
      </Head>
      <Grid.Container justify="center">
        <Navbar className="navbar" variant="floating">
          <Navbar.Content
            className="content-navbar"
            variant="highlight-rounded"
          >
            <Navbar.Link className="items-navbar notranslate" href="/">
              Home
            </Navbar.Link>
            <Navbar.Link className="items-navbar notranslate" href="/contacto/contacto">
              Contacto
            </Navbar.Link>
            <Navbar.Link className="items-navbar notranslate" href="/#Project">
              Trabajos
            </Navbar.Link>
            <Navbar.Link className="items-navbar notranslate" href="/#Skills">
              Habilidades
            </Navbar.Link>
          </Navbar.Content>
        </Navbar>
      </Grid.Container>
      {children}

      <Grid.Container className="Footer">
        <Grid.Container justify="center" className="GridFooter2">
          <Grid.Container
            sm={5}
            xs={12}
            css={{ ml: "15px" }}
            justify="flex-start"
          >
            <Grid.Container xs={12}>
              <Grid>
                <Avatar
                  src="/img/logo.png"
                  css={{ h: "60px", w: "60px" }}
                  id="avatarFooter"
                />
              </Grid>
              <Grid>
                <Grid css={{ mb: "5px" }}>
                  <Text h2>DivGeeks</Text>
                </Grid>
                <Grid css={{ mt: "-25px", ml: "2px" }}>
                  <Text className="fraseFooter" h6>
                    {" "}
                    If you can imagine it, we can program it
                  </Text>
                </Grid>
              </Grid>
            </Grid.Container>
          </Grid.Container>
          <Grid.Container sm={1} xs={0}></Grid.Container>
          <Grid.Container justify="center" sm={5} xs={12}>
            <Grid.Container justify="center" gap={2}>
              <Grid>
                <Link target="_blank" href="https://www.instagram.com/divgeeks/" >
                  <Text className="textofooter" h4 >
                    Instagram
                  </Text>
                </Link>
              </Grid>
              <Grid>
                <Link target="_blank" href="http://wa.me/3541389764">
                  <Text className="textofooter"  h4>
                    Whatsapp
                  </Text>
                </Link>
              </Grid>
              <Grid>
                <Link target="_blank" href="https://www.facebook.com/people/Div-Geeks/pfbid0Uww2po6mv4b4GyKsVnRCHgHgvWejM48qxqpTfEdfzk2S8feXEWSLrLELCV84mio5l/">
                  <Text className="textofooter" h4>
                    Facebook
                  </Text>
                </Link>
              </Grid>
              <Grid>
                <Link target="_blank" href="/contacto/contacto">
                  <Text className="textofooter" h4>
                    Gmail
                  </Text>
                </Link>
              </Grid>
            </Grid.Container>
          </Grid.Container>

          <Grid.Container justify="center" css={{ mt: "-50px" }}>
            <Grid>
              <Text
                href=""
                css={{
                  color: "#dad0d0",
                  fontFamily: "Raleway",
                  fontWeight: "600",
                }}
              >
                © 2023 DivGeeks. Portafolio web developers.
              </Text>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </Grid.Container>
    </>
  );
}
