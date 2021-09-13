/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

const DisplayData = ({ datas }) => (
  <div>
    <div className="data-header continer">
      <h2>رقم العضوية</h2>
      <h2>الاسم</h2>
      <h2>رقم الهوية</h2>
      <h2>سنةالانتساب</h2>
      <h2> عدد سنوات المتراكمة</h2>
    </div>

    {datas
      ? datas.map((data) => (
          <div className="one-member">
            <h2>{data.numberMember}</h2>
            <h2>{data.nameAranic}</h2>
            <h2>{data.personId}</h2>
            <h2>{data.personId}</h2>
            <h2>{data.personId}</h2>
          </div>
        ))
      : null}
  </div>
);
export default DisplayData;
