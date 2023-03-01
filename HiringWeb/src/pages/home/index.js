import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import { textAlign } from '@mui/system'

import SearchIcon from '@mui/icons-material/Search'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

const Home = () => {
  const [value, setValue] = React.useState('1')

  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Using Hirebeat to find your dream job' style={{ textAlign: 'center' }}></CardHeader>
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <FormControl variant='standard' sx={{ m: 2, minWidth: 300 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder='keywords, or company' inputProps={{ 'aria-label': 'search' }} />
            </Search>
          </FormControl>
          <FormControl variant='standard' sx={{ m: 2, minWidth: 300 }}>
            <Search>
              <SearchIconWrapper>
                <LocationOnIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='City, state, zip code, or "remote" '
                inputProps={{ 'aria-label': 'search' }}
                fullWidth={true}
              />
            </Search>
          </FormControl>
        </div>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Manage your job applications' style={{ textAlign: 'center' }}></CardHeader>
          <CardContent>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleTabChange} aria-label='lab API tabs example'>
                    <Tab label='Applied jobs' value='1' />
                    <Tab label='Inprocess' value='2' />
                    <Tab label='Declinded' value='3' />
                  </TabList>
                </Box>
                <TabPanel value='1'>
                  <Grid container spacing={6}>
                    <Grid item xs={3}>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardMedia sx={{ height: 140 }} image='/images/company_icon/google.png' title='green iguana' />
                        <CardContent>
                          <Typography gutterBottom variant='h5' component='div'>
                            Software Development Engineer
                          </Typography>
                          <Typography variant='body2' color='text.secondary'>
                            Participate and contribute to the full project life cycle, including gathering requirements,
                            system design, implementation, testing, deployment, and support of applications using Java /
                            JavaScript.
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size='small'>Withdraw</Button>
                          <Button size='small'>Detail</Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value='2'></TabPanel>
                <TabPanel value='3'></TabPanel>
              </TabContext>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
