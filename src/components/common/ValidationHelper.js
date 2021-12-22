export const emailRegex = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const passwordValidator = (password, checkPassword) => {
  if (password != checkPassword) {
    return false;
  }
  return true;
};
export const inputFieldsValidator = (password, confirmPassword, email) => {
  if (password == "" || confirmPassword == "" || email == "") {
    return false;
  }
  return true;
};

export const nameMaxLength = 60;
export const nameMinLength = 1;

export const descriptionMaxLength = 5000;
export const descriptionMinLength = 150;

export const exactAddressMaxLength = 500;
export const exactAddressMinLength = 50;
