import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFollowersList } from "../lib/api/user";

import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@mui/material";

const FollowersList = () => {
    const query = useParams();
    const [followersList, setFollowersList] = useState([])
    const handleGetFollowersList = async () => {
        try {
            const res = await getFollowersList(query.id);
            console.log(res.data);
            setFollowersList(res.data);
          } catch (e) {
            console.log(e);
          }
    }
    useEffect(() => {
        handleGetFollowersList();
    }, []);
    return (
        <div className="c-grid">
            <TableContainer component={Paper} sx={{bgcolor: "#f5f5f5", mt: "2em"}}>
                <Table>
                    <TableBody>
                        {followersList.map((user, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            >   <TableCell align="center">
                                <Link to={`/users/${user.id}`}>
                                    {user.name}
                                </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
            </TableContainer>
        </div>
    )
}

export default FollowersList