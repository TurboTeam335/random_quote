import React from 'react';
import { TextField } from '@mui/material';

// Define an interface for the component props
interface QuoteInputProps {
    quote: string;
    setQuote: (quote: string) => void;
    handleSave: () => Promise<void>;
}

const QuoteInput: React.FC<QuoteInputProps> = ({ quote, setQuote, handleSave }) => (
    <>
    <TextField
    label="Add New Quote"
    variant="outlined"
    fullWidth
    value={quote}
    onChange={(e) => setQuote(e.target.value)}
    sx={{
        mb: 2,
        // Target the input field for background color
        '& .MuiInputBase-input': {
            backgroundColor: 'white', // Change this to your desired color
        },
    }}
/>

    </>
);

export default QuoteInput;
