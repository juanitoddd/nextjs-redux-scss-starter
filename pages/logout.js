import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'

const Logout = (props) => {

    const router = useRouter();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({type: 'LOGOUT'})
        router.push('/')
    }, [])

    return null;
};

export default Logout;