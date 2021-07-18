import { RepositoryItem } from './RepositoryItem'

const repository = {
    name: "Unform",
    description: "Array Index Out Of Bounds",
    link: "https://github.com/"
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository = {repository}/>
            </ul>
        </section>
    );
}