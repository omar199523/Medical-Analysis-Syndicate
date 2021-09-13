import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StortData from '../StortData';
import DisplayData from '../DisplayData';

const Data = () => {
  const [membersData, setMembersData] = useState({
    datas: [],
    nameStart: '',
    affiliationYear: 2021,
    graduationYear: 2021,
    governorate: 2021,
  });
  useEffect(() => {
    axios.get('http://localhost:5000/member/').then((res) => {
      console.log(res.data);
    });
  });
  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setMembersData({ ...Data, [name]: value });
  };
  return (
    <div>
      <StortData
        handleInputChange={handleInputChange}
        nameStart={membersData.nameStart}
        affiliationYear={membersData.affiliationYear}
        graduationYear={membersData.graduationYear}
        governorate={membersData.governorate}
      />
      <DisplayData Datas={membersData.datas} />
    </div>
  );
};
export default Data;
