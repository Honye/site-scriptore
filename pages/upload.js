import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFileOutlined';
import Layout from '../components/Layout';

export default function Upload() {
  const [fileName, setFileName] = useState('');

  return (
    <Layout back title='上传脚本' pageTitle='Scriptore - Upload' maxWidth='sm'>
      <Box sx={{ display: { xs: 'none', md: 'block' }, mb: 4 }}>
        <Typography variant='h4' component='h1'>上传脚本</Typography>
        <Typography color='text.secondary' sx={{ mt: 0.5 }}>提交脚本文件和版本说明。上传前需要先在「关于」页登录 GitHub 账号。</Typography>
      </Box>
      <Stack
        component='form'
        method='POST'
        action='/api/upload'
        encType='multipart/form-data'
        spacing={2.5}
        sx={{ bgcolor: 'background.paper', borderRadius: '18px', p: { xs: 2, md: 3 } }}
      >
        <Box
          component='label'
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            py: 4,
            px: 2,
            border: '1.5px dashed',
            borderColor: 'divider',
            borderRadius: '14px',
            cursor: 'pointer',
            textAlign: 'center',
            '&:hover': { borderColor: 'primary.main' },
            '&:focus-within': { borderColor: 'primary.main' },
          }}
        >
          <UploadFileIcon color='primary' sx={{ fontSize: 36 }} />
          <Typography variant='subtitle1'>{fileName || '选择脚本文件'}</Typography>
          <Typography variant='body2' color='text.secondary'>
            {fileName ? '点击可重新选择' : '支持 .js 文件'}
          </Typography>
          <input
            name='file'
            type='file'
            accept='.js,text/javascript'
            onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
            style={{ position: 'absolute', width: 1, height: 1, opacity: 0 }}
          />
        </Box>
        <TextField name='version' label='版本' placeholder='1.0.0' />
        <TextField name='brief' label='简述' placeholder='一句话说明脚本用途' />
        <TextField name='description' label='介绍' placeholder='详细说明' multiline minRows={3} />
        <TextField name='whatIsNew' label='更新内容' multiline minRows={2} />
        <Button variant='contained' size='large' type='submit'>提交脚本</Button>
      </Stack>
    </Layout>
  )
}
