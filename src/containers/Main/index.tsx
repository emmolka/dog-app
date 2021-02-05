import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import axios, { AxiosResponse } from "axios";

import {
  FullPageWrapper,
  ApplicationWrapper,
  ElementsWrapper
} from "../../components/Wrappers";

import {
  StyledImage,
  StyledButton,
  StyledAutocomplete,
  StyledTextField,
  H1
} from "../../components/Elements";

import { capitalize } from "@material-ui/core";
import getBreedName from "../../helpers/getBreedName";
import getAllBreeds from "../../helpers/getAllBreeds";
import {
  rottweilerImageUrl,
  randomDogEndpoint,
  allBreedEndpoint
} from "../../helpers/endpoints";

const Main = (): React.ReactElement => {
  const [breedName, setBreedName] = useState("Rottweiler");
  const [imageUrl, setImageUrl] = useState(rottweilerImageUrl);
  const [loading, setLoading] = useState(false);
  const [breedOptions, setBreedOptions] = useState([""]);

  const getAllBreedNames = async () => {
    setLoading(true);
    try {
      const response2: AxiosResponse<{
        message: { breed: string[] };
      }> = await axios.get(allBreedEndpoint);
      setLoading(false);
      setBreedOptions(getAllBreeds(response2.data.message));
    } catch (e) {
      setLoading(false);
      alert("Error occured, please try again");
    }
  };

  const getRandomBreedImage = async (breed = breedName) => {
    setLoading(true);
    try {
      const response: AxiosResponse<{
        message: string;
        status: string;
      }> = await axios.get(
        `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`
      );
      setLoading(false);
      setImageUrl(response.data.message);
    } catch (e) {
      setLoading(false);
      alert("Error occured, please try again");
    }
  };

  const getRandomImage = async (): Promise<{
    message: string;
    status: string;
  } | null> => {
    setLoading(true);
    try {
      const response: AxiosResponse<{
        message: string;
        status: string;
      }> = await axios.get(randomDogEndpoint);
      setLoading(false);
      setBreedName(getBreedName(response.data.message));
      setImageUrl(response.data.message);
      return response.data;
    } catch (e) {
      setLoading(false);
      alert("Error occured, please try again");
      return null;
    }
  };

  const autocompleteHandler = (
    // eslint-disable-next-line
    event: React.ChangeEvent<{}>,
    value: unknown
  ): void => {
    if (value === null) {
      return;
    }
    setBreedName(capitalize(value as string));
    getRandomBreedImage(value as string);
  };

  useEffect(() => {
    getAllBreedNames();
  }, []);

  return (
    <FullPageWrapper>
      <ApplicationWrapper>
        <StyledImage src={imageUrl} />
        <ElementsWrapper>
          <H1>{breedName}</H1>
          <StyledAutocomplete
            options={breedOptions}
            value={breedName}
            onChange={autocompleteHandler}
            renderInput={(params): React.ReactNode => (
              <StyledTextField
                {...params}
                label="Dogs breed"
                variant="outlined"
                fullWidth
              />
            )}
          />
          {loading ? (
            <Loader type="Circles" color="#FFF" height={80} width={80} />
          ) : (
            <>
              <StyledButton onClick={() => getRandomBreedImage()}>
                Get random {breedName} image
              </StyledButton>
              <StyledButton onClick={getRandomImage}>
                Get random dog image
              </StyledButton>
            </>
          )}
        </ElementsWrapper>
      </ApplicationWrapper>
    </FullPageWrapper>
  );
};

export default Main;
