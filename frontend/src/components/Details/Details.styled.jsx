import styled from "styled-components";

const FlexContainer = styled.div`
  padding: 40px 0 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
    justify-content: center;
  }
`;

const ImageBox = styled.div`
  width: 30%;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const ContentBox = styled.div`
  width: 50%;
`;

const Text = styled.p`
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 15px;
`;

const Span = styled.span`
  margin-left: 10px;
`;

const Button = styled.button`
  width: 150px;
  margin: 0 auto;
  border: none;
  border-radius: 20px;
  padding: 15px 10px;
  color: #274c5b;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  transition: all 300ms ease;
  transform: scale(1);

  &:nth-of-type(1) {
    margin-bottom: 10px;
    margin-right: 10px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
`;

const InputFile = styled.input`
  width: 100%;
  margin-top: 10px;
  color: #fff;
`;

export {
  FlexContainer,
  ImageBox,
  Image,
  ContentBox,
  Text,
  Button,
  Input,
  Span,
  InputFile,
};
