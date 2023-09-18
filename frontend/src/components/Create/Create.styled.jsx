const { styled } = require("styled-components");

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 0;
  min-height: 100vh;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

const Input = styled.input`
  max-width: 500px;
  width: 100%;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 20px;
  border: none;
  outline: none;
`;

const InputFile = styled.input`
  max-width: 500px;
  width: 100%;
  margin-top: 10px;
  border: none;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 20px;
  outline: none;
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

  &:hover {
    transform: scale(1.05);
  }
`;

export { Form, Label, Input, InputFile, Button };
