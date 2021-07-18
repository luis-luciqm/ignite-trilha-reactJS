import './styles/global.scss'
import { RepositoryList } from './components/RepositoryList'

export function App() {
    return (
        <div>
            <RepositoryList />
            <Counter />
        </div>
    );
}