'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/firebase';

import { Button, Container, Typography, Avatar, Box } from '@mui/material';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/');
      } else {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  return (
    <Container sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Hello, {user?.displayName || 'User'}! 💫
      </Typography>

      {user?.photoURL && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Avatar
            alt={user.displayName}
            src={user.photoURL}
            sx={{ width: 80, height: 80 }}
          />
        </Box>
      )}

      <Typography variant="body1" sx={{ mt: 2 }}>
        Email: {user?.email}
      </Typography>

      <Button variant="outlined" onClick={handleLogout} sx={{ mt: 4 }}>
        Logout
      </Button>
    </Container>
    
  );
}
