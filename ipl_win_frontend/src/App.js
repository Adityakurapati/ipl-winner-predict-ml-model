import './App.css';
import './Result.css';
import Content from './components/Content';
import Layout from './components/Layout';
import Result from './components/Result';
import { Routes, Route } from 'react-router-dom';
import DataContext from './Context/DataContext';

// Context
import { DataProvider } from './Context/DataContext';
function App ()
{
        return (
                <DataProvider>
                <Routes>
                        <Route path="/" element={ <Layout /> }>
                                <Route index element={ <Content /> } />
                                <Route path="/result" element={ <Result /> } />
                        </Route>
                        {/* <Route path="/" element={ <Content /> } />
                        <Route path="/result" element={ <Result /> } /> */}
                </Routes>
                </DataProvider>
        );
}

export default App;
