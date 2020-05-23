import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '../../services/api';

import githubExplorerLogo from '../../assets/ge_logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

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

interface RepositoryParams {
    repository: string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [error, setError] = useState('');
  /* const [repository, setRepository] = useState<Repository>(() => {
 const storagedRepository = localStorage.getItem(`@GithubExplorer:repository/${params.repository}`);

    if (!storagedRepository) {
      setError('Ops, nothing here');
    }

    return repository;
  }); */

  return (
    <>
      <Header>
        <img src={githubExplorerLogo} alt="githubExplorerLogo" />
        <Link to="/">
          <MdChevronLeft size={20} />
          <span>
            Voltar
          </span>
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://scontent.fcgh39-1.fna.fbcdn.net/v/t1.0-9/74308636_2774066505939179_2798541002913087488_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_oc=AQlHU3S9mQMeC-OUp-MfzJg1_NpeV85qu8-mbI2gifVPUWa4O11IqgPSEa2Be-Byw3Y&_nc_ht=scontent.fcgh39-1.fna&oh=9e3ccff605ef435cf5c417ba1f528ca1&oe=5EF0823F" alt="repository_avatar" />
          <div>
            <strong>Repository owner</strong>
            <p>Repository descripton</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>100</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>45</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>18</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/">
          <div>
            <strong>asas</strong>
            <p>asas</p>
          </div>
          <MdChevronRight size={24} color="#ff5500" />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
