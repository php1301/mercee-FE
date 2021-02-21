import { CURRENCY } from 'settings/constants';
import {
  ItemCardBase,
  ItemCardImage,
  ItemCardContent,
  ItemCardPrice,
} from './utils/theme';

interface ItemProps {
  id: string;
  image?: string;
  name?: string;
  price?: number;
}

interface ItemCardProps {
  item: ItemProps;
  onClick?: (e: any) => void;
}

// height uthay dite hobe

const ItemCard: React.FC<ItemCardProps> = ({ item, onClick }) => (
  <div
    onKeyDown={onClick}
    role="presentation"
    className={ItemCardBase}
    onClick={onClick}
  >
    <div className={ItemCardImage}>
      <img
        className="object-cover"
        src={item.image}
        alt={` Alt ${item.name}`}
      />
    </div>

    <div className={ItemCardContent}>
      <span className={ItemCardPrice}>
        {CURRENCY}
        {item.price}
      </span>
      <span className="text-13px">{item.name}</span>
    </div>
  </div>
);

export default ItemCard;
