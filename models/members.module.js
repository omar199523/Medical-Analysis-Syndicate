const mongoose = require('mongoose');

const { Schema } = mongoose;

const memberSchema = new Schema(
  {
    numberMember: { type: Number, required: true, Unique: true },
    personId: { type: Number, required: true, Unique: true, minLingth: 9 },
    nameAranic: { type: String, required: true },
    nameEngish: { type: String, required: true },
    Workplace: { type: String, required: false },
    DateOfBirth: { type: Date, required: true },
    placeOfBirth: { type: String, required: true },
    Nationality: { type: String, required: true },
    SocialStatus: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: Number, required: true, minLingth: 10 },
    mobileNumber2: { type: Number, required:false, minLingth: 10 },
    mobileNumber3: { type: Number, required: false, minLingth: 10 },
    TelephoneNumber: { type: Number, required: false, minLingth: 10 },
    city: { type: String, required: true },
    address: { type: String, required: true },
    qualification: { type: String, required: true },
    specialization: { type: String, required: true },
    englishSpecialization: { type: String, required: true },
    universityName: { type: String, required: true },
    universityCountry: { type: String, required: true },
    graduationRate: { type: Number, required: true },
    graduationYear: { type: Number, required: true },
    schoolName: { type: String, required: true },
    branchInSchool: { type: String, required: true },
    precentage: { type: Number, required: true },
    graduationYearInShoole: { type: Number, required: true },
    PlacementYear:{ type: Number, required: true }
  },
  {
    timestamps: true,
  }
);
const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
