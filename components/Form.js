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
        <form>
          <Grid.Container>
            <Grid.Container justify="center">
              <Grid justify="center" xs={4}>
                <Input
                  css={{ h: "100%", w: "100%" }}
                  labelPlaceholder="Name"
                  arial-label="nombre"
                  type="text"
                  color="success"
                  bordered
                  status="default"
                  name="nombre"
                  id="nombre"
                  underlined
                />
              </Grid>

              <Spacer></Spacer>
              <Grid xs={4}>
                <Input
                  css={{ h: "100%", w: "100%" }}
                  labelPlaceholder="Email"
                  arial-label="email"
                  type="text"
                  color="success"
                  bordered
                  status="email"
                  name="email"
                  id="email"
                  underlined
                />
              </Grid>
            </Grid.Container>
            <Spacer y={1}></Spacer>
            <Grid.Container justify="center">
              <Grid xs={7}>
                <Textarea
                  Placeholder="Message"
                  type="text"
                  color="success"
                  bordered
                  status="default"
                  name="mensaje"
                  id="mensaje"
                  minRows={5}
                  maxRows={10}
                  css={{ h: "100%", w: "100%", color: "Black" }}
                />
              </Grid>
            </Grid.Container>
            <Spacer y={1}></Spacer>
            <Grid.Container>
              <Grid xs={12} justify="center">
                <Button type="submit" className="boton-form">
                  Send
                </Button>
              </Grid>
            </Grid.Container>
          </Grid.Container>
        </form>
      </Grid.Container>
    );
  }
}