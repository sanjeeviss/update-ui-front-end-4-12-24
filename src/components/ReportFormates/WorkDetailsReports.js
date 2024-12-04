import React from 'react'
import { Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
function Mrgabs() {
   
  return (
   
<div style={{ textAlign: 'center', margin: '20px' }}>
<Grid>
    <Grid >
<Typography variant="h5" gutterBottom >
Worked Hours Details For the Period of 01/01/2010 to 31/01/2010
</Typography>
<Typography style={{ textAlign:'right',paddingRight:'100px'}}>
    date:12/08/2024

</Typography>
</Grid>


<Grid item xs={12}>
<TableContainer component={Paper} style={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', maxWidth: '1900px' }}>
            <Table>
              <TableBody sx={{borderBottom:'4px solid black'}}>

                  <TableCell sx={{borderBottom:'4px solid black',   padding: '5px' ,}}>S.No</TableCell>
                  <TableCell sx={{ borderBottom:'4px solid black', padding: '5px' }}>Date</TableCell>
                  <TableCell sx={{ borderBottom:'4px solid black',  padding: '5px' }}>Shift</TableCell>
                  <TableCell sx={{borderBottom:'4px solid black',   padding: '5px' }}>In Time</TableCell>
                  <TableCell sx={{borderBottom:'4px solid black', padding: '5px' }}>Out Time</TableCell>
                  <TableCell sx={{  borderBottom:'4px solid black', padding: '5px' }}>Break in </TableCell>
                 <TableCell sx={{borderBottom:'4px solid black', padding: '5px' }}>Break out</TableCell>


                  <TableCell sx={{ borderBottom:'4px solid black', padding: '5px' }}>Early In</TableCell>
                  <TableCell sx={{ borderBottom:'4px solid black',  padding: '5px' }}>Late In</TableCell>
                  <TableCell sx={{ borderBottom:'4px solid black',  padding: '5px' }}>Late out</TableCell>
                  <TableCell sx={{borderBottom:'4px solid black',  padding: '5px' }}>Early Out</TableCell>
                  <TableCell sx={{ borderBottom:'4px solid black',  padding: '5px' }}>T Whrs</TableCell>
                  <TableCell sx={{ borderBottom:'4px solid black',  padding: '5px' }}>T OtHrs</TableCell>
                  <TableCell sx={{  borderBottom:'4px solid black', padding: '5px' }}>Leave name</TableCell>


                <TableRow sx={{ padding: '4px'}}>
                  <TableCell sx={{borderBottom: '4px solid black', padding: '5px', fontWeight: 'bold'  }}>Employee Code :   e002</TableCell>
                  <TableCell sx={{ borderBottom: '4px solid black', padding: '5px' }}>Employee Name :   V P Lalli</TableCell>
                  <TableCell colSpan={12} sx={{ borderBottom: '4px solid black', padding: '5px' }}></TableCell> {/* Placeholder for empty cells */}
                </TableRow>

               
                <TableRow >
                  <TableCell sx={{ borderBottom: '2px dotted black', padding: '5px' }}>1</TableCell>
                  <TableCell sx={{ borderBottom: '2px dotted black', padding: '5px' }}>22-04-05</TableCell>
                  <TableCell sx={{ borderBottom: '2px dotted black', padding: '5px' }}>G</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black', padding: '5px' }}>08:00</TableCell>
                  <TableCell sx={{ borderBottom: '2px dotted black',  padding: '5px' }}>18:00</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black', padding: '5px' }}>14:00</TableCell>


                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>07:30</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>8:15</TableCell>
                  <TableCell sx={{ borderBottom: '2px dotted black',  padding: '5px' }}>18:20</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>17:30</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>08:00</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>2</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>2</TableCell>

                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>sick leave</TableCell>
                  
</TableRow>

<TableRow >
                  <TableCell sx={{ borderBottom: '2px dotted black', padding: '5px' }}>2</TableCell>
                  <TableCell sx={{ borderBottom: '2px dotted black', padding: '5px' }}>22-04-05</TableCell>
                  <TableCell sx={{ borderBottom: '2px dotted black', padding: '5px' }}>G</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black', padding: '5px' }}>08:00</TableCell>
                  <TableCell sx={{ borderBottom: '2px dotted black',  padding: '5px' }}>18:00</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black', padding: '5px' }}>14:00</TableCell>


                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>07:30</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>8:15</TableCell>
                  <TableCell sx={{ borderBottom: '2px dotted black',  padding: '5px' }}>18:20</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>17:30</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>08:00</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>2</TableCell>
                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>2</TableCell>

                  <TableCell sx={{  borderBottom: '2px dotted black',  padding: '5px' }}>sick leave</TableCell>
                  
</TableRow>
<TableRow>
<TableCell sx={{ padding: '3px' }}></TableCell>
                  
                  </TableRow>
                  
                  



                 
              </TableBody>
            </Table>
          </TableContainer>
          <br></br>
</Grid>


         
</Grid>
</div>
  )
}



export default Mrgabs;