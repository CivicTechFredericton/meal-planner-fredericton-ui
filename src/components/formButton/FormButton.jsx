import React from 'react';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";


const FormButton = (props) => {

    const { onClickValues, onClick, label, values, setFieldValue, isSubmitting, ...buttonProps } = props;

    const onClickFormValues = () => {
        if (onClickValues) {
            onClickValues(values);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <Box p={0.6}>
            <Button
                onClick={onClickFormValues}
                {...buttonProps}
            >
                {label}
            </Button>
        </Box>
    );
};

FormButton.defaultProps = {
    type: "button",
    color: "primary",
    variant: "contained"
};

FormButton.propTypes = {
    label: PropTypes.string,
    onClickValues: PropTypes.func,
    onClick: PropTypes.func,
    values: PropTypes.any,
    type: PropTypes.string,
    color: PropTypes.string,
    variant: PropTypes.string,
};

export default FormButton;





