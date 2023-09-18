import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  padding: 30px 0;
  border-bottom: 2px solid #eee;
  background-color: #fff;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #274c5b;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;

export { Header, List, NavLink };
