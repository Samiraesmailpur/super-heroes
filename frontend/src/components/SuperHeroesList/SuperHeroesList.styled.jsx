import styled from "styled-components";
import ReactPaginate from "react-paginate";

const Section = styled.section`
  padding: 40px 0 70px 0;
  min-height: 100vh;
  position: relative;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
`;

const Pagination = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  .active {
    color: #adadad;
  }
`;
export { Section, List, Pagination };
