import paulLe from '../../assets/coaches/paul-le.png';
import jordanBergendahl from '../../assets/coaches/jordan-bergendahl.png';
import phamDuy from '../../assets/coaches/pham-duy-quang.png';
import tungAn from '../../assets/coaches/tung-an-vuong.png';
import rebeccaJames from '../../assets/coaches/rebecca-james.png';
import steffenWeinberg from '../../assets/coaches/steffen-wienberg.png';

import { IconType } from 'react-icons';
import philippines from '../../assets/country-flags/philippines.svg';

type TCoaches = {
  title: string;
  rating: string;
  name: string;
  portrait: string;
  color: string;
  flag?: any;
};

/* 
  Federation Internationale des Echecs (FIDE) official rating
  Grandmaster (GM) 2300
  International Master (IM) 2200
  FIDE Master (FM) 2100
  Candidate Master (CM) 2000
  Woman Grandmaster (WGM) 2100
  Woman International Master (WIM) 2000
  Woman FIDE Master (WFM) 1900
  Woman Candidate Master (WCM) 1800

*/

const Coaches: TCoaches[] = [
  {
    title: 'GM',
    rating: '2701',
    name: 'Jordan BergenDahl',
    portrait: jordanBergendahl,
    color: 'bg-white',
    flag: philippines,
  },
  {
    title: 'IM',
    rating: '2246',
    name: 'Steffen Weinberg',
    portrait: steffenWeinberg,
    color: 'bg-white',
    flag: philippines,
  },
  {
    title: 'IM',
    rating: '2235',
    name: 'Paul Le',
    portrait: paulLe,
    // color: 'bg-cyan-500',
    color: 'bg-[#0e1111]',
    flag: philippines,
  },
  {
    title: 'WGM',
    rating: '2191',
    name: 'Pham Duy Quang',
    portrait: phamDuy,
    color: 'bg-white',
    flag: philippines,
  },
  {
    title: 'FM',
    rating: '2172',
    name: 'Tung An Vuong',
    portrait: tungAn,
    // color: 'bg-cyan-500',
    color: 'bg-[#0e1111]',
    flag: philippines,
  },
  {
    title: 'WCM',
    rating: '1899',
    name: 'Jaime Fermin',
    portrait: rebeccaJames,
    color: 'bg-white',
    flag: philippines,
  },
];

export default Coaches;
