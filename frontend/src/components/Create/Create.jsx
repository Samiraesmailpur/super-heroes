import { createHero } from "../../redux/heroes/operations";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../Container/Container";
import { Form, Label, Input, InputFile, Button } from "./Create.styled";

const Create = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nickname: "",
    realName: "",
    originDescription: "",
    superpowers: "",
    catchPhrase: "",
    images: null,
  });

  const dispatch = useDispatch();

  const handleSaveClick = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("nickname", formData.nickname);
    formDataToSend.append("realName", formData.realName);
    formDataToSend.append("originDescription", formData.originDescription);
    formDataToSend.append("superpowers", formData.superpowers);
    formDataToSend.append("catchPhrase", formData.catchPhrase);
    formDataToSend.append("images", formData.images);

    try {
      await dispatch(createHero(formDataToSend));
      setFormData({
        nickname: "",
        realName: "",
        originDescription: "",
        superpowers: "",
        catchPhrase: "",
        images: null,
      });
      toast.success("Hero created successfully!");
      navigate("/");
    } catch (error) {
      toast.error(
        "Sorry, there was an error while creating the hero. Please try again."
      );
    }
  };

  const handleChangeInputValue = (e) => {
    const { name, value } = e.target;
    if (name === "images") {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <Container>
      <Form>
        <Label>
          Nickname:
          <Input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChangeInputValue}
            required
          />
        </Label>
        <Label>
          Real Name:
          <Input
            type="text"
            name="realName"
            value={formData.realName}
            onChange={handleChangeInputValue}
            required
          />
        </Label>
        <Label>
          Origin Description:
          <Input
            type="text"
            name="originDescription"
            value={formData.originDescription}
            onChange={handleChangeInputValue}
            required
          />
        </Label>
        <Label>
          Superpowers:
          <Input
            type="text"
            name="superpowers"
            value={formData.superpowers}
            onChange={handleChangeInputValue}
            required
          />
        </Label>
        <Label>
          Catch Phrase:
          <Input
            type="text"
            name="catchPhrase"
            value={formData.catchPhrase}
            onChange={handleChangeInputValue}
            required
          />
        </Label>
        <Label>
          Images:
          <InputFile
            type="file"
            name="images"
            onChange={handleChangeInputValue}
            required
          />
        </Label>
        <Button onClick={handleSaveClick}>Save</Button>
      </Form>
    </Container>
  );
};

export default Create;
