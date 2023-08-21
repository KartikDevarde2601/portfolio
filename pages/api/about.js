import data from './about.json';

export const getAbout = () => {
  return data;
};

export default (req, res) => {
  const about = getAbout();
  res.json(about);
};
