export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 100;
};

export const validateMessage = (message: string): boolean => {
  return message.trim().length >= 10 && message.trim().length <= 1000;
};

export const sanitizeInput = (input: string): string => {
  return input.trim().slice(0, 5000);
};
