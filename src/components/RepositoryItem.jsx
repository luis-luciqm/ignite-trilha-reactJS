export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository ?? 'Unform'}</strong>
            <p>Forms in ReactJS</p>

            <a href="">
                Acessar repositório
            </a>
        </li>
    );
}