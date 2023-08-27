import React, { useState } from 'react';
import useSpecies from '../hooks/useSpecies';
import { Person } from '../ulits/types';
import Modal from './Modal';
import useHomeWorld from '../hooks/useHomeWorld';

interface PersonData {
  person: Person;
}

const CardView: React.FC<PersonData> = ({ person }) => {
  const [isModal, setIsModal] = useState(false);
  const getImageNumber = person.url.split('/');
  const number = getImageNumber[getImageNumber.length - 2];

  const { species, isLoading } = useSpecies(person.species[0]);
  const { homeWorld } = useHomeWorld(person.homeworld);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      <div
        className='flex flex-col items-center justify-center w-[80vw] sm:w-full h-full py-4 border shadow-sm rounded-md cursor-pointer transform hover:z-30 hover:bg-slate-400 transition duration-500 hover:scale-125'
        onClick={toggleModal}
      >
        <div className='h-40'>
          <img
            src={
              number
                ? `/assets/img/people/${number}.jpg`
                : '/assets/default.png'
            }
            alt='default Pic'
            className='w-full h-full'
          />
        </div>
        <p>{person.name}</p>
        <p>{isLoading ? 'Loading...' : species?.name}</p>
      </div>
      {isModal && (
        <Modal person={person} homeWorld={homeWorld} closeModal={toggleModal} />
      )}
    </>
  );
};

export default CardView;
