import { RepositoryItem } from './RepositoryItem';
import { useEffect, useState } from 'react';

import '../styles/repositories.scss';

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(()=> {
        fetch('https://api.github.com/users/luis-luciqm/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
        
    }, []) //isso ta em loop, precisa ser retirado repositories

    return (
        <section className="repository-list">
            <h1>Listando os repositórios de {repositories[0]?.owner.login}</h1>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository = {repository}/> 
                })}
            </ul>
        </section>
    );
}