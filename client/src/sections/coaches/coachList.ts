import dmitry from '../../assets/coaches/dmitry-vechorko.jpg';
// import jonas from '../../assets/coaches/jonas-kakaroto.jpg';
import jordan from '../../assets/coaches/jordan-bergendahl.jpg';
import pham from '../../assets/coaches/pham-duy-quang.jpg';
type TCoaches = {
  title: string;
  name: string;
  description: string;
  portrait: string;
};
export const Coaches: TCoaches[] = [
  {
    title: `Woman's International Master`,
    name: 'Pham Duy Quang',
    description: `Master chess with WIM Pham Duy Quang's tactical brilliance and intuitive play as your guide.`,
    portrait: pham,
  },
  {
    title: 'International Master',
    name: 'Dmitry Vechorko',
    description: `Unlock your chess potential with IM Dmitry Vechorko's personalized coaching and strategic insights.`,
    portrait: dmitry,
  },
  {
    title: 'Grandmaster',
    name: 'Jordan Bergendahl',
    description: `Unravel the secrets of chess mastery with Jordan Bergendahl's artistic approach and grandmaster expertise.`,
    portrait: jordan,
  },
];

export default Coaches;
