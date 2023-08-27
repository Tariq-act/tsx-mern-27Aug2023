import React from 'react';
import { GrClose } from 'react-icons/gr';
import { Person } from '../ulits/types';

interface ModalProps {
  person: Person;
  closeModal: () => void;
  homeWorld: {
    name: string;
    terrain: string;
    climate: string;
    residents: any[];
  };
}

const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 since months are 0-indexed
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const Modal: React.FC<ModalProps> = ({ person, closeModal, homeWorld }) => {
  // const getImageNumber = person.url.split('/');
  // const number = getImageNumber[getImageNumber.length - 2];

  const personDate = formatDate(person.created);
  const numOfRes =
    homeWorld && homeWorld.residents && homeWorld.residents.length;

  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-40 flex items-center justify-center font-roboto'>
      <div className='fixed top-0 left-0 w-screen h-screen bg-gray-400 opacity-70 '></div>
      <div className='z-50 bg-white relative w-2/4 rounded-md shadow-md'>
        <button
          className='absolute -right-2 -top-2 rounded-full bg-gray-300 p-2 '
          onClick={closeModal}
        >
          <GrClose />
        </button>

        <div className='flex flex-col gap-4 w-full items-center p-5 rounded-md'>
          <div>
            <h1 className='text-center text-4xl mb-4 underline '>
              {person.name}
            </h1>
            <ul className='list-none text-md flex flex-col gap-3 items-start'>
              <li>
                Height :
                <span className='ml-3'>
                  {person?.height === 'unknown'
                    ? 'unknown'
                    : `${person?.height} meters`}
                </span>
              </li>
              <li>
                Mass :{' '}
                <span className='ml-3'>
                  {person?.mass === 'unknown'
                    ? 'unknown'
                    : `${person?.mass} kg`}
                </span>
              </li>
              <li>
                Date : <span className='ml-3'>{personDate}</span>
              </li>
              <li>
                Films : <span className='ml-3'>{person.films.length}</span>
              </li>
              <li>
                BirthYear : <span className='ml-3'>{person?.birth_year}</span>
              </li>
              <li>
                <h1 className='underline text-2xl'>Home World </h1>
                <ul className='rounded-md bg-slate-300 list-none text-md flex flex-col gap-3 items-start px-2'>
                  <li>
                    Name :
                    <span className='ml-3'>
                      {homeWorld && homeWorld.name !== undefined
                        ? homeWorld.name === 'Loading...'
                          ? 'Loading...'
                          : homeWorld.name
                        : 'Loading...'}
                    </span>
                  </li>
                  <li>
                    Terrian :
                    <span className='ml-3'>
                      {homeWorld && homeWorld.terrain !== undefined
                        ? homeWorld.terrain === 'Loading...'
                          ? 'Loading...'
                          : homeWorld.terrain
                        : 'Loading...'}
                    </span>
                  </li>
                  <li>
                    Climate :
                    <span className='ml-3'>
                      {homeWorld && homeWorld.climate !== undefined
                        ? homeWorld.climate === 'Loading...'
                          ? 'Loading...'
                          : homeWorld.climate
                        : 'Loading...'}
                    </span>
                  </li>
                  <li>
                    Residents :
                    <span className='ml-3'>
                      {!homeWorld ? 'Loading...' : numOfRes}
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
