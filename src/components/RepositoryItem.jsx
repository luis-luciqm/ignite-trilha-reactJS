export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Unform'}</strong>
            <p>{props.repository.description ?? 'No Description'}</p>

            <a href={props.repository.link ?? "https://google.com"}>
                Acessar repositório
            </a>
        </li>
    );
}