// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   Grid,
//   MenuItem,
//   Button,
//   Box,
//   Typography,
// } from "@mui/material";
// import { FamilyRestroom as FamilyIcon, Add as AddIcon } from "@mui/icons-material";
// import { useFormik } from "formik";
// import StyledTextField from "../../ui/StyledTextField";
// import SectionHeader from "../../layout/SectionHeader";

// const FamilyDetails = () => {
//   const membersList = [
//     { id: 1, name: "Amit Sharma" },
//     { id: 2, name: "Ravi Kumar" },
//     { id: 3, name: "Neha Singh" },
//   ];

//   const [selectedMember, setSelectedMember] = useState("");
//   const [showExtraForm, setShowExtraForm] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       selectedMember: "",
//       memberName: "",
//       relationship: "",
//       familyMemberName: "",
//       membershipNumber: "",
//       mobileNo: "",
//     },
//     onSubmit: (values, { resetForm }) => {
//       console.log("Family Member Details Submitted:", values);
//       alert("Family member saved successfully!");
//       resetForm();
//       setSelectedMember("");
//       setShowExtraForm(false);
//     },
//   });

//   const handleMemberSelect = (event) => {
//     const memberName = event.target.value;
//     setSelectedMember(memberName);
//     formik.setFieldValue("selectedMember", memberName);
//     formik.setFieldValue("memberName", memberName);
//   };

//   const handleAddAnotherMember = () => {
//     setShowExtraForm(true);
//     formik.resetForm({
//       values: {
//         selectedMember: "",
//         memberName: "",
//         relationship: "",
//         familyMemberName: "",
//         membershipNumber: "",
//         mobileNo: "",
//       },
//     });
//   };

//   return (
//     <Card
//       sx={{
//         borderRadius: 3,
//         boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
//       }}
//     >
//       <CardContent sx={{ p: 4 }}>
//         <SectionHeader
//           icon={<FamilyIcon />}
//           title="Family Information"
//           subtitle="Add family members related to the selected member"
//         />

//         <form onSubmit={formik.handleSubmit}>
//           <Grid container spacing={3} sx={{ mt: 2 }}>
//             {/* Select Member */}
//             <Grid size={{xs:6, sm:6, md:3}}>
//               <StyledTextField
//                 select
//                 label="Select Member"
//                 name="selectedMember"
//                 value={selectedMember}
//                 onChange={handleMemberSelect}
//               >
//                 <MenuItem value="">Select Member</MenuItem>
//                 {membersList.map((member) => (
//                   <MenuItem key={member.id} value={member.name}>
//                     {member.name}
//                   </MenuItem>
//                 ))}
//               </StyledTextField>

//               {/* Membership Number (auto-filled) */}
//               <Grid size={{xs:6, sm:6, md:3}}>
//                 <StyledTextField
//                   label="Membership No."
//                   name="membershipNumber"
//                   value={formik.values.membershipNumber}
//                   InputProps={{ readOnly: true }}
//                 />
//               </Grid>
//             </Grid>

//             {/* Show Family Form after member selection */}
//             {selectedMember && (
//               <>
//                 {/* Member Name */}
//                 <Grid size={{xs:6, sm:6, md:3}}>
//                   <StyledTextField
//                     label="Member Name"
//                     name="memberName"
//                     value={formik.values.memberName}
//                     InputProps={{ readOnly: true }}
//                   />
//                 </Grid>

//                 {/* Relationship */}
//                 <Grid size={{xs:6, sm:6, md:3}}>
//                   <StyledTextField
//                     label="Relationship"
//                     name="relationship"
//                     value={formik.values.relationship}
//                     onChange={formik.handleChange}
//                   />
//                 </Grid>

//                 {/* Family Member Name */}
//                 <Grid size={{xs:6, sm:6, md:3}}>
//                   <StyledTextField
//                     label="Family Member Name"
//                     name="familyMemberName"
//                     value={formik.values.familyMemberName}
//                     onChange={formik.handleChange}
//                   />
//                 </Grid>

//                 {/* Membership Number */}
//                 <Grid size={{xs:6, sm:6, md:3}}>
//                   <StyledTextField
//                     label="Membership Number"
//                     name="membershipNumber"
//                     value={formik.values.membershipNumber}
//                     onChange={formik.handleChange}
//                   />
//                 </Grid>

//                 {/* Mobile Number */}
//                 <Grid size={{xs:6, sm:6, md:3}}>
//                   <StyledTextField
//                     label="Mobile Number"
//                     name="mobileNo"
//                     type="tel"
//                     value={formik.values.mobileNo}
//                     onChange={formik.handleChange}
//                   />
//                 </Grid>

//                 {/* Submit & Add Another Buttons */}
//                 <Grid item xs={12}>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       mt: 2,
//                     }}
//                   >
//                     <Button
//                       type="submit"
//                       variant="contained"
//                       color="primary"
//                       sx={{ borderRadius: 2, px: 3 }}
//                     >
//                       Save
//                     </Button>

//                     <Button
//                       variant="outlined"
//                       startIcon={<AddIcon />}
//                       color="secondary"
//                       onClick={handleAddAnotherMember}
//                       sx={{ borderRadius: 2 }}
//                     >
//                       Family Member
//                     </Button>
//                   </Box>
//                 </Grid>
//               </>
//             )}
//           </Grid>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default FamilyDetails;

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  MenuItem,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import {
  FamilyRestroom as FamilyIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useFormik } from "formik";
import StyledTextField from "../../ui/StyledTextField";
import SectionHeader from "../../layout/SectionHeader";

const FamilyDetails = () => {
  // ✅ Sample members list with membership numbers
  const membersList = [
    { id: 1, name: "Amit Sharma", membershipNo: "M001" },
    { id: 2, name: "Ravi Kumar", membershipNo: "M002" },
    { id: 3, name: "Neha Singh", membershipNo: "M003" },
  ];

  const [selectedMember, setSelectedMember] = useState("");
  const [familyMembers, setFamilyMembers] = useState([
    { relationship: "", familyMemberName: "", mobileNo: "" },
  ]);

  //  Formik setup
  const formik = useFormik({
    initialValues: {
      memberName: "",
      membershipNumber: "",
      relationship: "", 
      familyMemberName: "", 
      mobileNo: "" ,
    },
    onSubmit: (values, { resetForm }) => {
      console.log("Family Member Details Submitted:", {
        member: selectedMember,
        familyMembers,
      });
      alert("Family details saved successfully!");
      resetForm();
      setSelectedMember("");
      setFamilyMembers([{ relationship: "", familyMemberName: "", mobileNo: "" }]);
    },
  });

  //  Handle member selection
  const handleMemberSelect = (event) => {
    const memberName = event.target.value;
    const selected = membersList.find((m) => m.name === memberName);

    setSelectedMember(memberName);
    formik.setFieldValue("memberName", memberName);
    formik.setFieldValue("membershipNumber", selected?.membershipNo || "");
  };

  //  Add new family member block
  const handleAddFamilyMember = () => {
    setFamilyMembers([...familyMembers, { relationship: "", familyMemberName: "", mobileNo: "" }]);
  };

  //  Remove a family member block
  const handleRemoveFamilyMember = (index) => {
    const updated = familyMembers.filter((_, i) => i !== index);
    setFamilyMembers(updated);
  };

  // Update a specific family member field
  const handleFamilyMemberChange = (index, field, value) => {
    const updated = [...familyMembers];
    updated[index][field] = value;
    setFamilyMembers(updated);
  };

  return (
    <Card sx={{ borderRadius: 3, boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
      <CardContent sx={{ p: 4 }}>
        <SectionHeader
          icon={<FamilyIcon />}
          title="Family Information"
          subtitle="Select member and fill family member details"
        />

        {/* Step 1: Select Member */}
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid size={{xs:6, sm:6, md:3}}>
            <StyledTextField
              select
              label="Select Member"
              value={selectedMember}
              onChange={handleMemberSelect}
            >
              <MenuItem value="">Select Member</MenuItem>
              {membersList.map((member) => (
                <MenuItem key={member.id} value={member.name}>
                  {member.name}
                </MenuItem>
              ))}
            </StyledTextField>
          </Grid>
        </Grid>

        {/* Step 2: Show Family Form after selection */}
        {selectedMember && (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3} sx={{ py: 3 }}>
              {/* Member Name (auto-filled) */}
              <Grid size={{xs:6, sm:6, md:3}}>
                <StyledTextField
                  label="Member Name"
                  name="memberName"
                  value={formik.values.memberName}
                  InputProps={{ readOnly: true }}
                />
              </Grid>

              {/* Membership Number (auto-filled) */}
              <Grid size={{xs:6, sm:6, md:3}}>
                <StyledTextField
                  label="Membership No."
                  name="membershipNumber"
                  value={formik.values.membershipNumber}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>

            {/* Dynamic Family Member Fields */}
            {familyMembers.map((f, index) => (
              <Grid container spacing={3} sx={{ py: 1 }} key={index}>
                <Grid size={{xs:6, sm:6, md:3}}>
                  <StyledTextField
                    label="Relationship"
                    name={`relationship-${index}`}
                    value={f.relationship}
                    onChange={(e) =>
                      handleFamilyMemberChange(index, "relationship", e.target.value)
                    }
                  />
                </Grid>

                <Grid size={{xs:6, sm:6, md:3}}>
                  <StyledTextField
                    label="Family Member Name"
                    name={`familyMemberName-${index}`}
                    value={f.familyMemberName}
                    onChange={(e) =>
                      handleFamilyMemberChange(index, "familyMemberName", e.target.value)
                    }
                  />
                </Grid>

                <Grid size={{xs:6, sm:6, md:3}}>
                  <StyledTextField
                    label="Mobile No."
                    name={`mobileNo-${index}`}
                    type="tel"
                    value={f.mobileNo}
                    onChange={(e) =>
                      handleFamilyMemberChange(index, "mobileNo", e.target.value)
                    }
                  />
                </Grid>

                {/* Delete Button */}
                <Grid item xs={12} sm={1}>
                  {familyMembers.length > 1 && (
                    <IconButton
                      color="error"
                      onClick={() => handleRemoveFamilyMember(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            ))}

            {/* Add Another Family Member Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
              <Button
                startIcon={<AddIcon />}
                variant="outlined"
                color="primary"
                onClick={handleAddFamilyMember}
                sx={{ borderRadius: 2 }}
              >
                Family Member
              </Button>
            </Box>

            {/* Submit Button */}
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ borderRadius: 2, px: 3 }}
              >
                Save
              </Button>
            </Box>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default FamilyDetails;

