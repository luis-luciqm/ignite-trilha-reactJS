import { RepositoryItem } from './RepositoryItem';
import { useEffect, useState } from 'react';

import '../styles/repositories.scss';

const repository = {
    name: "Unform",
    description: "Array Index Out Of Bounds",
    link: "https://github.com/"
}

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(()=> {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
        
    }, [repositories]) //isso ta em loop, precisa ser retirado repositories

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository = {repository}/>
                <RepositoryItem repository = {repository}/>
                <RepositoryItem repository = {repository}/>
            </ul>
        </section>
    );
}