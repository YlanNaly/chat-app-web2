import React from 'react';
import { 
    MDBCol, 
    MDBContainer, 
    MDBRow, 
    MDBCard, 
    MDBCardText, 
    MDBCardBody, 
    MDBCardImage, 
    MDBBtn, 
    MDBTypography, 
    MDBIcon, 
    MDBTextArea
} from 'mdb-react-ui-kit';
import { AiFillEdit } from 'react-icons/ai';

export type TProfile = {
    name:string;
    bio:string;
}

export default function ProfileStatistics(props:TProfile) {
    MDBIcon 
} from 'mdb-react-ui-kit';

export type TProfile = {
    name:string;
    channel:number
}

export default function ProfileStatistics(props:TProfile) {

  return (
    <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <span style={{float:"right"}}><AiFillEdit/></span>
                <MDBTypography tag="h4">{props.name}</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  {props.bio}
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="facebook" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="skype" size="lg" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}