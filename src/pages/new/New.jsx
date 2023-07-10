import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
 import { Box,Typography,Button,TextField } from "@mui/material";
 import axios from "axios";

const New = ({ inputs, title }) => {
  const [formData, setFormData] = useState({
    userName: '',
    loginName: '',
    pwd: '',
    email: '',
    mobile: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiUrl = 'http://192.168.0.90:8080/api/UserMaster/UserMaster';
    const body = {
      token: "",
      userId: 0,
      roleId: 1,
      loginName: formData.loginName,
      userName: formData.userName,
      pwd: formData.pwd,
      email: formData.email,
      mobile: formData.mobile,
      isActive: true,
      commandId: 1,
      createBy: 0,
      createDate: "2022-11-03T09:08:31.506Z",
      createIp:"rgedrg54",
      updateBy:0,
      updateDate: "2022-11-03T09:08:31.506Z",
      updateIp:"mtgjvt",
      panelId:1,
      ualid:0,
      userAccessTimeId: 0,
      isTemporaryCreditAllowed: true,
     panelCode: "admin"
    };
   
    try {
      const res = await axios.post(apiUrl, body,{
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.status === 200) {
        console.log(res.data);
        setFormData({
          userName: '',
          loginName: '',
          pwd: '',
          email: '',
          mobile: '',
        });
      } else {
        console.log(res.error);
      }
    } catch (err) {
      console.log(err);
    }

  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const Popup = () => {
    if (showPopup) {
      return (
        <Box sx={{
          position: 'absolute',
          top: '500px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          bgcolor: 'white',
          borderRadius: 5,
          p: 5,
        }}>
          
          <Typography>User successfully created.</Typography>
          <Button onClick={handleClosePopup}>Close</Button>
        </Box>
      );
    }
    return null;
  }
  console.log(inputs.value);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
         
          <div className="right">
          <form className='App' onSubmit={handleSubmit} >
      <TextField id="outlined-basic" 
      name='userName'
      label="usernamne" margin='dense' required value={formData.userName||""} variant="outlined" onChange={handleChange} />
      <TextField id="outlined-basic" name='loginName' label="Login Name" margin='dense' required value={formData.loginName||''} variant="outlined" onChange={handleChange} />
      <TextField id="outlined-basic" type='password' name='pwd' label="Password" htmlFor="outlined-adornment-password" required margin='dense' value={formData.pwd||''}  variant="outlined" onChange={handleChange} />
      <TextField id="outlined-basic" name='email' label="Email" margin='dense' required value={formData.email||''} variant="outlined" onChange={handleChange}/>
      <TextField id="outlined-basic" name='mobile' label="Mobile Number" margin='dense' required value={formData.mobile||''} variant="outlined" onChange={handleChange}/>

      <Button type='submit' sx={{ mt: 3, mb: 2 ,borderRadius:'10px' }}  variant="contained" value="add user">submit
    </Button>

    </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
