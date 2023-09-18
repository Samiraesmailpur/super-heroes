import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "../../redux/heroes/operations";
import {
  selectHeroes,
  selectIsLoading,
  selectTotalHeroes,
} from "../../redux/heroes/selectors";
import SuperHeroesItem from "../../components/SuperHeroesItem/SuperHeroesItem";
import { Section, List, Pagination } from "./SuperHeroesList.styled";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";

const SuperHeroesList = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(selectHeroes);
  const isLoading = useSelector(selectIsLoading);
  const totalHeroes = useSelector(selectTotalHeroes);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  const endOffset = itemOffset + 5;
  const currentItems = heroes.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(totalHeroes / 5);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 5) % totalHeroes;
    setItemOffset(newOffset);
  };

  return (
    <Section>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <List>
            {currentItems.map((hero) => (
              <SuperHeroesItem key={hero._id} heroes={hero} />
            ))}
          </List>
          <Pagination
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </Container>
      )}
    </Section>
  );
};

export default SuperHeroesList;
