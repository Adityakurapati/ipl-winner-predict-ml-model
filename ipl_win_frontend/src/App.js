import './App.css';
import './Result.css';
import Content from './components/Content';
import Layout from './components/Layout';
import Result from './components/Result';
import { Routes, Route } from 'react-router-dom';

function App ()
{
        return (
                // <Content />
                <Routes>
                        <Route path="/" element={ <Layout /> }>
                                <Route index element={ <Content /> } />
                                <Route path="/result" element={ <Result /> } />
                        </Route>
                        {/* <Route path="/" element={ <Content /> } />
                        <Route path="/result" element={ <Result /> } /> */}
                </Routes>
        );
}

export default App;
