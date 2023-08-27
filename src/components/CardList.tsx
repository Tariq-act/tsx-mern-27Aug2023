import React from 'react';
import CardView from './CardView';
import { Person } from '../ulits/types';

interface PeopleData {
  people: Person[];
}
const CardList: React.FC<PeopleData> = ({ people }: any) => {
  if (people.length === 0) {
    return (
      <div>
        <h1 className='text-5xl'>Not Found any Character</h1>
      </div>
    );
  }

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5 flex-1 items-center justify-center '>
      {people &&
        people.map((person: any, idx: number) => (
          <CardView key={idx} person={person} />
        ))}
    </div>
  );
};

export default CardList;
