import Head from 'next/head';
import { AppBar, Box, Button, Container, IconButton, Stack, TextField, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';

export default function Upload() {
  const router = useRouter();

  return (
    <Box
      sx={{
        pb: theme => `calc(${theme.spacing(7)} + env(safe-area-inset-bottom))`,
        pt: 'env(safe-area-inset-top)'
      }}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <title>Scriptore - Upload</title>
      </Head>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            onClick={() => router.back()}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>上传</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Stack
          sx={{ pt: 2 }}
          component="form"
          method="POST"
          action="/api/upload"
          encType="multipart/form-data"
        >
          <Button
            component="label"
            variant="outlined"
          >
            <input name="file" type="file" />
          </Button>
          <TextField
            name="version"
            label="版本"
            size="small"
            margin="normal"
            placeholder="1.0.0"
          />
          <TextField
            name="brief"
            label="简述"
            size="small"
            margin="normal"
            placeholder="简短说明"
          />
          <TextField
            name="description"
            label="介绍"
            size="small"
            margin="normal"
            placeholder="详细说明"
            multiline
          />
          <TextField
            name="whatIsNew"
            label="更新内容"
            size="small"
            margin="normal"
            multiline
          />
          <Button
            sx={{ mt: 4 }}
            variant="contained"
            type="submit"
          >提交</Button>
        </Stack>
      </Container>
    </Box>
  )
}
