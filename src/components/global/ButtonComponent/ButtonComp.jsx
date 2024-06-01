import { Button } from 'antd';
import React from 'react';

const ButtonComp = ({
    size,
    styleButton = {},
    styleTextButton = {},
    textbutton,
    disabled,
    ...rests
}) => {
    return (
        <Button
            style={{
                ...styleButton,
                background: disabled ? '#ccc' : styleButton.background
            }}
            size={size}
            disabled={disabled}
            {...rests}
        >
            <span style={styleTextButton}>{textbutton}</span>
        </Button>
    );
}

export default ButtonComp;
