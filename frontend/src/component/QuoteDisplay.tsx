import React from 'react';
import { Typography } from '@mui/material';

// Define an interface for the component props
interface QuoteDisplayProps {
    displayQuote: string;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ displayQuote }) => (
    displayQuote ? (
        <Typography variant="h6" sx={{ mt: 3, textAlign: 'center' }}>
            {`"${displayQuote}"`}
        </Typography>
    ) : null
);




export default QuoteDisplay;
