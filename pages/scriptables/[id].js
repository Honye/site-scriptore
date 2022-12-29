import Link from 'next/link';
import {
  AppBar,
  Avatar,
  Box, Container,
  Divider,
  Icon,
  IconButton,
  ListItemText, Toolbar, Typography
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Image from 'next/image';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import { blueGrey } from '@mui/material/colors';
import { widgets, modules, others } from '../../data/scripts';

/**
 * @param {object} props
 * @param {import('../../data/scripts').Script} props.data
 */
const Detail = (props) => {
  const { data = {} } = props;
  const router = useRouter();

  return (
    <Box>
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
          <Typography variant='h6' sx={{ flexGrow: 1 }}>{data.name}</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='sm'>
        <Box
          sx={{
            display: 'flex',
            pt: 2,
            pb: 1
          }}
        >
          <Avatar
            sx={{
              mr: 1.5,
              borderRadius: 2,
              bgcolor: blueGrey['400'],
              width: 100,
              height: 100
            }}
            variant='square'
          >
            <Icon style={{ fontSize: 60 }}>{ data.icon || 'auto_fix_high' }</Icon>
          </Avatar>
          <Box sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <ListItemText
              sx={{ mt: 0 }}
              primary={data.name}
              secondary={data.intro}
            />
            <LoadingButton
              sx={{ alignSelf: 'flex-start' }}
              variant='contained'
              size='small'
            >v{data.version}</LoadingButton>
          </Box>
        </Box>
        {data.snapshots?.length && (
          <>
            <Divider sx={{ my: 1 }} />
            <Box>
              <Typography variant='h6'>预览</Typography>
              <Box 
                sx={{
                  display: 'flex',
                  gap: 1,
                  overflow: 'auto',
                  scrollSnapType: 'x mandatory',
                  '::-webkit-scrollbar': { display: 'none' },
                }}
              >
                {data.snapshots.map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      minWidth: '60%',
                      border: 1,
                      borderRadius: 2,
                      overflow: 'hidden',
                      aspectRatio: '0.56',
                      scrollSnapAlign: 'start',
                      position: 'relative',
                    }}
                  >
                    <Image
                      style={{ objectFit: 'contain' }}
                      src={img}
                      alt=''
                      fill
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </>
        )}
        <Divider sx={{ my: 1 }} />
        <Typography
          sx={{ whiteSpace: 'pre-wrap'}}
          variant='body1'
        >{data.content}</Typography>
      </Container>
    </Box>
  );
};

/** @type {import('next').GetStaticProps<{data: typeof widgets[0]}, { id: string}>} */
export const getStaticProps = ({ params }) => {
  const { id } = params;
  const widget = widgets.find((item) => item.name === decodeURIComponent(id))
  if (widget) {
    return {
      props: {
        data: widget
      },
    };
  }
  const mod = modules.find((item) => item.name === decodeURIComponent(id))
  if (mod) {
    return {
      props: {
        data: mod
      },
    };
  }
  const other = others.find((item) => item.name === decodeURIComponent(id))
  if (other) {
    return {
      props: {
        data: other
      },
    };
  }
};

/** @type {import('next').GetStaticPaths} */
export const getStaticPaths = async () => {
  const paths = [...widgets, ...modules, ...others].map((script) => ({
    params: { id: script.name }
  }));
  return {
    paths,
    fallback: true
  };
};

export default Detail;
