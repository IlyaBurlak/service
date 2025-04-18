import { useEffect, useState } from 'react';
import { fetchData } from './services/api';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (e) {
                console.log('Error in component:', e);
            }
        };

        loadData();
    }, []);

    return (
        <div>
            {data ? JSON.stringify(data) : 'Loading...'}
        </div>
    );
}

export default App;