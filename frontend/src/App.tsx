import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import QuoteInput from './component/QuoteInput';
import QuoteDisplay from './component/QuoteDisplay';
import ActionButtons from './component/ActionButtons';

function App() {
    const backendURL = "https://afternoon-depths-72364-ad550251f5f5.herokuapp.com/"


    //  When testing the local backend 
    // const backendURL = "http://localhost:4000";
    
    const [quote, setQuote] = useState<string>("");
    const [displayQuote, setDisplayQuote] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchRandomQuote = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${backendURL}/random`);
                const data = await response.json();
                setDisplayQuote(data.quote);
            } catch (error) {
                console.error("Error fetching random quote:", error);
            }
            setIsLoading(false);
        };
        fetchRandomQuote();
    }, [backendURL]); // <-- Added dependency here

    const handleSave = async (): Promise<void> => {
        try {
            await fetch(`${backendURL}/add`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ quote })
            });
            setQuote("");
        } catch (error) {
            console.error("Error saving the quote:", error);
        }
    }
    
    const handleGenerate = async (): Promise<void> => {
        setIsLoading(true);
        try {
            const response = await fetch(`${backendURL}/random`);
            const data = await response.json();
            setDisplayQuote(data.quote);
        } catch (error) {
            console.error("Error fetching random quote:", error);
        }
        setIsLoading(false);
    }

    return (
        <Container component="main" sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant="h4" gutterBottom align="center">
                Quote Generator 
            </Typography>

            <QuoteInput 
                quote={quote}
                setQuote={setQuote}
                handleSave={handleSave}
            />

            <ActionButtons 
                handleSave={handleSave}
                handleGenerate={handleGenerate}
            />

            <QuoteDisplay displayQuote={displayQuote} isLoading={isLoading} />
        </Container>
    );
}

export default App;
