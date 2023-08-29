type TCourse = {
  cover: any;
  title: string;
  coachTitle: string;
  coach: string;
  description: string;
  price: number;
};

const CourseList: TCourse[] = [
  {
    cover:
      'https://images.unsplash.com/photo-1587888191477-e74ac6bc9c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1514&q=80',
    title: 'one pawn to rule them all',
    description: 'IM Roe Bien Arnaiz shows us the power of pawn in endgame.',
    coachTitle: 'GM',
    coach: 'Roe Bien Arnaiz',
    price: 119.99,
  },
  {
    cover:
      'https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80 ',
    title: 'the mighty knight',
    coachTitle: 'GM',
    coach: 'Roe Bien Arnaiz',
    description: 'IM Roe Bien Arnaiz shows us the power of pawn in endgame.',
    price: 399.99,
  },
  {
    cover:
      'https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1558&q=80 ',
    title: `queen's gambit`,
    coachTitle: 'GM',
    coach: 'Roe Bien Arnaiz',
    description: 'IM Roe Bien Arnaiz shows us the power of pawn in endgame.',
    price: 999.99,
  },
];

export default CourseList;
