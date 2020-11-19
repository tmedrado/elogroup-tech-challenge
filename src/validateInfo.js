export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Coloque um nome de usuário válido";
  }
  if (!values.password) {
    errors.password = "Esse campo é obrigatório";
  } else if (values.password.length < 6) {
    errors.password = "Sua senha deve ter 6 ou mais caracteres.";
  }

  if (!values.password2) {
    errors.password2 = "Esse campo é obrigatório";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Senhas não são iguais. Por favor, tente de novo.";
  }
  return errors;
}
