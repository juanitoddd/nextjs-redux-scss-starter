import React from 'react';
import axios from 'axios';
import HomeLayout from '@layouts/home'
import {Button, Input, Form} from 'antd';

// you can also use `connect()` instead of hooks
const Page = (props) => {
    console.log('page props', props);
    return (
        <HomeLayout>
            <div style={{padding: 100}}>
                <Form>
                    <Form.Item>
                        <label>Email</label>
                        <Input name="email" type="text" rules={[{required: true}]}></Input>
                    </Form.Item>
                    <Form.Item>
                        <label>Password</label>
                        <Input type="password" type="text" rules={[{required: true}]}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={() => console.log('Async')}>Login</Button>
                    </Form.Item>
                </Form>
            </div>
        </HomeLayout>
    );
};

export const getStaticProps = async context => {

    /*
    const res = await axios.get('https://api.imoblo.co/api/epayco/banks');
    const data = res.data;
    console.log('data', res.data);

    return {
        props: {
            data
        }
    }
    */
}

export default Page;