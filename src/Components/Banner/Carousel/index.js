import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { TrendingCoins } from "../../../config/api";
import { CryptoState } from "../../../CryptoContext";

const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
  }));

const Carousel = () => {
  const { currency } = CryptoState();
  const [trending, setTrending] = useState([]);

  const classes = useStyles();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    setTrending(data);
  };

  console.log(trending);

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  return <div className={classes.carousel}>Carousel</div>;
};

export default Carousel;
