export const generateSlug: any = (name: string) =>
  name.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '').replace(/®/g, '');

export const generateRandomRating = () => {
  return parseFloat((Math.random() * 5).toFixed(1));
};

export const generateRandomReviews = () => {
  return Math.floor(Math.random() * 50) as number;
};
