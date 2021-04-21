import React, { useEffect } from 'react'
import { Layout } from "antd";
import { ContentStory } from "../../components/ContentStory/ContentStory";
import { getStateByKey } from "../../helpers/functions";
import { observer } from 'mobx-react-lite'
//import React, { useEffect, useState } from 'react'


import './style.css'
import { useRootStore } from '../../mobx/ProviderRootStore'

const { Content } = Layout


export const ContentLayout = observer(() => {
    const { content$ } = useRootStore()

//export const ContentLayout = ({ initialState , setInitialState}) => {

    


                return(


                    <Content>

                    <div className='content' style={ { padding: 24, textAlign: 'center' } }>

                        { !content$.length ? (
                            <div>No Content</div>
                        ) : (
                            content$.map(({ description, img, title, removeCard, id }) => {

                                return (
                                    <ContentStory
                                        key={ id } description={ description }
                                        title={ title } img={ img }
                                        id={ id }
                                        removeCard={ removeCard }
                                    />
                                )
                            })
                        ) }

                    </div>
                    </Content>



/*
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

*/

                )

        })