import React, {FC} from 'react';
import { ConfigProvider } from 'antd';

import * as colors from '../../common/styles/colors';


type CustomConfigProviderType = {
    children: React.ReactNode
}
export const CustomConfigProvider: FC<CustomConfigProviderType> = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: colors.primaryColor,
                    colorPrimaryHover: colors.primaryColorHover,
                    fontSize: 16,
                },
                components: {
                    Table: {
                        borderColor: colors.borderTableColor,
                        headerBg: colors.accentColor,
                        headerSortActiveBg: colors.accentColor,
                        headerSortHoverBg: colors.headerSortHoverBgColor,
                        rowHoverBg: colors.rowHoverBgColor,
                    },
                    Select: {
                        colorLinkHover: colors.accentColor,
                    },
                }
            }}
        >
            {children}
        </ConfigProvider>
    );
};
