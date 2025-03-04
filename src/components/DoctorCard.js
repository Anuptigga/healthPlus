import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 360px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  &:hover {
   box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
 object-position: center 10%;
  margin: 10px auto;
`;

const CardContent = styled.div`
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DoctorName = styled.h3`
  margin: 0;
  font-size: 20px;
  color:rgb(31, 86, 116);
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const DoctorInfo = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: ${props => props.info === 'specialty' ? '#009688' : '#555'};
`;

const ExtraInfo = styled.div`
  font-size: 14px;
  color: #777;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  justify-content: center;
  padding: 15px;
  border-top: 1px solid #eee;
`;

const Button2 = styled.button`
  padding: 10px 15px;
  height: 60px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 800;
  color: rgb(15, 54, 75);
  background-color: #009688;
  transition: 0.3s;
  &:hover {
    background-color:rgb(0, 190, 171);
  }
`;
const Button1 = styled.button`
  padding: 10px 15px;
  height: 60px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 800;
  color:#009688;
  transition: 0.3s;
  border: 1px solid #009688;
  &:hover {
    background-color:rgb(0, 190, 171);
    color:rgb(15, 54, 75);
    
  }
`;



const DoctorCard = ({ doctor }) => {
  return (
    <Card>
      <CardImage src={doctor.image} alt={doctor.name} />
      <CardContent>
        <DoctorName>{doctor.name}</DoctorName>
        <DoctorInfo info="specialty">{doctor.specialty}</DoctorInfo>
        <DoctorInfo>{doctor.experience}</DoctorInfo>
        <DoctorInfo>{doctor.location}</DoctorInfo>
        <DoctorInfo>{doctor.phone}</DoctorInfo>
        <ExtraInfo>
          Timings: {doctor.timings}
        </ExtraInfo>
      </CardContent>
      <ButtonGroup>
        <Button1>View Profile</Button1>
        <Button2>Book Appointment</Button2>
      </ButtonGroup>
    </Card>
  );
};

export default DoctorCard;
