import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { HISTORY_PATH, Home_PATH, NEWS_PATH } from './helpers/constants';
import { ContentLayout } from "./Layouts/ContentLayout/ContentLayout";
import { FooterLayout } from "./Layouts/FooterLayout/FooterLayout";
import { HeaderLayout } from "./Layouts/HeaderLayout/HeaderLayout";
import { MenuLayout } from './Layouts/MenuLayout/MenuLayout';
import { contentMock } from "./mock/contentNews";
import { Historycontent } from "./components/ContentStory/Historycontent"
import { Homecont } from "./components/ContentStory/Homecont"




function App() {

    const [ initialState, setInitialState ] = useState(contentMock)

    

    return (
        <>
        <Router>
            <Layout>
                <MenuLayout/>
                <HeaderLayout/>
                <Layout className="site-layout" style={ { marginLeft: 200 } }>
                    <Switch>
                        <Route exact path={Home_PATH}>
                                <Homecont/>
                        </Route>

                        <Route exact path={HISTORY_PATH}>
                            
                            <Historycontent/>
                        
                        </Route>

                        <Route exact path={NEWS_PATH}>
                        
                            <ContentLayout initialState={ initialState } setInitialState={ setInitialState }/>

                            <video>
                                <source src="https://youtu.be/G87g-zJ98CY"/>
                            </video>
                        
                        </Route>

                    </Switch>
                <FooterLayout/>
                </Layout>
            </Layout>

        
    </Router>
        </>
        
    );
}

export default App