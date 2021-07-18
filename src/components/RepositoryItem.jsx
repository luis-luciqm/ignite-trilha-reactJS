export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository ?? 'Unform'}</strong>
            <p>{props.description ?? 'No Description'}</p>

            <a href={props.link ?? "https://google.com"}>
                Acessar repositório
            </a>
        </li>
    );
}