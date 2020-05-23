import React, { FormEvent, useState } from 'react';

import { MdChevronRight } from 'react-icons/md';

import api from '../../services/api';

import geLogo from '../../assets/ge_logo.svg';

import {
  Title, Form, Repositories, Error,
} from './styles';

interface Repository {
    id: number;
    full_name: string;
    description: string;
    url: string;
    owner: {
        login: string;
        avatar_url: string;
    }

}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [inputError, setInputError] = useState('');

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Type some GitHub repository');

      return;
    }

    console.log(inputError);

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepo('');
      setInputError('');
    } catch {
      setInputError(`Repository ${newRepo} not found`);
      setNewRepo('');
    }
  }

  return (
    <>
      <img src={geLogo} alt="Rocketseat logo" />
      <Title>Explore GitHub Repositories</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Repository name..."
        />
        <button type="submit">Search</button>
      </Form>

      { inputError ? <Error>{inputError}</Error> : null}

      <Repositories>
        {
              repositories.map((repository) => (
                <a href={repository.url} key={repository.id}>
                  <img src={repository.owner.avatar_url} alt="avatar" />
                  <div>
                    <strong>{repository.full_name}</strong>
                    <p>{repository.description}</p>
                  </div>
                  <MdChevronRight size={24} color="#00cc00" />
                </a>
              ))
          }
      </Repositories>
    </>
  );
};

export default Dashboard;
