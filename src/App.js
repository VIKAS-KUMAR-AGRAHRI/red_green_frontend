import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import Main from './Component/Game/Main'; // Assuming Main is your Game component
import SignUp from './Component/Signup and signin/signup'; // Import SignUp component
import SignIn from './Component/Signup and signin/singin'; // Import SignIn component
import WalletPage from './Component/Wallet/WalletPage';
import theme from './theme'; // Import the custom theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Router>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/game" element={<Main />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/" element={<SignUp/>} /> {/* Default route to Main */}
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
