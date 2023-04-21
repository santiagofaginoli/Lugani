/** @format */
import React from "react";

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
  Image,
} from "@nextui-org/react";
import Form from "/components/Form";
import Layout from "/components/Layout";


export default function contacto() {

  return (
    <Layout>
      <Spacer></Spacer>
      <Grid.Container justify="center">
        <Grid.Container justify="center" xs={12}>
          <Grid sm={0} xs={12} justify="center">
            <Text className="titulo" h1>
              Contact us
            </Text>
          </Grid>
        </Grid.Container>
        <Grid.Container justify="center" xs={12}>
          <Card className="card-contacto" css={{ mw: "80%" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 0 }}>
              <Grid sm={12} xs={0}>
                <Text className="titulo" h1>
                  Contact us
                </Text>
              </Grid>
            </Card.Header>
            <Card.Body css={{ py: "$10" }}>
            <Spacer y={4}></Spacer>
              <Grid.Container alignItems="center">
                <Grid.Container xs={12} md={6}>
                  <Grid alignItems="center">
                    <Form></Form>
                    <Spacer />
                  </Grid>
                </Grid.Container>
                <Grid.Container xs={12} md={6}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108962.25256146061!2d-64.58213806964459!3d-31.41218659357473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6640d6777c71%3A0x75c24ab6cb121bed!2sVilla%20Carlos%20Paz%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1681626852287!5m2!1ses-419!2sar"
                    width={"100%"}
                    height={"350px%"}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Grid.Container>
              </Grid.Container>
            </Card.Body>
          </Card>
        </Grid.Container>
      </Grid.Container>
    </Layout>
  );
}
