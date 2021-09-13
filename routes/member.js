const router = require('express').Router();
const excelToJson = require('convert-excel-to-json');
const Member = require('../models/members.module');

// router.use(bodyParser.urlencoded({ extended: false }))
// router.use(bodyParser.json())
router.route('/').get((req, res) => {
  Member.find()
    .then((members) => res.json(members))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
router.route('/:id').get((req, res) => {
  Member.findById(req.params.id)
    .then((member) => res.json(member))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
router.route('/delete/:id').delete((req, res) => {
  Member.findByIdAndDelete(req.params.id)
    .then(() => res.json('member dleated!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
router.route('/update/:id').post((req, res) => {
  const { nameEngish } = req.body;
  Member.findById(req.params.id)
    .then((member) => {
      // eslint-disable-next-line no-param-reassign
      member.nameEngish = nameEngish;

      member
        .save()
        .then(() => res.json('member update!'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
router.route('/upLoadDataFormFile').post((req,res) => {
  if(req.files === null){
    return res.status(400).json({smas:"no file upload"})
  }
  const {file}=req.files;
  file.mv(`${__dirname}/../client/public/uploads/file/${file.name}`,(err)=>{
    if(err){
      console.error(err);
      return res.status(500).send(err)
    }
    const asyncConvert = new Promise((resolve)=>{
      resolve = excelToJson({
        sourceFile:`${__dirname}/../client/public/uploads/file/${file.name}`,
        columnToKey:{
          B:'numberMember',
          C:'nameAranic',
          D:'personId',
          E:'nameEngish',
          F:'Workplace',
          G:'DateOfBirth',
          H:'placeOfBirth',
          I:'Nationality',
          J:'SocialStatus',
          K:'gender',
          L:'email',
          M:'mobileNumber',
          N:'mobileNumber2',
          O:'mobileNumber3',
          P:'TelephoneNumber',
          Q:'city',
          R:'address',
          S:'qualification',
          T:'specialization',
          U:'englishSpecialization',
          V:'universityName',
          W:'universityCountry',
          X:'graduationRate',
          Y: 'graduationYear',
          Z:'branchInSchool',
          AA:'PlacementYear',
        }
      })
    })
    asyncConvert
    .then((result)=>{new Member({...resutl})})
    .save()
    .then(() => res.json('member added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`))
  })
  
    
});


router.route('/add').post((req, res) => {
  const {
    personId,
    numberMember,
    nameAranic,
    nameEngish,
    Workplace,
    PreviousWorkplaces,
    DateOfBirth,
    placeOfBirth,
    Nationality,
    SocialStatus,
    email,
    mobileNumber,
    TelephoneNumber,
    address,
    qualification,
    specialization,
    englishSpecialization,
    universityName,
    universityCountry,
    graduationRate,
    graduationYear,
    schoolName,
    branchInSchool,
    precentage,
    graduationYearInShoole,
  } = req.body;

  const newMember = new Member({
    personId,
    numberMember,
    nameAranic,
    nameEngish,
    Workplace,
    PreviousWorkplaces,
    DateOfBirth,
    placeOfBirth,
    Nationality,
    SocialStatus,
    email,
    mobileNumber,
    TelephoneNumber,
    address,
    qualification,
    specialization,
    englishSpecialization,
    universityName,
    universityCountry,
    graduationRate,
    graduationYear,
    schoolName,
    branchInSchool,
    precentage,
    graduationYearInShoole,
  });
  newMember
    .save()
    .then(() => res.json('member added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
