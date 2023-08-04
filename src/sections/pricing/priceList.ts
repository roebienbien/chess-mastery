import { IconType } from 'react-icons';
import { FaChessKing, FaChessKnight, FaChessPawn } from 'react-icons/fa';
type TPrice = {
  name: string;
  price: number;
  // duration: string; // change to date
  icon: IconType;
};
export const PriceList: TPrice[] = [
  {
    name: 'pawn',
    price: 1_000,
    icon: FaChessPawn,
  },
  {
    name: `knight`,
    price: 5_000,
    icon: FaChessKnight,
  },
  {
    name: `king`,
    price: 10_000,
    icon: FaChessKing,
  },
];

export default PriceList;
