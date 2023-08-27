import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal';

describe('Modal Component', () => {
  const mockPerson = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    created: '2014-12-10T15:57:50.959000Z',
    films: ['Film 1', 'Film 2'],
    birth_year: '19BBY',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    gender: '',
    homeworld: '',
    species: [],
    vehicles: [],
    starships: [],
    edited: '',
    url: '',
  };

  const mockHomeWorld = {
    name: 'Tatooine',
    terrain: 'desert',
    climate: 'arid',
    residents: [],
  };

  it('renders the person details in the modal', () => {
    const closeModalMock = jest.fn();

    render(
      <Modal
        person={mockPerson}
        closeModal={closeModalMock}
        homeWorld={mockHomeWorld}
      />
    );

    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
    expect(
      screen.getByText(`Height : ${mockPerson.height} meters`)
    ).toBeInTheDocument();
    // Add other assertions for person details
    expect(
      screen.getByText(`BirthYear : ${mockPerson.birth_year}`)
    ).toBeInTheDocument();
    // Check home world details
    expect(screen.getByText('Home World')).toBeInTheDocument();
    expect(
      screen.getByText(`Name : ${mockHomeWorld.name}`)
    ).toBeInTheDocument();
    // Add other assertions for home world details
  });

  it('calls the closeModal function when close button is clicked', () => {
    const closeModalMock = jest.fn();

    render(
      <Modal
        person={mockPerson}
        closeModal={closeModalMock}
        homeWorld={mockHomeWorld}
      />
    );

    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);

    expect(closeModalMock).toHaveBeenCalled();
  });
});
