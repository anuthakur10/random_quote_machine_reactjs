import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "../actions/quoteAction";

export default function Qoute() {
    const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes);
  const loading = useSelector((state) => state.loading);
  const [state, setState] = useState({
    quote: "",
    author: "",
    
  });
    const getRandomQuote = (data) => {
        return data[Math.floor(Math.random() * data.length)];
      };


      const getQuote = () => {
        const randomQuote = getRandomQuote(quotes);
        setState((newState) => ({
          ...newState,
          author: randomQuote?.author,
          quote: randomQuote?.quote,
         
        }));
      };




      useEffect(() => {
        dispatch(getQuotes());
      }, []);
    
      useEffect(() => {
        getQuote();
      }, [loading]);

    return (
        <>
            <Card  sx={{
          bgcolor: '#9ef',
          boxShadow: 0,
          borderRadius: 2,
          p: 2,
          mx: 50,
          my: 28,
          maxWidth: 600,
        }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {state.quote}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {state.author}
                    </Typography>
                </CardContent>
            
                    <Button size="small" onClick={getQuote}>New Quotes</Button>
                
            </Card>

        </>
    )
}
