import { Button, Input, Switch } from 'antd'
import React, { useEffect } from 'react'
import { useRootStore } from '../../mobx/ProviderRootStore'
import { observer } from 'mobx-react-lite'

export const AddContent = observer(() => {

    const { defaultAddType, addContent, addContent$,setAddContentInitial, setUpdateType } = useRootStore()

    useEffect(() => {
        setAddContentInitial()
    }, [])

    if (!addContent$) return ''
    const { title, img, description, updateField } = addContent$

    return (
        <div className="back2" >
        <div style={ {
            margin: '25%'
        } }>
            <Switch checkedChildren='news' unCheckedChildren='content' defaultChecked={ defaultAddType }
                    onChange={ (check) => setUpdateType(check) } />
            <Input placeholder='Title' value={ title } onChange={ (e) => updateField('title', e.target.value) } />
            <Input.TextArea placeholder='Description' value={ description }
                            onChange={ (e) => updateField('description', e.target.value) } />
            <Input placeholder='Img' value={ img } onChange={ (e) => updateField('img', e.target.value) } />
            <Button onClick={ () => addContent(addContent$) }>Add</Button>
        </div>
        </div>

    )
})