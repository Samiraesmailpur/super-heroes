import { Link } from "react-router-dom";
import { Item, Image, NickName } from "./SuperHeroesItem.styled";

const SuperHeroesItem = ({ heroes: { _id, nickname, images } }) => {
  return (
    <Item key={_id}>
      <Link to={`hero/${_id}`}>
        <Image src={images} alt={nickname} />
        <div>
          <NickName>{nickname}</NickName>
        </div>
      </Link>
    </Item>
  );
};
export default SuperHeroesItem;
