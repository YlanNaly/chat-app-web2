import {
    Button as ReactButton, 
    ButtonProps as RButtonProps
} from "react-bootstrap"

type ButtonProps = Pick<RButtonProps, "onClick" | "placeholder" | "className">;

const Button = (props:ButtonProps) => {
    return(
        <ReactButton
        className={props.className}
        {...props}
        />
    )
}

export default Button;