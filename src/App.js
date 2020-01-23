import React from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import './Include/bootstrap'

function App() {
    return (
        <div className="App">
            <Layout>
                <BurgerBuilder />
            </Layout>
        </div>
    );
}

export default App;
