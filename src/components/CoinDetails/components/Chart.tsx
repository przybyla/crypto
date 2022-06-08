import { useEffect, useState } from "react";
import {
  AreaChart,
  Tooltip,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { selectCoinMarketChart } from "../../../store/coingeco/selectors";
import { getCoinMarketChart } from "../../../store/coingeco/actions";
import { Typography } from "@mui/material";

const Chart = () => {
  const dispatch = useDispatch();
  const { coinId } = useParams();

  const [days, setDays] = useState<string>("30");

  useEffect(() => {
    coinId && dispatch(getCoinMarketChart({ coinId, days }));
  }, [dispatch, coinId, days]);

  const coinMarketChart = useSelector(selectCoinMarketChart);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <Typography>{label}</Typography>
          <Typography>Price: ${payload[0].value}</Typography>
        </div>
      );
    }

    return null;
  };
  const price = coinMarketChart?.prices.map((price) => ({
    name: format(new Date(price[0]), "Pp"),
    price: price[1].toFixed(2),
  }));
  return (
    <Wrapper className="chart">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        className="button-group"
      >
        <Button onClick={() => setDays("1")}>24h</Button>
        <Button onClick={() => setDays("7")}>7d</Button>
        <Button onClick={() => setDays("14")}>14d</Button>
        <Button onClick={() => setDays("30")}>30d</Button>
      </ButtonGroup>
      <div style={{ height: "700px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={price}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#42a5f5" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#42a5f5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis
              dataKey="price"
              axisLine={false}
              tickLine={false}
              tickCount={8}
              tickFormatter={(price: number) => `$${price}`}
              type="number"
              domain={["dataMin", "dataMax"]}
              label={{
                offset: -1000,
              }}
            />
            <CartesianGrid opacity={0.1} vertical={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Wrapper>
  );
};

export default Chart;

const Wrapper = styled.div`
  .button-group {
  }
  .tooltip {
    border-radius: 0.25rem;
    background-color: #42a5f5;
    padding: 1rem;
    text-align: center;
    color: #000;
    box-shadow: 15px 30px 40px 5px rgba(0, 0, 0, 0.5);
    text-align: left;
  }
`;
