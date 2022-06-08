import { Card as MaterialCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useSelector } from "react-redux";

import {
  selectCoinCurrentPrice,
  selectCoinValuation,
  selectCoin24High,
  selectCoin24Low,
  selectCoinMarketCap,
} from "../../../store/coingeco/selectors";
const Card = () => {
  const currentCoinPrice = useSelector(selectCoinCurrentPrice);
  const coinValuation = useSelector(selectCoinValuation);
  const coin24High = useSelector(selectCoin24High);
  const coin24Low = useSelector(selectCoin24Low);
  const coinMarketCap = useSelector(selectCoinMarketCap);
  return (
    <MaterialCard className="card">
      <CardHeader title="Coin Stats"></CardHeader>
      <CardContent>
        <List>
          <ListItem>
            Price: ${currentCoinPrice?.toLocaleString("en-US")}
          </ListItem>
          <Divider />
          <ListItem divider>
            Current Price: ${coinValuation?.toLocaleString("en-US")}
          </ListItem>
          <ListItem>
            Market Cap: ${coinMarketCap?.toLocaleString("en-US")}
          </ListItem>
          <Divider light />
          <ListItem>24h High: ${coin24High?.toLocaleString("en-US")}</ListItem>
          <Divider light />
          <ListItem>24h Low ${coin24Low?.toLocaleString("en-US")}</ListItem>
        </List>
      </CardContent>
    </MaterialCard>
  );
};

export default Card;
