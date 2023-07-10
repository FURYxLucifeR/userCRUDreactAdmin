import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TextField,Button } from "@mui/material";

const Single = () => {
  const {userId}=useParams()

     const [formData, setFormData] = useState({
        userId:'',
        userName: '',
        loginName: '',
        pwd:'',
        email: '',
        mobile: '',
     });
  useEffect(() => {

    axios.post('http://192.168.0.90:8080/api/UserMaster/UserMaster', {
               token: "",
               userId: `${userId}`,
               roleId: 0,
               loginName: "",
               userName: "",
               pwd: "",
               email: "",
               mobile: "",
               isActive: true,
               commandId: 5,
               createBy: 0,
               createDate: "2022-11-03T09:08:31.506Z",
               createIp: "",
               updateBy: 0,
               updateDate: "2022-11-03T09:08:31.506Z",
               updateIp: "",
               panelId: 0,
               ualid: 0,
               userAccessTimeId: 0,
               isTemporaryCreditAllowed: true,
               panelCode: "",
           },
               {
                   headers: {
                       "Content-Type": "application/json"
                   }
               }
           )
           .then((response) => {
               const uuser = response.data
               setFormData(uuser[0])
           console.log(uuser.loginName);
           console.log()
    
           })
               .catch(err => console.log(err));
       }, [userId]);
       const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
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
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Information</h1>
            <form className='App' onSubmit={handleSubmit}>

<h1>User Info</h1>
<TextField id="outlined-basic"
 name='userId' aria-readonly 
 label="userId"
   required
   readOnly
    margin='dense'
    value={`${userId}`||''}
    variant="outlined" />

<TextField  id="outlined-basic"
 name='UserName'
 label="UserName"
 margin='dense'
 readOnly
  onChange={handleChange}
  value={formData?.userName}
     required
      variant="outlined"
      />
<TextField id="outlined-basic"
name='loginName' 
label="LoginName"
margin='dense'
onChange={handleChange}
value={formData?.loginName}
required 
variant="outlined"  />
<TextField id="outlined-basic"
name='email' label="Email"
margin='dense' required
onChange={handleChange}
value={formData?.email}
 variant="outlined" />
  <TextField id="outlined-basic"
name='pwd' label="password"
margin='dense' required
onChange={handleChange}
value={formData?.pwd}
 variant="outlined" />
<TextField id="outlined-basic"
name='mobile'
label="Mobile"
margin='dense'
required 
onChange={handleChange}
value={formData?.mobile}
variant="outlined" />

<Button type='submit' sx={{ mt: 3, mb: 2 }}  variant="contained" value="add user">submit
</Button>
{/* <Fab color="white" aria-label="add"><Link to="/create"> <AddCircleRounded/></Link>
</Fab> */}
</form>






          </div>
        

        </div>
       



      </div>
    </div>
  );
};

export default Single;
