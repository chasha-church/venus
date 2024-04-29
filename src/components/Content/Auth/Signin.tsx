import { Input, Button, FormProps, Form } from 'antd';
import { authAPI } from '../../../api/authAPI';
import { useEffect, useRef, useState } from 'react';
import { AxiosError } from 'axios';

type SigninFormType = {
    login: string;
    password: string;
};

export const Signin: React.FC = () => {
    const [signinForm] = Form.useForm();
    const [formError, setFormError] = useState({ enable: false, helpText: '' });
    const formErrorRef = useRef(formError);

    const onFinish: FormProps<SigninFormType>['onFinish'] = async (values) => {
        try {
            const response = await authAPI.signin(
                values.login,
                values.password
            );
            if (response.status === 200) {
                localStorage.removeItem('token');
                localStorage.setItem('token', response.data as string);

                // TODO futher behaviour
            }
        } catch (err) {
            let error = err as AxiosError;
            setFormError({
                enable: true,
                helpText: 'Логин или пароль введены неверно!',
            });
        }
    };

    useEffect(() => {
        formErrorRef.current = formError;
        if (formError.enable) {
            signinForm.validateFields();
        }
    }, [formError]);

    return (
        <Form
            name="signin"
            form={signinForm}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{
                padding: 8,
                maxWidth: 600,
                maxHeight: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 100,
            }}
            onFinish={onFinish}
            onChange={() => {
                if (formError.enable) {
                    setFormError({ enable: false, helpText: '' });
                }
            }}
            autoComplete="off"
        >
            <Form.Item<SigninFormType>
                label="Логин"
                name="login"
                rules={[
                    { required: true, message: 'Введите логин!' },
                    () => ({
                        validator() {
                            if (formError.enable) {
                                return Promise.reject(formError.helpText);
                            }
                            return Promise.resolve();
                        },
                    }),
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item<SigninFormType>
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Введите пароль!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};
