export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
  const re = /^\+?[\d\s-]{10,}$/;
  return re.test(String(phone));
};

export const validateRequired = (value) => {
  return value !== null && value !== undefined && value.toString().trim() !== '';
};

export const validateAppointmentForm = (data) => {
  const errors = {};
  if (!validateRequired(data.fullName)) errors.fullName = 'Full name is required';
  if (!validateEmail(data.email)) errors.email = 'Invalid email address';
  if (!validatePhone(data.phone)) errors.phone = 'Invalid phone number';
  if (!validateRequired(data.reason)) errors.reason = 'Please provide a reason for visit';
  return errors;
};
