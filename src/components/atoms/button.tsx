import {
    Button as ReactButton, 
    ButtonProps as RButtonProps
} from "react-bootstrap"

type ButtonProps = Pick<RButtonProps, "onClick" | "placeholder" | "className" | "type">;

const Button = (props:ButtonProps) => {
    return(
        <ReactButton
        style={{marginTop:"12px" , marginLeft:"3px"}}
        {...props}
        />
    )
}

export default Button;