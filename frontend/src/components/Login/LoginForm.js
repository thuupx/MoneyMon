import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, FacebookFilled, GoogleSquareFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../actions/auth.action';
import FacebookLoginComponent from '../shared/FacebookLogin';
import GoogleLoginComponent from '../shared/GoogleLogin';

const LoginForm = () => {
    const dispatch = useDispatch();
    const onFinish = user => {
        const payload = {
            ...user,
            client_id: "5sjHf8d4ddmWFVczDmC9O1eaalI6V4D47ibtnvMs",
            client_secret: "BRlD1jdoe8R85cUKgIcdKQx2J0qblrgFmOftC5hM7jd4B5iqLCMhE37WkhX5Mq8RKSujkm5BX5S53glmX76xruzkZ176rUqQ0gE0ZV9egOT6Uh7o8hHptArL68vOjCb4",
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
            client_id: "5sjHf8d4ddmWFVczDmC9O1eaalI6V4D47ibtnvMs",
            client_secret: "BRlD1jdoe8R85cUKgIcdKQx2J0qblrgFmOftC5hM7jd4B5iqLCMhE37WkhX5Mq8RKSujkm5BX5S53glmX76xruzkZ176rUqQ0gE0ZV9egOT6Uh7o8hHptArL68vOjCb4",
            grant_type: "convert_token",
            backend
        }
        dispatch(userLogin(payload));
    }
    const onGGFailure = (response) => {
        console.log("failure gg:", response);

    }
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
                    <Checkbox style={{ color: 'white' }}>Remember me</Checkbox>
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
            <Form.Item>
                <FacebookLoginComponent
                    callback={socialLoginCallback}
                    render={props => (
                        <Button
                            ghost type="primary"
                            onClick={props.onClick}
                            className="login-form-button"
                            icon={<FacebookFilled />}
                        >
                            Log in with Facebook
                        </Button>)}
                />
            </Form.Item>
            <Form.Item>
                <GoogleLoginComponent
                    onSuccess={socialLoginCallback}
                    onFailure={onGGFailure}
                    render={props => (
                        <Button
                            ghost type="primary"
                            onClick={props.onClick}
                            className="login-form-button"
                            icon={<GoogleSquareFilled />}
                        >
                            Log in with Google
                        </Button>)}
                />
            </Form.Item>
        </Form>
    );
};
export default LoginForm;