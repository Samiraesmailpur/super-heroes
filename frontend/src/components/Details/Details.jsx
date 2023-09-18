import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHeroById } from "../../redux/heroes/operations";
import { selectHeroById } from "../../redux/heroes/selectors";
import Container from "../Container/Container";
import {
  FlexContainer,
  ImageBox,
  Image,
  ContentBox,
  Text,
  Button,
  Input,
  Span,
  InputFile,
} from "./Details.styled";
import Loader from "../Loader/Loader";
import {
  removeHeroById,
  getHeroes,
  updateHero,
} from "../../redux/heroes/operations";

const Details = () => {
  const { heroId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hero = useSelector(selectHeroById);
  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    nickname: "",
    realName: "",
    originDescription: "",
    superpowers: "",
    catchPhrase: "",
    images: "",
  });

  useEffect(() => {
    if (hero) {
      setFormData({
        nickname: hero.nickname || "",
        realName: hero.realName || "",
        originDescription: hero.originDescription || "",
        superpowers: hero.superpowers || "",
        catchPhrase: hero.catchPhrase || "",
        images: hero.images || "",
      });
    }
  }, [hero]);

  useEffect(() => {
    dispatch(getHeroById(heroId));
  }, [dispatch, heroId]);

  const handleRemoveClick = async () => {
    await dispatch(removeHeroById(heroId));
    await dispatch(getHeroes());
    navigate("/");
  };

  const handleUpdateClick = () => {
    setIsEdit(true);
  };

  const handleSaveClick = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("id", heroId);
    formDataToSend.append("nickname", formData.nickname);
    formDataToSend.append("realName", formData.realName);
    formDataToSend.append("originDescription", formData.originDescription);
    formDataToSend.append("superpowers", formData.superpowers);
    formDataToSend.append("catchPhrase", formData.catchPhrase);
    formDataToSend.append("images", formData.images);

    await dispatch(updateHero({ id: heroId, formData }));
    await dispatch(getHeroById(heroId));
    setIsEdit(false);
  };

  const handleChangeInputValue = (e) => {
    const { name, value } = e.target;
    if (name === "images") {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        images: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const renderInputField = (name, value, isEdit, text) => {
    return isEdit ? (
      <Input
        onChange={handleChangeInputValue}
        value={value}
        name={name}
        type="text"
      />
    ) : (
      <Span>{text}</Span>
    );
  };

  return (
    <>
      {hero ? (
        <Container>
          <FlexContainer>
            {isEdit ? (
              <ImageBox>
                <Image src={hero.images} alt={hero.nickname} />
                <InputFile
                  type="file"
                  name="images"
                  onChange={handleChangeInputValue}
                />
              </ImageBox>
            ) : (
              <ImageBox>
                <Image src={hero.images} alt={hero.nickname} />
              </ImageBox>
            )}
            <ContentBox>
              <Text>
                Nickname:
                {renderInputField(
                  "nickname",
                  formData.nickname,
                  isEdit,
                  hero.nickname
                )}
              </Text>
              <Text>
                Real name:
                {renderInputField(
                  "realName",
                  formData.realName,
                  isEdit,
                  hero.realName
                )}
              </Text>
              <Text>
                Origin description:
                {renderInputField(
                  "originDescription",
                  formData.originDescription,
                  isEdit,
                  hero.originDescription
                )}
              </Text>
              <Text>
                Superpowers:
                {renderInputField(
                  "superpowers",
                  formData.superpowers,
                  isEdit,
                  hero.superpowers
                )}
              </Text>
              <Text>
                Catch phrase:
                {renderInputField(
                  "catchPhrase",
                  formData.catchPhrase,
                  isEdit,
                  hero.catchPhrase
                )}
              </Text>
              {isEdit ? (
                <Button onClick={handleSaveClick}>save</Button>
              ) : (
                <Button onClick={handleUpdateClick}>edit</Button>
              )}
              <Button onClick={handleRemoveClick}>remove</Button>
            </ContentBox>
          </FlexContainer>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Details;
