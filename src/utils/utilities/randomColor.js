const pastelColors = [
  '#caf3e5',
  '#e0eff6',
  '#eeebff',
  '#fff4e7',
  '#ffe0eb',
  '#fff9cc',
  '#eadfff',
  '#e5f9db',
  '#ffdad1',
  '#ddeff4',
];

const randomColor = () => {
  const randomIndex = Math.floor(Math.random() * pastelColors.length);
  return pastelColors[randomIndex];
};

export default randomColor;
