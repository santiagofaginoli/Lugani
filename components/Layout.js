import React from "react";
import { Navbar, Button, Link, Text, Grid, Image } from "@nextui-org/react";


export default function Layout({ children }) {
  return (
    <>
      <Grid.Container    justify="center">
        <Navbar className="navbar" variant="floating">
          <Navbar.Content className="content-navbar" hideIn="xs" variant="highlight-rounded">
            <Navbar.Link className="items-navbar" href="/">Home</Navbar.Link>
            <Navbar.Link className="items-navbar" href="/contacto/contacto">Contacto</Navbar.Link>
            <Navbar.Link className="items-navbar" href="/#About">About</Navbar.Link>
            <Navbar.Link className="items-navbar" href="/#Project">Projects</Navbar.Link>
            <Navbar.Link className="items-navbar" href="/#Skills">Skills</Navbar.Link>
          </Navbar.Content>
        </Navbar>
      </Grid.Container>
      {children}
    </>
  );
}
