import {
    Button as ReactButton, 
    ButtonProps as RButtonProps
} from "react-bootstrap"

type ButtonProps = Pick<RButtonProps, "onClick" | "placeholder">;

const Button = (props:ButtonProps) => {
    return(
        <ReactButton
        {...props}
        />
    )
}

export default Button;