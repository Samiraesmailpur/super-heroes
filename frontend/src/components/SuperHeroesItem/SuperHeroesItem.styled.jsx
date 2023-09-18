import styled from "styled-components";

const Item = styled.li`
  max-width: 300px;
  width: 100%;
  transition: all 1s ease 0s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const NickName = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  color: #274c5b;
`;

export { Item, Image, NickName };
