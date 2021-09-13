import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Input from '../../componants/Input';
import Select from '../../componants/Select';
import './style.css';

const NewMember = () => {
  const [member, setMember] = useState({
    numberMember: 0,
    nameAranic: '',
    personId: 0,
    nameEngish: '',
    Workplace: '',
    DateOfBirth: '',
    placeOfBirth: '',
    Nationality: '',
    SocialStatus: '',
    gender: '',
    email: '',
    mobileNumber: 0,
    mobileNumber2: 0,
    mobileNumber3: 0,
    TelephoneNumber: 0,
    city: '',
    address: '',
    qualification: '',
    specialization: '',
    englishSpecialization: '',
    universityName: '',
    universityCountry: '',
    graduationRate: '',
    graduationYear: '',
    schoolName: '',
    precentage: 0,
    branchInSchool: '',
    graduationYearInShoole: '',
    PlacementYear: '',
  });

  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setMember({ ...member, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const PlacementYear = new Date().getFullYear();
    setMember({ ...member, PlacementYear });

    const {
      numberMember,
      nameAranic,
      personId,
      nameEngish,
      Workplace,
      DateOfBirth,
      placeOfBirth,
      Nationality,
      SocialStatus,
      gender,
      email,
      mobileNumber,
      mobileNumber2,
      mobileNumber3,
      TelephoneNumber,
      city,
      address,
      qualification,
      specialization,
      englishSpecialization,
      universityName,
      universityCountry,
      graduationRate,
      graduationYear,
      schoolName,
      precentage,
      branchInSchool,
      graduationYearInShoole,
    } = member;

    axios
      .post('/member/add', {
        numberMember,
        nameAranic,
        personId,
        nameEngish,
        Workplace,
        DateOfBirth,
        placeOfBirth,
        Nationality,
        SocialStatus,
        gender,
        email,
        mobileNumber,
        mobileNumber2,
        mobileNumber3,
        TelephoneNumber,
        city,
        address,
        qualification,
        specialization,
        englishSpecialization,
        universityName,
        universityCountry,
        graduationRate,
        graduationYear,
        schoolName,
        precentage,
        branchInSchool,
        graduationYearInShoole,
        PlacementYear,
      })
      .then(() => console.log('req is send'))
      .catch((err) => console.log(`Erorr${err}`));
  };

  const {
    numberMember,
    nameAranic,
    personId,
    nameEngish,
    Workplace,
    DateOfBirth,
    placeOfBirth,
    Nationality,
    SocialStatus,
    gender,
    email,
    mobileNumber,
    mobileNumber2,
    mobileNumber3,
    TelephoneNumber,
    city,
    address,
    qualification,
    specialization,
    englishSpecialization,
    universityName,
    universityCountry,
    graduationRate,
    graduationYear,
    schoolName,
    precentage,
    branchInSchool,
    graduationYearInShoole,
  } = member;
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Data">Data</Link>
          </li>
        </ul>
      </nav>
      <form className="new-memder continer" onSubmit={handleOnSubmit}>
        <div className="basic-info">
          <h3>المعلومات الاساسية</h3>
          <Input
            type="number"
            label="رقم العضوية"
            placeholder="numberMember"
            value={numberMember}
            handleInputChange={handleInputChange}
            name="numberMember"
          />
          <Input
            type="text"
            label="الاسم باللغة العربية رباعي"
            placeholder="nameAranic"
            value={nameAranic}
            handleInputChange={handleInputChange}
            name="nameAranic"
          />
          <Input
            type="text"
            label="الاسم باللغة الانجليزية"
            placeholder="nameEngish"
            value={nameEngish}
            handleInputChange={handleInputChange}
            name="nameEngish"
          />
          <Input
            type="number"
            label="رقم الهوية"
            placeholder="personId"
            value={personId}
            handleInputChange={handleInputChange}
            name="personId"
          />
          <Input
            type="text"
            label="مكان العمل"
            placeholder="Workplace"
            value={Workplace}
            handleInputChange={handleInputChange}
            name="Workplace"
          />
          <Input
            type="Date"
            label="تاريخ الميلاد"
            placeholder="DateOfBirth"
            value={DateOfBirth}
            handleInputChange={handleInputChange}
            name="DateOfBirth"
          />
          <Input
            type="text"
            label="مكان الميلاد"
            placeholder="placeOfBirth"
            value={placeOfBirth}
            handleInputChange={handleInputChange}
            name="placeOfBirth"
          />
          <Select
            label="الجنس"
            value={gender}
            handleInputChange={handleInputChange}
            Name="gender"
            options={['ذكر', 'أنثى']}
          />
          <Input
            type="text"
            label="الجنسية"
            placeholder="Nationality"
            value={Nationality}
            handleInputChange={handleInputChange}
            name="Nationality"
          />
          <Select
            label="الحالة الاجتماعية"
            value={SocialStatus}
            handleInputChange={handleInputChange}
            Name="SocialStatus"
            options={['أعزب/عزباء', 'متزوج/متزوجة', 'مطلق/مطلقة']}
          />
          <Input
            type="text"
            label="المدينة"
            placeholder="address"
            value={city}
            handleInputChange={handleInputChange}
            name="city"
          />
          <Input
            type="text"
            label="العنوان مع أقرب معلم"
            placeholder="address"
            value={address}
            handleInputChange={handleInputChange}
            name="address"
          />
        </div>

        <div className="coniction-info">
          <h3>معلومات الاتصال</h3>
          <Input
            type="number"
            label="رقم الهاتف"
            placeholder="TelephoneNumber"
            value={TelephoneNumber}
            handleInputChange={handleInputChange}
            name="TelephoneNumber"
          />
          <Input
            type="number"
            label="رقم الجوال"
            placeholder="mobileNumber"
            value={mobileNumber}
            handleInputChange={handleInputChange}
            name="mobileNumber"
          />
          <Input
            type="number"
            label="رقم الجوال الثاني"
            placeholder="mobileNumber"
            value={mobileNumber2}
            handleInputChange={handleInputChange}
            name="mobileNumber"
          />
          <Input
            type="number"
            label="رقم الوطنية"
            placeholder="mobileNumber"
            value={mobileNumber3}
            handleInputChange={handleInputChange}
            name="mobileNumber"
          />
          <Input
            type="email"
            label="البريد الالكتروني"
            placeholder="email"
            value={email}
            handleInputChange={handleInputChange}
            name="email"
          />
        </div>

        <div>
          <h3>معلومات التعليم الجامعي</h3>
          <Select
            label="المؤهل العلمي"
            value={qualification}
            handleInputChange={handleInputChange}
            Name="qualification"
            options={['دبلوم', 'دكتورة', 'ماجسير', 'بكالوريوس']}
          />
          <Input
            type="text"
            label="التخصص الدقيق"
            placeholder="specialization"
            value={specialization}
            handleInputChange={handleInputChange}
            name="specialization"
          />
          <Input
            type="text"
            label="التخصص الدقيق باللغة الانجليزية"
            placeholder="englishSpecialization"
            value={englishSpecialization}
            handleInputChange={handleInputChange}
            name="englishSpecialization"
          />
          <Input
            type="text"
            label="أسم الجامعة/الكلية"
            placeholder="universityName"
            value={universityName}
            handleInputChange={handleInputChange}
            name="universityName"
          />
          <Input
            type="text"
            label="بلد الجامعة/الكلية"
            placeholder="universityCountry"
            value={universityCountry}
            handleInputChange={handleInputChange}
            name="universityCountry"
          />
          <Input
            type="text"
            label="معدل التخرج"
            placeholder="graduationRate"
            value={graduationRate}
            handleInputChange={handleInputChange}
            name="graduationRate"
          />
          <Input
            type="text"
            label="سنة التخرج"
            placeholder="graduationYear"
            value={graduationYear}
            handleInputChange={handleInputChange}
            name="graduationYear"
          />
        </div>

        <div>
          <h3>معلومات الثانوية العامة</h3>
          <Input
            type="text"
            label="أسم المدرسة"
            placeholder="schoolName"
            value={schoolName}
            handleInputChange={handleInputChange}
            name="schoolName"
          />
          <Select
            label="الفرع"
            value={branchInSchool}
            handleInputChange={handleInputChange}
            Name="branchInSchool"
            options={['علمي', 'أدبي', 'صناعي']}
          />
          <Input
            type="text"
            label="النسبة المئوية"
            placeholder="precentage"
            value={precentage}
            handleInputChange={handleInputChange}
            name="precentage"
          />
          <Input
            type="text"
            label="سنة التخرج"
            placeholder="graduationYearInShoole"
            value={graduationYearInShoole}
            handleInputChange={handleInputChange}
            name="graduationYearInShoole"
          />
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  );
};
// NewMember.PropTypes = {
//   admin: PropTypes.bool,
// };

export default NewMember;
