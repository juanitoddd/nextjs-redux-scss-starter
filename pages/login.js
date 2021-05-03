import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import {wrapper} from '@store/store';
import HomeLayout from '@layouts/home'
import axios from 'axios';
import {Button, message, Input, Form} from 'antd';

const Login = (props) => {
    
    const router = useRouter();
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [loginStatus, setLogin] = useState('')

    useEffect(() => {
        // console.log('Initialize')
        // return () => console.log('Bye')
    }, [])

    const onFinish = async values => {
        setLogin('validating');
        try {
            const { data } = await axios.post('https://api.imoblo.co/api/users/login', values)
            if (data.success) {
                setLogin('success');
                dispatch({type: 'LOGIN', payload: data.data})
                router.push('/')
            } else {
                // Incorrect Login
                setLogin('error');
                message.error('Credenciales Incorrectas');
            }
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    const onFinishFailed = ({ errorFields }) => {
        console.log('Form Failed');
        form.scrollToField(errorFields[0].name);
    };

    return (
        <HomeLayout>
            <div style={{padding: 100}}>
                <Form onFinish={onFinish} onFinishFailed={onFinishFailed} initialValues={{ email: 'Bamboo' }}>
                    <Form.Item name={['User','email']} label="Email" rules={[{required: true}]} validateStatus={loginStatus}>
                        <Input type="text"></Input>
                    </Form.Item>
                    <Form.Item name={['User','password']} label="Password" rules={[{required: true}]} validateStatus={loginStatus}>
                        <Input type="password" ></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit'>Login</Button>
                    </Form.Item>
                </Form>
            </div>
        </HomeLayout>
    );
};

export const getStaticProps = wrapper.getStaticProps(({store}) => {
    // console.log(store);
    return {props: {getStaticProp: 'bar'}};
});

export default Login;