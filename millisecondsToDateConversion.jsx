// example for passing props to another component inside a sample file SO that we can do js operations. 

const TblElements = ({ customerName, phoneNumber, createdOn, uuid }) => {
      const convertedDate = new Date(createdOn);

      return (
          <TableRow onClick ={ () => history.push(`/app/sampleRequests/${businessUserId}/${uuid}`)}>
              <TableCell align='center'>{customerName}</TableCell>
              <TableCell align='center'>{phoneNumber}</TableCell>
              <TableCell align='center'>{convertedDate.toString().substring(4, 15)}</TableCell>
          </TableRow>
      );
  };

  const Tbl = () => {
    return (
        <>
          <TableBody>
            {
                incomingRequests === undefined
                    ? (<LinearProgress />)
                    : (
                        incomingRequests.map((item, id) =>
                            // (<TableRow key={id} onClick ={ () => history.push(`/app/sampleRequests/${businessUserId}/${item.uuid}`)}>
                            //     <TableCell align='center'>{item.customerName}</TableCell>
                            //     <TableCell align='center'>{item.phoneNumber}</TableCell>
                            //     <TableCell align='center'>{item.createdOn.toString()}</TableCell>
                            // </TableRow>)
                            <TblElements customerName={item.customerName} phoneNumber={item.phoneNumber} createdOn={item.createdOn} uuid={item.uuid} />
                        ))
            }
          </TableBody>
      </>
    )
};

