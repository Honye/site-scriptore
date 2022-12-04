import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import WidgetsIcon from '@mui/icons-material/Widgets';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import { Button } from '@mui/material'
import styles from '../styles/Home.module.css'
import { ListItemAvatar } from '@mui/material'
import { Avatar, IconButton } from '@mui/material'
import { ListItemText } from '@mui/material'

export default function Home() {
  const [value, setValue] = useState(0)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BottomNavigation
        value={value}
        showLabels
        onChange={(e, value) => setValue(value)}
      >
        <BottomNavigationAction label='Scripts' icon={<WidgetsIcon />} />
        <BottomNavigationAction label='Updates' icon={<MoveToInboxIcon />} />
        <BottomNavigationAction label='About' icon={<InfoIcon />} />
      </BottomNavigation>

      <main className={styles.main}>
        <List sx={{ width: '100%'}}>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{borderRadius:2}} variant='square'></Avatar>
            </ListItemAvatar>
            <ListItemText primary='Weibo' secondary='Weibo hot search list'></ListItemText>
            <Button sx={{textTransform:'none', ml:'auto'}} variant='outlined' size='small'>Install</Button>
          </ListItem>
        </List>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
