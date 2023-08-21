import { IconType } from 'react-icons';
import { FaChessKing, FaChessKnight, FaChessPawn } from 'react-icons/fa';
type TMembership = {
  type: string;
  price: number;
  // duration: string; // change to date
  icon: IconType;
};
export const MembershipList: TMembership[] = [
  {
    type: 'pawn',
    price: 1_000,
    icon: FaChessPawn,
  },
  {
    type: 'knight',
    price: 5_000,
    icon: FaChessKnight,
  },
  {
    type: 'king',
    price: 10_000,
    icon: FaChessKing,
  },
];

export default MembershipList;
