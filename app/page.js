// app/page.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../lib/firebase';

import { Button, Container, Typography } from '@mui/material';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/dashboard');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  return (
    <Container sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to LumiFusion ✨
      </Typography>
      <Button variant="contained" onClick={handleLogin}>
        Sign in with Google
      </Button>
    </Container>
    // https://github.com/saiki7024/lumifusion-web.git
  );
}
