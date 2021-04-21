import { Layout } from 'antd';
import 'antd/dist/antd.css';
//import React, { useState } from 'react';
import React, { useEffect } from 'react';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddContent } from './components/AddContent/AddContent'

import  FormAbout  from './components/form/Form'
import { News } from './components/News/News'
import { HISTORY_PATH, Home_PATH, NEWS_PATH, ADD_CONTENT, ABOUT_PATH} from './helpers/constants';
import { ContentLayout } from "./Layouts/ContentLayout/ContentLayout";
import { FooterLayout } from "./Layouts/FooterLayout/FooterLayout";
import { HeaderLayout } from "./Layouts/HeaderLayout/HeaderLayout";
import { MenuLayout } from './Layouts/MenuLayout/MenuLayout';
import { contentMock } from "./mock/contentNews";
import { Historycontent } from "./components/ContentStory/Historycontent"
import { Homecont } from "./components/ContentStory/Homecont"
import { useRootStore } from './mobx/ProviderRootStore'





function App() {

    //const [ initialState, setInitialState ] = useState(contentMock)

    const { setInitialState } = useRootStore()

    useEffect(() => {
        setInitialState()
    }, [])



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
                        
                            <News/>

                        </Route>
                        <Route exact path={ADD_CONTENT }>
                        
                            <AddContent/>

                        </Route>
                        <Route exact path={ABOUT_PATH }>
                        
                            <FormAbout/>

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