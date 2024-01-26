import React from 'react'

import { Button, ConfigProvider } from 'antd';

type ButtonProps = {
    value: string;
}

const colorPrimary = "#F0A202";

export const ButtonPrimary: React.FC<ButtonProps> = ({ value }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary,
                },
            }}
        >
            <Button type="primary" style={{backgroundColor: colorPrimary}}>{value}</Button>
        </ConfigProvider>
    )
}
