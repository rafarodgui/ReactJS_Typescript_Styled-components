import React, { FormEvent, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { MdChevronRight } from 'react-icons/md';

import api from '../../services/api';

import gitHubExplorerLogo from '../../assets/ge_logo.svg';

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
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repository');

    if (storagedRepositories) {
      const parsedRepositories = JSON.parse(storagedRepositories);

      return parsedRepositories;
    }
    return [];
  });
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repository', JSON.stringify(repositories));
  }, [repositories]);

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

      // localStorage.setItem('repository', repositories[]);

      setNewRepo('');
      setInputError('');
    } catch {
      setInputError(`Repository ${newRepo} not found`);
      setNewRepo('');
    }
  }

  return (
    <>
      <img src={gitHubExplorerLogo} alt="GitHub explorer logo" />
      <Title>Explore GitHub Repositories</Title>

      <Form error={!!inputError} onSubmit={handleAddRepository}>
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
                <Link to={`/repository/${repository.full_name}`} key={repository.id}>
                  <img src={repository.owner.avatar_url} alt="avatar" />
                  <div>
                    <strong>{repository.full_name}</strong>
                    <p>{repository.description}</p>
                  </div>
                  <MdChevronRight size={24} color="#ff5500" />
                </Link>
              ))
          }
      </Repositories>
    </>
  );
};

export default Dashboard;
