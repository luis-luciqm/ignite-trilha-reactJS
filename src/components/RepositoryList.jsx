import { RepositoryItem } from './RepositoryItem'

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository="Unform4"/>
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}