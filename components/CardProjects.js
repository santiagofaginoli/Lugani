/** @format */

import React, { useState } from "react";
import {
  Grid,
  Spacer,
  Text,
  Card,
  Progress,
  Button,
  Modal,
  Input,
  Textarea,
  Loading,
  Col,
  Row,
  Image
} from "@nextui-org/react";
import SvgNext from "./svgs/SvgNext";
import Link from "next/link";

export default function CardProjects({ img, text, textTecnos, icon1, icon2, icon3, icon4, icon5,link }) {
  const [visible, setVisible] = useState(false);
  return (
    <Grid justify='center' css={{mb:"30px"}} xs={10} sm={3}>
      <Grid xs={0} sm={1}></Grid>
      <Card
        onPress={() => setVisible(true)}
        isPressable
        css={{ bg: "#9FA6FF", br: "64px" }}>
        <Image
          width={"100%"}
          height={"auto"}
          layout='intrinsic'
          src={img}
        />

        <Card.Body
          css={{
            textAlign: "center",
            alignItems: "center",
            flexDirection: "row",
          }}>
          <Grid.Container>
            <Grid>
              <Text css={{fontFamily:"Raleway"}}>
                En esta pag utilizamos las siguientes tecnologias:
              </Text>
            </Grid>
            <Grid.Container justify='center' gap={2}>
              <Grid>
                <SvgNext />
              </Grid>
              <Grid>
                <SvgNext />
              </Grid>
              <Grid>
                <SvgNext />
              </Grid>
              <Grid>
                <SvgNext />
              </Grid>
              <Grid>
                <SvgNext />
              </Grid>
            </Grid.Container>
          </Grid.Container>
        </Card.Body>
      </Card>
      <Grid xs={0} sm={1}></Grid>
      {/* ----------------------------------Modal------------------------------------  */}
      <Modal
        blur
        css={{ bg: "#16181a", p: 0,borderRadius:"45px" }}
        closeButton
        open={visible}
        onClose={() => setVisible(false)}
        aria-labelledby='modal-title'
        aria-describedby='modal-description'>
        <Image
          width={"100%"}
          height={"auto"}
          layout='intrinsic'
          src={img}
        />

        <Modal.Body>
          <Grid.Container>
            <Grid.Container>
              <Text css={{ color: "white",fontFamily:"Raleway" }}>
                {text}
              </Text>
            </Grid.Container>
            <Grid.Container>
              <Text css={{ color: "white",fontFamily:"Raleway"  }}>
                {textTecnos}
              </Text>
            </Grid.Container>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Grid.Container>
            <Grid.Container>
              <Grid xs={6}>
                <Button onPress={() => setVisible(false)} css={{bg:"#f7e7ce",color:"#000",boxShadow:"0 4px 14px 0 #f7e7ce",fontFamily:"Raleway"}} auto flat rounded >
                  EXIT
                </Button>
              </Grid>
              <Grid justify='end' xs={6}>
                <Button  css={{bg:"#f7e7ce",color:"#000",boxShadow:"0 4px 14px 0 #f7e7ce",fontFamily:"Raleway"}} auto flat rounded>
                  <Link href={link} target="_blac"> ir a ver</Link>
                </Button>
              </Grid>
            </Grid.Container>
          </Grid.Container>
        </Modal.Footer>
      </Modal>
    </Grid>
  );
}
