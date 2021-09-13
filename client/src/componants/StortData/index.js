/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';
import Input from '../Input';
import Select from '../Select';

const StortData = ({
  handleInputChange,
  nameStart,
  affiliationYear,
  graduationYear,
  governorate,
}) => {
  const arr = [];
  // let Date = new Date().getFullYear();
  // eslint-disable-next-line no-plusplus
  for (let i = 1950; i < 2021; i++) {
    arr.push(i);
  }
  return (
    <form className="stort-data">
      <Input
        type=" text"
        placeholder="الاسم"
        vlaue={nameStart}
        handleInputChange={handleInputChange}
        Name="nameStart"
      />
      <Select
        value={affiliationYear}
        handleInputChange={handleInputChange}
        Name="affiliationYear"
        options={arr}
      />
      <Select
        value={graduationYear}
        handleInputChange={handleInputChange}
        Name="graduationYear"
        options={arr}
      />
      <Select
        value={governorate}
        handleInputChange={handleInputChange}
        Name="governorate"
        options={['رفح', 'خانيونس', 'الوسطى', 'غزة', 'الشمال', '', '']}
      />
    </form>
  );
};
export default StortData;
