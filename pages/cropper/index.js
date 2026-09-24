/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useRef, useState } from 'react';
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import Layout from '../../components/Layout';
import Cropper from 'react-cropper';
import CropIcon from '@mui/icons-material/Crop';
import WallpaperIcon from '@mui/icons-material/Wallpaper'
import 'cropperjs/dist/cropper.css';
import styles from './index.module.css';

export const CropperPage = () => {
  const [image, setImage] = useState('');
  const [cropData, setCropData] = useState('');
  const [cropper, setCropper] = useState();
  const [width, setWidth] = useState(720);
  const [height, setHeight] = useState(338);

  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const onWidth = useCallback((e) => {
    const { value } = e.target;
    setWidth(value);
    cropper?.setAspectRatio(value / height);
  }, [cropper, height]);

  const onHeight = useCallback((e) => {
    const { value } = e.target;
    setHeight(value);
    cropper?.setAspectRatio(width / value);
  }, [cropper, width]);

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  const panel = { bgcolor: 'background.paper', borderRadius: '18px', p: { xs: 2, md: 3 } };

  return (
    <Layout back title='背景裁剪' pageTitle='Scriptore - 背景裁剪'>
      <Box sx={{ display: { xs: 'none', md: 'block' }, mb: 4 }}>
        <Typography variant='h4' component='h1'>背景裁剪</Typography>
        <Typography color='text.secondary' sx={{ mt: 0.5 }}>把图片裁成小组件的尺寸，作为桌面组件背景。</Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 3fr) minmax(0, 2fr)' },
          gap: { xs: 2, md: 3 },
          alignItems: 'start',
        }}
      >
        <Box sx={panel}>
          <Box component='ol' sx={{ m: 0, mb: 2, pl: 2.5, color: 'text.secondary', typography: 'body2' }}>
            <li>输入小组件的宽和高</li>
            <li>选择图片并拖动调整裁剪区域</li>
            <li>点击「裁剪」，长按或右键保存裁剪后的图片</li>
          </Box>
          <Stack direction='row' spacing={1.5} alignItems='center' sx={{ mb: 2 }}>
            <TextField
              label='宽'
              size='small'
              type='number'
              defaultValue={width}
              onChange={onWidth}
              sx={{ width: 110 }}
            />
            <TextField
              label='高'
              size='small'
              type='number'
              defaultValue={height}
              onChange={onHeight}
              sx={{ width: 110 }}
            />
            <input id="file" hidden type="file" accept="image/*" onChange={onChange} />
            <Button
              component="label"
              htmlFor="file"
              variant={image ? 'outlined' : 'contained'}
              startIcon={<WallpaperIcon />}
            >{image ? '换图' : '选图'}</Button>
          </Stack>
          {image ? (
            <Cropper
              className={styles.image}
              aspectRatio={width / height}
              initialAspectRatio={1}
              src={image}
              viewMode={2}
              dragMode="move"
              minCropBoxHeight={66}
              minCropBoxWidth={66}
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              onInitialized={(instance) => {
                setCropper(instance);
              }}
            />
          ) : (
            <Box
              component='label'
              htmlFor='file'
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                aspectRatio: '16 / 10',
                border: '1.5px dashed',
                borderColor: 'divider',
                borderRadius: '14px',
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { borderColor: 'primary.main' },
              }}
            >还没有选择图片</Box>
          )}
        </Box>
        <Box sx={panel}>
          <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ mb: 2 }}>
            <Typography variant='h6' component='h2'>裁剪结果</Typography>
            <Button
              variant="contained"
              startIcon={<CropIcon />}
              onClick={getCropData}
              disabled={!image}
            >裁剪</Button>
          </Stack>
          {cropData
            ? <img style={{ display: 'block', width: '100%', borderRadius: 12 }} src={cropData} alt="裁剪结果" />
            : <Typography variant='body2' color='text.secondary'>选好区域后点击「裁剪」，结果会显示在这里。</Typography>}
        </Box>
      </Box>
    </Layout>
  );
};

export default CropperPage;
