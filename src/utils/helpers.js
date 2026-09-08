export const formatCurrency = (amount) => {
  return `USD ${new Intl.NumberFormat('en-US').format(amount)}`;
};

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const generateId = (prefix = 'VC') => {
  return `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;
};

export const getInitials = (name) => {
  if (!name) return 'VC';
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
};
