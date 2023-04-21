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
} from "@nextui-org/react";
import Image from "next/image";
import SvgNext from "./svgs/SvgNext";

export default function CardProjects({img, text, textTecnos, icon1, icon2, icon3, icon4, icon5}) {
  const [visible, setVisible] = useState(false);
  return (
    
        <Grid.Container justify='center'>
          <Grid xs={1} sm={0} />
          <Grid justify='center' xs={10} sm={3}>
            <Card
              onPress={() => setVisible(true)}
              isPressable
              css={{ bg: "#9FA6FF", br: "64px" }}>
              {/*<Image
                width={"100%"}
                height={"auto"}
                layout='intrinsic'
                src={img}
              />
              */}
              <Card.Body
                css={{
                  textAlign: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}>
                <Grid.Container>
                  <Grid>
                    <Text className='textoProject'>
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
          </Grid>
          <Grid xs={1} sm={0} />

          <Modal
            blur
            css={{ bg: "#16181a", p: 0 }}
            closeButton
            open={visible}
            onClose={() => setVisible(false)}
            aria-labelledby='modal-title'
            aria-describedby='modal-description'>
           {/*  <Image
              width={"100%"}
              height={"auto"}
              layout='intrinsic'
              src={img}
            />
            */}
            <Modal.Body>
              <Grid.Container>
                <Grid.Container>
                  <Text css={{ color: "white" }}>
                    {text}
                  </Text>
                </Grid.Container>
                <Grid.Container>
                  <Text css={{ color: "white" }}>
                   {textTecnos}
                  </Text>
                </Grid.Container>
              </Grid.Container>
            </Modal.Body>
            <Modal.Footer>
              <Grid.Container>
                <Grid.Container>
                  <Grid xs={6}>
                    <Button auto flat shadow>
                      {" "}
                      EXIT
                    </Button>
                  </Grid>
                  <Grid justify='end' xs={6}>
                    <Button auto flat shadow>
                      {" "}
                      ir a ver
                    </Button>
                  </Grid>
                </Grid.Container>
              </Grid.Container>
            </Modal.Footer>
          </Modal>
          <Spacer />
        </Grid.Container>
  
  );
}
