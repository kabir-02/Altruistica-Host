import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rootCard: {
    flexGrow: 1,
    overflow:'hidden',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '4%',
  },
}));

export default function AdminDashboard() {
  const classes = useStyles();
  const [approvals, setApprovals] = useState([]);

  const submitApproval=(fr_id)=>{
    Axios.put('http://localhost:8082/updateApprovalStatus', {fr_id: fr_id }).then((response)=>{
      setApprovals(response.data);
    });
    //refreshPage();
  };

  // const refreshPage=()=>{
  //   history.push({
  //     pathname: '/admin',
  //     search : `update`,
  //   });
  // }

  useEffect(() => {
    Axios.get("http://localhost:8082/displayapprovals").then((response)=>{
      console.log(response.data);
      setApprovals(response.data);
    });
  },[]);



  
  return (
    <div className='info-section' id='blog'>
    <h2 className="title-section donh">Welcome Admin!</h2>
        <div className={classes.rootCard}>
    <center>
    <Table size="small" className='approval-table'>
        <TableHead>
          <TableRow>
            <TableCell >ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Deadline</TableCell>
            <TableCell>Target</TableCell>
            <TableCell>City</TableCell>
            <TableCell align="right">Approve</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { approvals.map((data,key)=>{
            return(
             <TableRow key={key}>
              <TableCell name='fr_id'>{data.fr_id}</TableCell>
             <TableCell>{data.fr_gentime}</TableCell>
             <TableCell>{data.Name}</TableCell>
             <TableCell>{data.fr_title}</TableCell>
             <TableCell>{data.fr_desc}</TableCell>
             <TableCell>{data.fr_deadline}</TableCell>
             <TableCell>{data.fr_target}</TableCell>
             <TableCell>{data.City}</TableCell>
             <TableCell align="right"><button onClick={()=>submitApproval(data.fr_id)}><CheckCircleIcon/></button></TableCell>
           </TableRow>
           )
        })}
        </TableBody>
      </Table>
    </center>
    </div>
    </div>
  );
}


