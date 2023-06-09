import Toast from 'react-bootstrap/Toast';

export type TToast = {
  title:string;
  message:string;
  variant:string;
}

function ToastsMessage(props:TToast) {
  return (
    <Toast
      className="d-inline-block m-1"
      bg={props.variant.toLowerCase()}
      style={{position:"fixed" , zIndex:100}}
    >
      <Toast.Header>
        <strong className="me-auto">
          {props.title}
        </strong>
        </Toast.Header>
        <Toast.Body className='text-white'>
           {props.message}
        </Toast.Body>
    </Toast>
  );
}

export default ToastsMessage;