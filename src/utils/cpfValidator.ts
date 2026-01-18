export const isValidCPF = (cpf: string): boolean => {
  const cleanCPF = cpf.replace(/\D/g, "");

  if (cleanCPF.length !== 11) return false;

  if (/^(\d)\1{10}$/.test(cleanCPF)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
  }
  const firstDigit = 11 - (sum % 11);
  if (firstDigit > 9 && parseInt(cleanCPF.charAt(9)) !== 0) return false;
  if (firstDigit <= 9 && parseInt(cleanCPF.charAt(9)) !== firstDigit)
    return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
  }
  const secondDigit = 11 - (sum % 11);
  if (secondDigit > 9 && parseInt(cleanCPF.charAt(10)) !== 0) return false;
  if (secondDigit <= 9 && parseInt(cleanCPF.charAt(10)) !== secondDigit)
    return false;

  return true;
};