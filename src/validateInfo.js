export default function validateInfo(values) {
  let errors = {};
  const passwordRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  if (!values.username.trim()) {
    errors.username = "Coloque um nome de usuário válido";
  }
  if (!values.password) {
    errors.password = "Esse campo é obrigatório";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "Sua senha deve ter ao menos 8 caracteres, um caracter especial, um caracter numérico e um caracter alfanumérico";
  }

  if (!values.password2) {
    errors.password2 = "Esse campo é obrigatório";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Senhas não são iguais. Por favor, tente de novo.";
  }
  return errors;
}
