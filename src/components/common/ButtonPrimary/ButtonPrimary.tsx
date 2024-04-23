import React from 'react';

import { Button, ConfigProvider } from 'antd';
import { PRIMARY_COLOR } from '../../../constants/colors';

type ButtonProps = {
    value: string;
};

export const ButtonPrimary: React.FC<ButtonProps> = ({ value }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: PRIMARY_COLOR,
                },
            }}
        >
            <Button
                type="primary"
                style={{ backgroundColor: PRIMARY_COLOR }}
            >
                {value}
            </Button>
        </ConfigProvider>
    );
};
