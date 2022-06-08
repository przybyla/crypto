import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { selectCoins } from "../../store/coingeco/selectors";
import { getCoins } from "../../store/coingeco/actions";
import { ICoin } from "../../interfaces/Coin";
import { Link } from "react-router-dom";

const ImagesList = () => {
  const dispatch = useDispatch();

  const coins = useSelector(selectCoins);

  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="left">Coin</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">24h</TableCell>
            <TableCell align="left">Mkt Cap</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coin: ICoin) => (
            <TableRow
              key={coin.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {coin.market_cap_rank}
              </TableCell>
              <TableCell align="left">
                <Link to={`/coin/${coin.id}`}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={coin.image} alt="" />
                    <span>{coin.name}</span>
                  </Stack>
                </Link>
              </TableCell>
              <TableCell align="left">{coin.current_price} USD</TableCell>
              <TableCell align="left">
                {coin.price_change_percentage_24h}%
              </TableCell>
              <TableCell align="left">{coin.market_cap}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ImagesList;
