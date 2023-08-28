import { IconType } from 'react-icons';
import { AiFillRead } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { PiHandshake } from 'react-icons/pi';

type TAmenities = {
  icon: IconType;
  title: string;
  paragraph: string;
};

const Amenities: TAmenities[] = [
  {
    icon: AiFillRead,
    title: 'Train',
    paragraph: 'Train with our title coaches',
  },
  {
    icon: BsPeopleFill,
    title: 'Community',
    paragraph: 'Meet our big community of chess enthusiasts',
  },
  {
    icon: PiHandshake,
    title: 'Compete',
    paragraph: 'Use your acquired skill to earn your rating',
  },
];

export default Amenities;
