import * as yup from "yup";

export class ContactSchemas {
  static creat = yup.object().shape({
    name: yup.string().required("É obrigatório definir um nome"),
    email: yup.string().email().required("Email é obrigatório"),
    number: yup.number().required("É obrigatorio definir numero de contato"),
    userId: yup.string().required("É obrigatorio difinir o usuario do contato"),
  });

  static update = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    number: yup.number().notRequired(),
    userId: yup.string().notRequired(),
  });
}
