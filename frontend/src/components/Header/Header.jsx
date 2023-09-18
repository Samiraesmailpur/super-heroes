import Container from "../Container/Container";
import { Header as StyledHeader, NavLink, List } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <nav>
          <List>
            <li>
              <NavLink to="/">Superheroes</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create superhero</NavLink>
            </li>
          </List>
        </nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
