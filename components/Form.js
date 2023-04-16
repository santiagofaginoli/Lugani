import React, { Component } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Text,
  Container,
  Grid,
  Spacer,
  Input,
  Textarea,
} from "@nextui-org/react";

export default class Form extends Component {
  render() {
    return (
      <Grid.Container alignItems="center" justify="center">
        <form >
          <Grid.Container >
            <Grid.Container justify="center">
              <Grid justify="center" xs={4}>
                <Input
                  aria-label="nombre"
                  css={{ h: "100%", w: "100%" }}
                  placeholder="Nombre"
                  type="text"
                  id="nombre"
                  name="nombre"
                />
              </Grid>

              <Spacer></Spacer>
              <Grid xs={4}>
                <Input
                  aria-label="email"
                  css={{ h: "100%", w: "100%" }}
                  placeholder="Email"
                  type="text"
                  id="email"
                  name="email"
                />
              </Grid>
            </Grid.Container>
            <Spacer y={1}></Spacer>
            <Grid.Container justify="center">
              <Grid xs={7}>
                <Textarea
                aria-label="mensaje"
                  placeholder="Contenido"
                  id="mensaje"
                  name="mensaje"
                  type="text"
                  minRows={5}
                  maxRows={10}
                  css={{ h: "100%", w: "100%" }}
                />
              </Grid>
            </Grid.Container>
            <Spacer y={1}></Spacer>
            <Grid.Container>
              <Grid xs={12} justify="center">
                <Button  type="submit" className="boton-form">
                  Enviar
                </Button>
              </Grid>
            </Grid.Container>
          </Grid.Container>
        </form>
      </Grid.Container>
    );
  }
}