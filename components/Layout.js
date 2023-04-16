import React from "react";
import { Navbar, Button, Link, Text, Grid, Image } from "@nextui-org/react";


export default function Layout({ children }) {
  return (
    <>
      <Grid.Container justify="center">
          <Navbar className="navbar" variant="floating">
            <Navbar.Content className="content-navbar"  variant="highlight-rounded">
              <Navbar.Link className="items-navbar" href="/">Home</Navbar.Link>
              <Navbar.Link className="items-navbar" href="/contacto/contacto">Contact</Navbar.Link>
              <Navbar.Link className="items-navbar" href="/#Project">Work</Navbar.Link>
              <Navbar.Link className="items-navbar" href="/#Skills">Skills</Navbar.Link>
            </Navbar.Content>
            </Navbar>
    </Grid.Container >
      { children }
    </>
  );
}
