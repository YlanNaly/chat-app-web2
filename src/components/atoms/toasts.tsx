import Toast from 'react-bootstrap/Toast';
import Image from 'next/image';

function ToastsMessage() {
  return (
    <Toast
      className="d-inline-block m-1"
    >
      <Toast.Header>
        <Image
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">Bootstrap</strong>
        </Toast.Header>
        <Toast.Body className='text-white'>
            Hello, world! This is a toast message.
        </Toast.Body>
    </Toast>
  );
}

export default ToastsMessage;