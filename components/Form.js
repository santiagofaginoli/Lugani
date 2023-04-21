/** @format */

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
import Swal from "sweetalert2";

export default function Form() {
  const form = useRef();
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const enviarEmail = (e) => {
    e.preventDefault();

    if (
      !form.current.nombre.value ||
      !form.current.email.value ||
      !form.current.mensaje.value
    ) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "All fields are required!",
      });
    } else {
      setVisible(true);

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
              form.current.nombre.value = "";
              form.current.email.value = "";
              form.current.mensaje.value = "";
            }
          });
        });
    }
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
              css={{ bg: "none", shadow: "none" }}
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}

            >
              <Loading size="xl" color="secondary" />
            </Modal>
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
          <Spacer y={2}></Spacer>
          <Grid.Container justify="center">
            <Grid xs={7}>
              <Textarea
                labelPlaceholder="Message"
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
