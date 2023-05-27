import Toast from 'react-bootstrap/Toast';
import Image from 'next/image';

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
    >
      <Toast.Header>
        <Image
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
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