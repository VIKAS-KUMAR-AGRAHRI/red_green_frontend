import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const transactions = [
  { id: 1, date: '2024-07-20', description: 'Deposit', amount: 200 },
  { id: 2, date: '2024-07-18', description: 'Withdrawal', amount: 50 },
  { id: 3, date: '2024-07-15', description: 'Deposit', amount: 150 },
];

const TransactionHistory = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Transaction History
        </Typography>
        <List>
          {transactions.map((transaction) => (
            <ListItem key={transaction.id} disableGutters>
              <ListItemText
                primary={`${transaction.date} - ${transaction.description}`}
                secondary={`Amount: $${transaction.amount.toFixed(2)}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TransactionHistory;
