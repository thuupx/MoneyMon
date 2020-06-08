import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../actions/auth.action';
<<<<<<< HEAD
=======
import FacebookLoginComponent from '../shared/FacebookLogin';
import GoogleLoginComponent from '../shared/GoogleLogin';
import { CLIENT } from '../../constants/client-secret';
>>>>>>> b61d3942238d1a25a2ce46209c0bd37428f9d6b6

const LoginForm = () => {
    const dispatch = useDispatch();
    const onFinish = user => {
<<<<<<< HEAD
    console.log("LoginForm -> user", user)
        dispatch(userLogin(user));
    };
=======
        const payload = {
            ...user,
            client_id: CLIENT.ID,
            client_secret: CLIENT.SECRET,
            grant_type: "password"
        }
        console.log("LoginForm -> payload", payload)
        dispatch(userLogin(payload));
    };
    const socialLoginCallback = (response) => {
        //login user
        console.log("LoginForm:", response);
        const backend = response.googleId ? "google-oauth2" : "facebook";
        const payload = {
            token: response.accessToken,
            client_id: CLIENT.ID,
            client_secret: CLIENT.SECRET,
            grant_type: "convert_token",
            backend
        }
        dispatch(userLogin(payload));
    }
    const onGGFailure = (response) => {
        console.log("failure gg:", response);

    }
>>>>>>> b61d3942238d1a25a2ce46209c0bd37428f9d6b6
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} type="text" placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox style={{color: 'white' }}>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/">
                    Forgot password
            </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
            </Button> Or <Link to='/register'>Register now!</Link>
            </Form.Item>
        </Form>
    );
};
export default LoginForm;