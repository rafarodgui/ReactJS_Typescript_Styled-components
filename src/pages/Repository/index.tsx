import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '../../services/api';

import githubExplorerLogo from '../../assets/ge_logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface Repository {
    id: number;
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    url: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    }
}

interface RepositoryParams {
    repository: string
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`/repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

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

      {
         repository && (
         <RepositoryInfo>
           <header>
             <img src={repository.owner.avatar_url} alt="repository_avatar" />
             <div>
               <strong>{repository.full_name}</strong>
               <p>{repository.description}</p>
             </div>
           </header>

           <ul>
             <li>
               <strong>{repository.stargazers_count}</strong>
               <span>Stars</span>
             </li>
             <li>
               <strong>{repository.forks_count}</strong>
               <span>Forks</span>
             </li>
             <li>
               <strong>{repository.open_issues_count}</strong>
               <span>Issues</span>
             </li>
           </ul>
         </RepositoryInfo>
         )
     }

      {
         issues.map((issue) => (
           <Issues key={issue.id}>
             <a href={issue.html_url} target="blank">
               <div>
                 <strong>{issue.title}</strong>
                 <p>{issue.user.login}</p>
               </div>
               <MdChevronRight size={24} color="#ff5500" />
             </a>
           </Issues>
         ))
     }

    </>
  );
};

export default Repository;
