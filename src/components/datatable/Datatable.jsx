import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Datatable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {

    axios.post('http://192.168.0.90:8080/api/UserMaster/UserMaster', {
        token: "",
        userId: 0,
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
      setData(response.data);
      
      // console.log(response.data);
    
    })
        .catch(err => console.log(err));
}, []);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const rows=data.map((row)=>({
    id : row.userId,
    userId:row.userId,
    loginName:row.loginName,
    userName: row.userName,
    email:row.email,
    mobile: row.mobile,}))

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/`test`" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              // onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
