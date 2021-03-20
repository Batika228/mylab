import React, { useEffect, useState } from 'react'
import { Layout } from "antd";
import { ContentStory } from "../../components/ContentStory/ContentStory";
import { getStateByKey } from "../../helpers/functions";

import './style.css'


const { Content } = Layout

export const ContentLayout = ({ initialState , setInitialState}) => {

     //   const [ content, setContent ] = useState([])

       // useEffect(() => {
         //       setContent(getStateByKey('initialState'))
           // })


                return(


                    <Content style={ { margin: '24px 16px 0', overflow: 'initial' } }>
                        
                        
                        
                        
                        <div className="content" style={ { padding: 24, textAlign: 'center' } }>
                { !initialState.length ? (
                    <div>No Content</div>
                ) : (
                    initialState.map(({ description, img, title }, index) => {
                        return (
                            <ContentStory initialState={ initialState } setInitialState={ setInitialState }
                                          key={ index } description={ description }
                                          title={ title } img={ img }
                                          index={ index }/>
                        )
                    })
                ) }

                            

            </div>
                                   
                        
                        
                        
                       
                   



        </Content>



                )





        }