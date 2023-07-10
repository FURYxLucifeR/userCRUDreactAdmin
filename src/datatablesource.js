export const userColumns = [
  { field: "userId", headerName: "ID", width: 70 },
  {
    field: "userName",
    headerName: "User",
    width: 230,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   );
    // },
  },
  {
    field: "loginName",
    headerName: "loginName",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "mobile",
    headerName: "mobile",
    width: 100,
  },
  
];

