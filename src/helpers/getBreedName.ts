import { capitalize } from "@material-ui/core";

const getBreedName = (url: string): string => {
  // this function will get the breed name from random image url.
  const breedsName = "breeds";
  const stringCut = url.substring(
    url.indexOf(breedsName) + breedsName.length + 1,
    url.length
  );

  const breedString = stringCut.substring(0, stringCut.indexOf("/"));

  if (breedString.includes("-")) {
    return capitalize(breedString.replace(/-/g, " "));
  } else {
    return capitalize(breedString.substring(0, stringCut.indexOf("/")));
  }
};

export default getBreedName;
