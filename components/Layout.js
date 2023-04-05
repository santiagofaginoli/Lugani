import React from "react";
import { Navbar, Button, Link, Text, Grid, Image } from "@nextui-org/react";


export default function Layout({ children }) {
  return (
    <>
      <Grid.Container justify="center">
        <Navbar className="navbar" variant="floating">
          <Navbar.Content className="content-navbar" hideIn="xs" variant="highlight-rounded">
            <Navbar.Link className="items-navbar" href="#">Features</Navbar.Link>
            <Navbar.Link className="items-navbar" href="#">
              Customers
            </Navbar.Link>
            <Navbar.Link className="items-navbar" href="#">Pricing</Navbar.Link>
            <Navbar.Link className="items-navbar" href="#">Company</Navbar.Link>
          </Navbar.Content>
        </Navbar>
      </Grid.Container>
      {children}
      <Grid.Container justify="center" style={{ marginTop: "80px", }} >
        <Grid.Container xs={3} alignItems="center" style={{ backgroundColor: "white", borderRadius: "25px", height: "80px" }} justify="center">
          <Grid xs={4}>
            <Image
              width={"70px"}
              height={"70px"}
              layout='intrinsic'
              alt={'instagram'}
              className="logo-ig"
              src={"/img/instagram.svg"}>
            </Image>
          </Grid>
          <Grid xs={4}>
            <Image
              width={"70px"}
              height={"70px"}
              layout='intrinsic'
              alt={'instagram'}
              className="logo-ig"
              src={"/img/instagram.svg"}>
            </Image>
          </Grid>
          <Grid xs={4}>
            <Image
              width={"70px"}
              height={"70px"}
              layout='intrinsic'
              alt={'instagram'}
              className="logo-ig"
              src={"/img/instagram.svg"}>
            </Image>
          </Grid>
        </Grid.Container>
      </Grid.Container>
    </>
  );
}
