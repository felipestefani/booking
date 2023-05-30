import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Box from "@mui/material/Box";
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {AuthContext} from "../../contexts/AuthContext";
import { MainContext } from "../../contexts/MainContext";
import { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { green } from '@mui/material/colors';

const HamburgerMenu = (props) => {
  const navigate = useNavigate()
  const { createAccount, login } = props
  const { initials, logout } = useContext(AuthContext)

  const { path } = useContext(MainContext)

  return (
    <div className={styles.menuHamburguer}>
      <PopupState variant="popover" popupId="demo-popup-menu" >
        {(popupState) => (
          <React.Fragment>
            <Button variant="contained" {...bindTrigger(popupState)} sx={{background:'transparent', boxShadow:'none', ":hover":{background:'transparent', boxShadow:'none'}}} >
              {
                initials ? 
                (
                  <ul>
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        sx={{ bgcolor:'#1dbeb4' }}
                        style={{ cursor: "pointer" }}
                      >
                        {initials}
                      </Avatar>
                    </Stack>
                  </ul>
                ) :  
                (
                  <div className={styles.menuHamburguerDisplay}>
                    <MenuRoundedIcon sx={{ fontSize: 40 }} />
                  </div>
                )
              }
            </Button>
              {
                initials ? 
                (
                  <div>
                    <Menu {...bindMenu(popupState)} >
                      <MenuItem onClick={()=> {logout(); navigate('/')}}>Fazer logout</MenuItem>
                    </Menu>
                  </div>
                ):
                (
                  <div>
                    <Menu {...bindMenu(popupState)} >
                      <Box display={ createAccount.path == path ? 'none' : 'flex'}>
                        <MenuItem onClick={()=> {navigate(createAccount.path)}} hidden={true}>{createAccount.label}</MenuItem>
                      </Box>
                      <Box display={ login.path == path ? 'none' : 'flex'}>
                        <MenuItem onClick={()=> {navigate(login.path)}}>{login.label}</MenuItem>
                      </Box>
                    </Menu>
                  </div>
                )
              }    
          </React.Fragment>
        )}
      </PopupState>
    </div>
  );
}

export default HamburgerMenu