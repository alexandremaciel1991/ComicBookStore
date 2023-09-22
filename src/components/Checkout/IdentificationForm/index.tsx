import {
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
} from "@mui/material";
import {
  Button,
  Container,
  Form,
  FormControlStyle,
  FormGroupStyle,
  InputStyle,
  Title,
} from "./styles";
import { useState } from "react";
import InputMask from "react-input-mask";
import { SuccessDialog } from "../SuccessDialog";
import { useRouter } from "next/router";

interface IIdentificationForm {
  name: string;
  email: string;
  cpf: string;
  birthday: string;
  phone: string;
  creditCardNumber: string;
  cvv: string;
  creditCardName: string;
  creditCardValid: string;
}
export const IdentificationForm = () => {
  const initiateForm = {
    name: "",
    email: "",
    cpf: "",
    birthday: "",
    phone: "",
    creditCardNumber: "",
    cvv: "",
    creditCardName: "",
    creditCardValid: "",
  };
  const [form, setForm] = useState<IIdentificationForm>(initiateForm);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    router.push("/");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };

  return (
    <Container>
      <Form onSubmit={submit}>
        <Title> Dados Cadastrais </Title>
        <FormGroupStyle row={true}>
          <FormControlStyle required={true}>
            <InputStyle
              id="name"
              label="Nome Completo"
              variant="outlined"
              onChange={handleChange}
              required
              $width="40rem"
            />
          </FormControlStyle>
          <FormControlStyle>
            <InputStyle
              id="outlined-basic"
              label="Email"
              variant="outlined"
              $width="20rem"
            />
          </FormControlStyle>

          <FormControlStyle>
            <InputMask
              id="cpf"
              label="CPF"
              mask="999.999.999-99"
              value={form.cpf}
              onChange={handleChange}
            >
              {(
                inputProps: Omit<
                  | FilledTextFieldProps
                  | OutlinedTextFieldProps
                  | StandardTextFieldProps,
                  "variant"
                >
              ) => <InputStyle {...inputProps} />}
            </InputMask>
          </FormControlStyle>
        </FormGroupStyle>
        <FormGroupStyle row={true}>
          <FormControlStyle>
            <InputMask
              label="Data de Nascimento"
              id="birthday"
              mask="99/99/9999"
              value={form.birthday}
              onChange={handleChange}
            >
              {(
                inputProps: Omit<
                  | FilledTextFieldProps
                  | OutlinedTextFieldProps
                  | StandardTextFieldProps,
                  "variant"
                >
              ) => <InputStyle {...inputProps} />}
            </InputMask>
          </FormControlStyle>
          <FormControlStyle>
            <InputMask
              label="Telefone"
              id="phone"
              mask="(99) 99999-9999"
              value={form.phone}
              onChange={handleChange}
            >
              {(
                inputProps: Omit<
                  | FilledTextFieldProps
                  | OutlinedTextFieldProps
                  | StandardTextFieldProps,
                  "variant"
                >
              ) => <InputStyle {...inputProps} />}
            </InputMask>
          </FormControlStyle>
        </FormGroupStyle>
        <Title> Pagamento </Title>
        <FormGroupStyle>
          <FormControlStyle>
            <InputStyle
              id="creditCardNumber"
              label="Numero do Cartão de Credito"
              variant="outlined"
              onChange={handleChange}
              required
              $width="30rem"
              value={form.creditCardNumber}
            />
          </FormControlStyle>
          <FormControlStyle>
            <InputStyle
              id="cvv"
              label="CVV"
              variant="outlined"
              onChange={handleChange}
              required
              inputProps={{ maxLength: 3 }}
              $width="10rem"
              value={form.cvv}
            />
          </FormControlStyle>
          <FormControlStyle required={true}>
            <InputStyle
              id="creditCardName"
              label="Nome no Cartão de Credito"
              variant="outlined"
              onChange={handleChange}
              required
              $width="40rem"
              inputProps={{ maxLength: 4 }}
              value={form.creditCardName}
            />
          </FormControlStyle>
          <FormControlStyle required={true}>
            <InputMask
              label="Validade do Cartão de Credito"
              id="creditCardValid"
              mask="99/99"
              value={form.creditCardValid}
              onChange={handleChange}
            >
              {(
                inputProps: Omit<
                  | FilledTextFieldProps
                  | OutlinedTextFieldProps
                  | StandardTextFieldProps,
                  "variant"
                >
              ) => <InputStyle {...inputProps} />}
            </InputMask>
          </FormControlStyle>
        </FormGroupStyle>

        <Button type="submit">Finalizar</Button>
      </Form>
      <SuccessDialog open={open} handleClose={handleClose} />
    </Container>
  );
};
