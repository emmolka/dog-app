const getBreedName = (breedsObject: { breed: string[] }): string[] => {
  return Object.keys(breedsObject);
};

export default getBreedName;
