export default function validateNewLeadInfo(values) {
  let errors = {};

  if (!values.name) {
    errors.name = "Coloque um nome válido";
  }
  if (!values.email) {
    errors.email = "Esse campo é obrigatório";
  }

  if (!values.tel) {
    errors.tel = "Esse campo é obrigatório";
  }

  return errors;
}
