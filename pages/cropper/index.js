/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useRef, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material';
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

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="body2">1. 输入宽高比</Typography>
      <Typography variant="body2">2. 选择图片</Typography>
      <Typography variant="body2">3. 裁剪图片后长按裁剪后的图片保存</Typography>
      <Divider sx={{ my: 1 }} />
      <div>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              label="宽"
              size="small"
              margin="normal"
              defaultValue={width}
              onChange={onWidth}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="高"
              size="small"
              margin="normal"
              defaultValue={height}
              onChange={onHeight}
            />
          </Grid>
        </Grid>
        <input id="file" hidden type="file" onChange={onChange} />
        <Button
          sx={{ my: 1 }}
          component="label"
          htmlFor="file"
          variant="contained"
          startIcon={<WallpaperIcon />}
        >选图</Button>
        <br />
        {image &&
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
        }
      </div>
      <div>
        <div
          className={styles.box}
          style={{ width: '300px', height: "300px" }}
        >
          <Button
            sx={{ my: 1 }}
            variant="contained"
            startIcon={<CropIcon />}
            onClick={getCropData}
          >裁剪</Button>
          { cropData && <img style={{ width: "100%" }} src={cropData} alt="cropped" /> }
        </div>
      </div>
    </Box>
  );
};

export default CropperPage;
