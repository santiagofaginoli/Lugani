/** @format */

import React from "react";
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
  Navbar,
} from "@nextui-org/react";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>DivGeeks</title>
        <meta
          name='description'
          content='Desarrollo web rapido, moderno, bonito y confiable'
        />
        <meta name='author' content='DivGeeks' />
        <meta name='robots' content='index' />
        <meta
          name='keywords'
          content='desarrolo web, paginas web, web development, web page, nextJs, html, css, wonderful, increible, asombroso, incredible, amazing, empresa de desarrolo web, web development company'
        />
        <meta charset='utf-8' />
      </Head>
      <Grid.Container justify='center'>
        <Navbar className='navbar' variant='floating'>
          <Navbar.Content
            className='content-navbar'
            variant='highlight-rounded'>
            <Navbar.Link className='items-navbar' href='/'>
              Home
            </Navbar.Link>
            <Navbar.Link className='items-navbar' href='/contacto/contacto'>
              Contact
            </Navbar.Link>
            <Navbar.Link className='items-navbar' href='/#Project'>
              Work
            </Navbar.Link>
            <Navbar.Link className='items-navbar' href='/#Skills'>
              Skills
            </Navbar.Link>
          </Navbar.Content>
        </Navbar>
      </Grid.Container>
      {children}

      <Grid.Container className='Footer'>
        <Grid.Container justify='center' className='GridFooter2'>
          <Grid.Container xs={0} sm={5}></Grid.Container>
          <Grid.Container
            xs={2}
            sm={1}
            className='columnaContac'
            justify='center'
            css={{ mt: "30px" }}>
            <Grid.Container justify='center' xs={12}>
              <Grid justify='center' className='LineatituloContact' xs={12}>
                <Grid.Container justify='center' xs={12}>
                  <Button
                    isDisabled
                    css={{
                      maxHeight: "10px",
                      minWidth: "100%",
                      maxWidth: "80%",
                    }}
                    className='lineaFooter'></Button>
                </Grid.Container>
                <Grid.Container justify='center' xs={12}>
                  <Text className='textofooter' h3>
                    Contact
                  </Text>
                </Grid.Container>
              </Grid>
              <Grid justify='center' xs={12}>
                <Text className='textofooter' h4>
                  Gmail
                </Text>
              </Grid>
              <Grid justify='center' xs={12}>
                <Text className='textofooter' h4>
                  whatsapp
                </Text>
              </Grid>
              <Grid justify='center' xs={12}>
                <Text className='textofooter' h4>
                  instagram
                </Text>
              </Grid>
              <Grid justify='center' xs={12}>
                <Text className='textofooter' h4>
                  Tiktok
                </Text>
              </Grid>
            </Grid.Container>
          </Grid.Container>
          <Spacer x={2}></Spacer>
          <Grid.Container
            xs={2}
            sm={1}
            className='columnaContac'
            justify='center'
            css={{ mt: "30px" }}>
            <Grid.Container justify='center' xs={12}>
              <Grid justify='center' className='LineatituloContact' xs={12}>
                <Grid.Container justify='center' xs={12}>
                  <Button
                    isDisabled
                    css={{
                      maxHeight: "10px",
                      minWidth: "100%",
                      maxWidth: "80%",
                    }}
                    className='lineaFooter'></Button>
                </Grid.Container>
                <Grid.Container justify='center' xs={12}>
                  <Text className='textofooter' h3>
                    asdad
                  </Text>
                </Grid.Container>
              </Grid>
              <Grid justify='center' xs={12}>
                <Text className='textofooter' h4>
                  asdad
                </Text>
              </Grid>
              <Grid justify='center' xs={12}>
                <Text className='textofooter' h4>
                  asdasd
                </Text>
              </Grid>
              <Grid justify='center' xs={12}>
                <Text className='textofooter' h4>
                  asdasd
                </Text>
              </Grid>
              <Grid justify='center' xs={12}>
                <Text className='textofooter' h4>
                  asdsd
                </Text>
              </Grid>
            </Grid.Container>
          </Grid.Container>
          <Spacer x={2}></Spacer>
          <Grid.Container
            xs={2}
            sm={1}
            className='columnaContac'
            justify='center'
            css={{ mt: "30px" }}>
            <Grid.Container justify='center' xs={12}>
              <Grid justify='center' className='LineatituloContact' xs={12}>
                <Grid.Container justify='center' xs={12}>
                  <Button
                    isDisabled
                    css={{
                      maxHeight: "10px",
                      minWidth: "100%",
                      maxWidth: "80%",
                    }}
                    className='lineaFooter'></Button>
                </Grid.Container>
                <Grid.Container justify='center' xs={12}>
                  <Text className='textofooter' h3>
                    asdad
                  </Text>
                </Grid.Container>
              </Grid>
              <Grid justify='center' xs={12}>
                <Text className='textofooter' h4>
                  asdad
                </Text>
              </Grid>
              <Grid justify='center' xs={12}>
                <Text className='textofooter' h4>
                  asdasd
                </Text>
              </Grid>
              <Grid justify='center' xs={12}>
                <Text className='textofooter' h4>
                  asdasd
                </Text>
              </Grid>
              <Grid justify='center' xs={12}>
                <Text className='textofooter' h4>
                  asdsd
                </Text>
              </Grid>
            </Grid.Container>
          </Grid.Container>
        </Grid.Container>
      </Grid.Container>
    </>
  );
}
