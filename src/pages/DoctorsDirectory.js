import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DoctorCard from '../components/DoctorCard';
import doctorsData from '../data';


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


const Content = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;


const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
`;


const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const DoctorsDirectory = () => {
  const [specialtyInput, setSpecialtyInput] = useState('');
  const [regionInput, setRegionInput] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

 
  const specialties = [...new Set(doctorsData.map(doc => doc.specialty))];
  const regions = [...new Set(doctorsData.map(doc => doc.region))];


  useEffect(() => {
    const filtered = doctorsData.filter(doc => {
      const matchesSpecialty = specialtyInput
        ? doc.specialty.toLowerCase() === specialtyInput.toLowerCase()
        : true;
      const matchesRegion = regionInput
        ? doc.region.toLowerCase() === regionInput.toLowerCase()
        : true;
      return matchesSpecialty && matchesRegion;
    });
    setFilteredDoctors(filtered);
  }, [specialtyInput, regionInput]);

  return (
    <PageContainer>
      <Navbar />
      <Content>
        <FilterContainer>
          <InputGroup>
            <Label htmlFor="specialty">Specialty</Label>
            <Select
              id="specialty"
              value={specialtyInput}
              onChange={(e) => setSpecialtyInput(e.target.value)}
            >
              <option value="">Select Specialty</option>
              {specialties.map((spec, index) => (
                <option key={index} value={spec}>
                  {spec}
                </option>
              ))}
            </Select>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="region">Region (City)</Label>
            <Select
              id="region"
              value={regionInput}
              onChange={(e) => setRegionInput(e.target.value)}
            >
              <option value="">Select Region</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </Select>
          </InputGroup>
        </FilterContainer>
        <CardsContainer>
          {filteredDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </CardsContainer>
      </Content>
      <Footer />
    </PageContainer>
  );
};

export default DoctorsDirectory;
