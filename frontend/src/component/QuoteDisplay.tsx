import React from 'react';
import { Typography, CircularProgress } from '@mui/material';

// Define an interface for the component props
interface QuoteDisplayProps {
    displayQuote: string | null;
    isLoading: boolean;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ displayQuote, isLoading }) => {
    if (isLoading) {
        return <CircularProgress sx={{ mt: 3 }} />;
    }

    return displayQuote ? (
        <Typography variant="h6" sx={{ mt: 3, textAlign: 'center' }}>
            {`"${displayQuote}"`}
        </Typography>
    ) : null;
};

export default QuoteDisplay;
