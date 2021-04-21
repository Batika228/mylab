import { Button, Form, Input } from 'antd'
import React, { useState, Component } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
}

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!'
    },
    number: {
        range: '${label} must be between ${min} and ${max}'
    }
}

//************************ */
function Map(){
    return(
        <GoogleMap 
            defaultZoom={15}
            defaultCenter={{ lat: 46.879421440915365 , lng: 29.23112135977835 }}
        />

    );
}

const WrappedMap= withScriptjs(withGoogleMap(Map));
/************************ */
const FormAbout = () => {

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ desc, setDesc ] = useState('')

    const onFinish = () => {
        console.log(name, email, desc)
    }


    return (
        <div>
        <div style={ {
            display: '',
            justifyContent: 'center',
            marginTop: '100px',
            marginRight: '350px',
            marginLeft: '350px'
            
        } }>
            <Form style={{paddingRight: '100'}} { ...layout } name='nest-messages' onFinish={ onFinish } validateMessages={ validateMessages }>
                <Form.Item name={ [ 'user', 'name' ] } label='Name' rules={ [ { required: true } ] }>
                    <Input value={ name } placeholder='Name' onChange={ (e) => setName(e.target.value) } />
                </Form.Item>
                <Form.Item name={ [ 'user', 'email' ] } label='Email' rules={ [ { type: 'email' } ] }>
                    <Input value={ email } placeholder='Email' onChange={ (e) => setEmail(e.target.value) } />
                </Form.Item>
                <Form.Item name={ [ 'user', 'introduction' ] } label='Introduction'>
                    <Input.TextArea value={ desc } onChange={ (e) => setDesc(e.target.value) } />
                </Form.Item>
                <Form.Item wrapperCol={ { ...layout.wrapperCol, offset: 8 } }>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
    
        </div>

        <div style={{width: '100vw' , veight: '100vh', paddingTop : '100px'}} align='center'  >
        <WrappedMap 
            googleMapURL= "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places$key=AIzaSyDbFzYfCTxfra5bNFQ-EqnVu5C_EsJgASg"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={ <div style={{ height: `500px`, width: '500px' }} />}
            mapElement= {<div style={{ height: `100%` }} />}
        />

        </div>
        </div>
    )
}




export default FormAbout