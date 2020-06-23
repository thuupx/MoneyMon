import React from 'react';
import { Form, Input, Tooltip, Checkbox, Button, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../actions/registration.action';
import ReCAPTCHAv2 from 'react-google-recaptcha';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const RegistrationForm = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const recaptchaRef = React.createRef();
    const onFinish = values => {
        console.log('Received values of form: ', values);
        const recaptchaValue = recaptchaRef.current.getValue();
        if(!recaptchaValue) {
            message.error("Please complete the recaptcha");
            return;
        }
        dispatch(registerUser(values));
    };
    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input a valid password!',
                        pattern: '',
                        min: 8
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="username"
                label={
                    <span>
                        Username&nbsp;
                <Tooltip title="You need to enter a username to login">
                            <QuestionCircleOutlined />
                        </Tooltip>
                    </span>
                }
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                        whitespace: false,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="location"
                label="Address"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox style={{ color: 'white' }}>
                    I have read the agreement
                </Checkbox>
            </Form.Item>
            <ReCAPTCHAv2
                ref={recaptchaRef}
                sitekey="6LcJR6gZAAAAAFG2QTZP9kQ6jWYG5j09OJbro7qR"
            />
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
            </Button> or <Link to='/login'>Login now!</Link>
            </Form.Item>
        </Form>
    );
};
export default RegistrationForm;