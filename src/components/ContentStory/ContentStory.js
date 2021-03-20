import React, { useState, useEffect } from 'react'
import { Card, message } from 'antd'
import { removeCard } from "../../helpers/functions";

const { Meta } = Card;

export const ContentStory = ({ img, title, description, index, setInitialState, initialState }) => {

    const [ removeElement, setRemoveElement ] = useState([])

    useEffect(() => {
        if (!!removeElement.length) {
            message.success(removeElement.title);
        }
    })
    return (
        <Card
            hoverable
            style={ { width: 240, margin: '10px' } }
            cover={ <img alt="example" src={ img }/> }
            onClick={ () => {
                const [ removed, state ] = removeCard(initialState, index)
                setRemoveElement(removed)
                setInitialState([ ...state ])
            } }
        >
            <Meta title={ title } description={ description }/>
        </Card>
    )
}