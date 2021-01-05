import React from 'react';
import Container from "react-bootstrap/Container";
import { Provider } from "react-redux";
import {Redirect, Route, Switch} from "react-router";

import './App.css';
import rootStore from "./store";
import PrivateRoute from "./PrivateRoute";
import Header from "./components/common/header/component/Header";
import OAuth2Page from "./components/oauth/component/OAuth2Page";
import CreatePage from "./components/create/component/CreatePage";
import UploadPage from "./components/create/component/UploadPage";
import NotFoundPage from "./components/error-pages/components/NotFoundPage";
import LibraryPage from "./components/library-pages/components/LibraryPage";
import SharedPage from "./components/library-pages/components/SharedPage";
import CreateDescriptionPage from "./components/create/component/CreateDescriptionPage";
import EditPage from "./components/lick-pages/components/edit/EditPage";
import ViewPage from "./components/lick-pages/components/view/ViewPage";
import RecordPage from './components/create/component/RecordPage';
import LandingPage from "./components/home-pages/components/landing/LandingPage";
import Footer from "./components/common/footer/component/Footer";
import ForbiddenPage from "./components/error-pages/components/ForbiddenPage";
import ServerErrorPage from "./components/error-pages/components/ServerErrorPage";
import BadRequestPage from "./components/error-pages/components/BadRequestPage";

function App() {
    return (
      <Provider store={rootStore}>
        <div className="app-wrapper">
            <Header />
            <div className="main">
                <Container fluid className="app">
                    <Switch>
                        <Route exact path="/create/upload" component={UploadPage} />
                        <Route exact path="/create/description" component={CreateDescriptionPage} />
                        <Route exact path="/create/record" component={RecordPage} />
                        <Route exact path="/create" component={CreatePage} />
                        <PrivateRoute exact path="/library" component={LibraryPage} />
                        <PrivateRoute exact path="/edit/:id" component={EditPage} />
                        <Route exact path="/view/:id" component={ViewPage} />
                        <PrivateRoute exact path="/shared" component={SharedPage} />
                        <Route exact path="/oauth" component={OAuth2Page} />
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/400" component={BadRequestPage} />
                        <Route exact path="/403" component={ForbiddenPage} />
                        <Route exact path="/404" component={NotFoundPage} />
                        <Route exact path="/500" component={ServerErrorPage} />
                        <Route path="*">
                            <Redirect to="/404" />
                        </Route>
                    </Switch>
                </Container>
            </div>
            <Footer />
        </div>
      </Provider>
    );
}


export default App;
