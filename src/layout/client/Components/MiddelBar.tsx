import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '35px',
  border: '1px solid',
  borderColor: theme.palette.primary.main,
  backgroundColor: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.common.white,
  },
  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
}));
const AppBarWrap = styled(AppBar)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[200],
  color: theme.palette.common.black,
  '& .MuiToolbar-root': {
    fontSize: '10px',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '10px',
      flexWrap: 'wrap',
    },
  },
  boxShadow: 'none',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const MiddelBar = () => {
  return (
    <Box>
      <AppBarWrap>
        <Toolbar>
          <Box sx={{ width: { md: '100%', lg: '15%' } }}>
            <Search>
              <SearchIconWrapper>{/* <SearchIcon /> */}</SearchIconWrapper>
              <StyledInputBase
                placeholder='Search InSync'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
            }}
          >
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{
                display: { xs: 'none', sm: 'flex' },
                flexGrow: 1,
                justifyContent: { lg: 'center', md: 'start' },
                marginLeft: { lg: '-100px', md: '0' },
              }}
            >
              INSYNC
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <IconButton
                size='large'
                aria-label='show 4 new mails'
                color='inherit'
              >
                <Badge badgeContent={4} color='error'>
                  {/* <MailIcon /> */}
                </Badge>
              </IconButton>
              <IconButton
                size='large'
                aria-label='show 17 new notifications'
                color='inherit'
              >
                <Badge badgeContent={17} color='error'>
                  {/* <NotificationsIcon /> */}
                </Badge>
              </IconButton>
              <IconButton
                size='large'
                edge='end'
                aria-label='account of current user'
                aria-haspopup='true'
                color='inherit'
              >
                {/* <AccountCircle /> */}
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBarWrap>
    </Box>
  );
};
