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
  Image,
} from "@nextui-org/react";
import {
  SvgNext,
  SvgBootstrap,
  SvgCss,
  SvgFirebase,
  SvgFramer,
  SvgHtml,
  SvgMockApi,
  SvgMongo,
  SvgNextUi,
  SvgReactNative,
  SvgSass,
  SvgJava,
} from "./svgs";
import Link from "next/link";

export default function CardProjects({
  img,
  text,
  textTecnos,
  link,
  nextjs,
  nextui,
  bootstrap,
  sass,
  mongodb,
  firebase,
  html,
  css,
  framerMotion,
  mockApi,
  reactNative,
  javascript,
  color
}) {
  const [visible, setVisible] = useState(false);

  return (
    <Grid xs={12}>
      <Grid xs={0} sm={1}></Grid>
      <Card
        onPress={() => setVisible(true)}
        isPressable
        css={{ bg: "#9FA6FF", br: "64px" }}
      >
        <Image width={"100%"} height={"auto"} layout="intrinsic" src={img} />

        <Card.Body
          css={{
            textAlign: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Grid.Container>
            <Grid>
              <Text
                css={{
                  fontFamily: "Raleway",
                  color: "#000",
                  fontWeight: "700",
                }}
              >
                En esta pag utilizamos las siguientes tecnologias:
              </Text>
            </Grid>
            <Grid.Container justify="center" gap={2}>
              {nextjs ? (
                <Grid>
                  <SvgNext />
                </Grid>
              ) : (
                <Grid xs={0} />
              )}

              {nextui ? (
                <Grid>
                  <SvgNextUi />
                </Grid>
              ) : (
                <Grid xs={0} />
              )}

              {bootstrap ? (
                <Grid>
                  <SvgBootstrap />
                </Grid>
              ) : (
                <Grid xs={0} />
              )}

              {sass ? (
                <Grid>
                  <SvgSass />
                </Grid>
              ) : (
                <Grid xs={0} />
              )}

              {mongodb ? (
                <Grid>
                  <SvgMongo />
                </Grid>
              ) : (
                <Grid xs={0} />
              )}

              {firebase ? (
                <Grid>
                  <SvgFirebase />
                </Grid>
              ) : (
                <Grid xs={0} />
              )}

              {html ? (
                <Grid>
                  <SvgHtml />
                </Grid>
              ) : (
                <Grid xs={0} />
              )}

              {css ? (
                <Grid>
                  <SvgCss />
                </Grid>
              ) : (
                <Grid xs={0} />
              )}

              {framerMotion ? (
                <Grid>
                  <SvgFramer />
                </Grid>
              ) : (
                <Grid xs={0} />
              )}

              {mockApi ? (
                <Grid>
                  <SvgMockApi />
                </Grid>
              ) : (
                <Grid xs={0} />
              )}

              {reactNative ? (
                <Grid>
                  <SvgReactNative />
                </Grid>
              ) : (
                <Grid xs={0} />
              )}
              {html ? (
                <Grid>
                  <SvgJava />
                </Grid>
              ) : (
                <Grid xs={0} />
              )}
            </Grid.Container>
          </Grid.Container>
        </Card.Body>
      </Card>
      <Grid xs={0} sm={1}></Grid>
      {/* ----------------------------------Modal------------------------------------  */}
      <Modal
        blur
        css={{ p: 0, borderRadius: "45px" }}
        closeButton
        className={color}
        open={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Image width={"100%"} height={"auto"} layout="intrinsic" src={img} />

        <Modal.Body>
          <Grid.Container>
            <Grid.Container justify="flex-end">
              <Grid>
                <Text css={{ fontFamily: "Raleway"}} className="textoProject" >
                  {text}
                </Text>
              </Grid>
            </Grid.Container>
            <Grid.Container>
              <Text css={{ fontFamily: "Raleway"}} className="textoProject" >
                {textTecnos}
              </Text>
            </Grid.Container>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Grid.Container>
            <Grid.Container>
              <Grid xs={6}>
                <Button
                  aria-label="tac"
                  onPress={() => setVisible(false)}
                  className="boton-project"
                  css={{
                    fontFamily: "Raleway",
                  }}
                  auto
                  flat
                  rounded
                >
                  EXIT
                </Button>
              </Grid>
              <Grid justify="end" xs={6}>
                <Button
                  aria-label="tac"
                  className="boton-project"
                  css={{
                    fontFamily: "Raleway",
                  }}
                  auto
                  flat
                  rounded
                >
                  <Link className="linkProject" href={link} target="_blac">
                    {" "}
                    ir a ver
                  </Link>
                </Button>
              </Grid>
            </Grid.Container>
          </Grid.Container>
        </Modal.Footer>
      </Modal>
    </Grid>
  );
}
