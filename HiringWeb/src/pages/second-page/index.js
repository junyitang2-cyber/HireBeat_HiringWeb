import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import SearchIcon from '@mui/icons-material/Search'

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

const SecondPage = () => {
  const [type, setType] = React.useState('')

  const handleChange = event => {
    setType(event.target.value)
  }

  const onChange = event => {}

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Job Filter Settings 🚀' style={{ textAlign: 'center' }}></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }} style={{ textAlign: 'center' }}>
              Please select the jobs fits for you:
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <FormControl variant='standard' sx={{ m: 5, minWidth: 150 }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
                </Search>
              </FormControl>

              <FormControl variant='standard' sx={{ m: 2, minWidth: 150 }}>
                <InputLabel id='JobType-label'>Job Type</InputLabel>
                <Select
                  labelId='JobType-select-label'
                  id='JobTpye-select'
                  value={type}
                  onChange={handleChange}
                  label='Type'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Full Time</MenuItem>
                  <MenuItem value={20}>Part Time</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant='standard' sx={{ m: 2, minWidth: 150 }}>
                <InputLabel id='demo-simple-select-standard-label'>Onsite/Remote</InputLabel>
                <Select
                  labelId='demo-simple-select-standard-label'
                  id='demo-simple-select-standard'
                  value={type}
                  onChange={handleChange}
                  label='Type'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Onsite</MenuItem>
                  <MenuItem value={20}>Remote</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant='standard' sx={{ m: 2, minWidth: 150 }}>
                <InputLabel id='demo-simple-select-standard-label'>Pay</InputLabel>
                <Select
                  labelId='demo-simple-select-standard-label'
                  id='demo-simple-select-standard'
                  value={type}
                  onChange={handleChange}
                  label='Type'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Pay</MenuItem>
                  <MenuItem value={20}>Unpaid</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant='standard' sx={{ m: 2, minWidth: 200 }}>
                <InputLabel id='demo-simple-select-standard-label'>Working Authorization</InputLabel>
                <Select
                  labelId='demo-simple-select-standard-label'
                  id='demo-simple-select-standard'
                  value={type}
                  onChange={handleChange}
                  label='Type'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Accepts OPT/CPT</MenuItem>
                  <MenuItem value={20}>Willing to sponsor</MenuItem>
                  <MenuItem value={20}>US citizenship</MenuItem>
                </Select>
              </FormControl>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 140 }} image='/images/company_icon/google.png' title='green iguana' />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Software Development Engineer
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Participate and contribute to the full project life cycle, including gathering requirements, system
                  design, implementation, testing, deployment, and support of applications using Java / JavaScript.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Apply Now</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 140 }} image='/images/company_icon/oracle.png' title='green iguana' />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Software Development Engineer - FCON (12779)
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Design and develop FortiConverter Service Automation System; Track official FOS releases, analyze
                  configuration schema changes and implement the conversion logic into the automation system;
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Apply Now</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 140 }} image='/images/company_icon/amazon.png' title='green iguana' />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Software Development Engineer
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Seeking Junior Java Developer for multiple job opportunities across the US. Bachelor’s degree in
                  computer science or related field Must be authorized to work in the US Lizards are a widespread group
                  of squamate reptiles,
                </Typography>
              </CardContent>
              <CardActions>
                <Button href='https://www.amazon.jobs/en/business_categories/student-programs' size='small'>
                  Apply Now
                </Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia sx={{ height: 140 }} image='/images/company_icon/amazon.png' title='green iguana' />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Entry-Level React Developer
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                  continents except Antarctica Seeking Junior Java Developer for multiple job opportunities across the
                  US.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Apply Now</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image='/images/company_icon/marlabs.png' title='green iguana' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Lizard
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
              continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Apply Now</Button>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SecondPage
