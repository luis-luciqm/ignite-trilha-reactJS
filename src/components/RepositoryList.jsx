import { RepositoryItem } from './RepositoryItem';
import { useState } from 'react';

import '../styles/repositories.scss';

const repository = {
    name: "Unform",
    description: "Array Index Out Of Bounds",
    link: "https://github.com/"
}

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
    const [] = useState([])

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