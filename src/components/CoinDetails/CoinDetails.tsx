import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  getCoinDetails,
  clearCoinMarketChart,
  clearCoinDetails,
} from "../../store/coingeco/actions";
import { selectCoinDetails } from "../../store/coingeco/selectors";
import Chart from "./components/Chart";
import Card from "./components/Card";
import { Avatar } from "@mui/material";

const CoinDetails = () => {
  const dispatch = useDispatch();
  const { coinId } = useParams();

  const coinDetails = useSelector(selectCoinDetails);

  useEffect(() => {
    coinId && dispatch(getCoinDetails(coinId));
  }, [dispatch, coinId]);

  useEffect(() => {
    return () => {
      dispatch(clearCoinMarketChart());
      dispatch(clearCoinDetails());
    };
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="coin-details-header">
        <Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
          <Link to="/crypto">List</Link>
          <Typography>{coinDetails?.name}</Typography>
        </Breadcrumbs>
        <Stack spacing={2} direction="row">
          <Avatar
            src={coinDetails?.image.thumb}
            alt=""
            sx={{ width: 24, height: 24 }}
          />
          <Typography variant="h6" alignItems="center" color="text.secondary">
            {coinDetails?.name}
          </Typography>
        </Stack>
      </div>
      <div className="coin-details-content">
        <Chart />
        <Card />
      </div>
    </Wrapper>
  );
};

export default CoinDetails;

const Wrapper = styled.div`
  .coin-details-header,
  .breadcrumb {
    margin: 15px 0;
  }

  .coin-details-content {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 5px 15px;
    .card {
      grid-column: 1;
    }

    @media (min-width: 1200px) {
      grid-template-columns: auto 345px;
      .card {
        grid-column: 2;
      }
      .chart {
        grid-column: 1;
      }
    }
  }
`;
