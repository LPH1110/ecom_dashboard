import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import { Fragment } from 'react';
import Modal from './components/Modal';

function App() {
    return (
        <section className="app h-screen">
            <Routes>
                {publicRoutes.map((route) => {
                    let Layout = route?.layout;
                    let Page = route?.page;

                    return (
                        <Fragment key={route?.id}>
                            <Route
                                path={route?.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        </Fragment>
                    );
                })}
            </Routes>
        </section>
    );
}

export default App;
