import React, { useRef, useState } from "react";
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
  Loading,
  Modal,
} from "@nextui-org/react";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function Form() {
  const form = useRef();
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const enviarEmail = (e) => {
    setVisible(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nqjidst",
        "template_8lf07wh",
        form.current,
        "FnII1y_rPcgegS1D9"
      )
      .then((res) => {
        setVisible(false);
        Swal.fire({
          icon: "success",
          title: "congratulations",
          text: "your message has been sent successfully!",
          confirmButtonText: "Ok",
        }).then((resultado) => {
          if (resultado.value) {
            router.push("/");
          }
        });
      });
  };

  return (
    <Grid.Container alignItems="center" justify="center">
      <form onSubmit={enviarEmail} ref={form}>
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
            <Modal
              blur
              css={{ bg: "#16181a" }}
              closeButton
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              <Loading />
            </Modal>
            ;<Spacer></Spacer>
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
