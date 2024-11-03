import React, { useEffect, useRef, useState } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps, Fade,
  IconButton as MuiIconButton,
  styled,
} from '@mui/material';
import { IoClose } from 'react-icons/io5';

export interface ToggleButtonProps extends Pick<MuiButtonProps, 'startIcon' | 'variant' | 'color' | 'sx'> {
  toggle?: boolean;
  label?: string;
  onClick?: (anchorEl: any, toggle: boolean) => void;
}

const StyledWrapped = styled('div')(({ theme }) => ({
  display: 'inline-block',
  height: theme.spacing(5),
  minWidth: theme.spacing(5),
}));

const StyledContent = styled('div')(() => ({
  position: 'relative',
}));

const StyledCloseButton = styled(MuiIconButton)(({ theme }) => ({
  '&.MuiIconButton-root': {
    boxShadow: theme.shadows[1],
    color: theme.palette.primary.main,
    height: theme.spacing(5),
    backgroundColor: theme.palette.background.default,
    zIndex: theme.zIndex.drawer + 4,
    position: 'absolute',
    right: 0,
  },
}));

const StyledToggleButton = styled(MuiButton)(({ theme }) => ({
  '&.MuiButton-root': {
    height: theme.spacing(5),
  },
}));

export const ToggleButton = (
  {
    label = '',
    variant = 'contained',
    color = 'primary',
    onClick,
    startIcon,
    sx,
  }: ToggleButtonProps) => {
  const anchorRef: React.MutableRefObject<any> = useRef(null);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    const newToggle = !toggle;
    setToggle(newToggle);
    if (onClick) onClick(anchorRef, newToggle);
  };

  useEffect(() => {
    if(anchorRef?.current) anchorRef.current.onClick = handleToggle;
  }, [anchorRef]);

  return (
    <StyledWrapped sx={sx} >
      <StyledContent>
        <Fade in={toggle}><StyledCloseButton ref={anchorRef} onClick={handleToggle}><IoClose /></StyledCloseButton></Fade>
        <Fade in={!toggle}>
          <StyledToggleButton onClick={handleToggle} variant={variant} color={color} startIcon={startIcon}>
            {label}
          </StyledToggleButton>
        </Fade>
      </StyledContent>
    </StyledWrapped>
  );
};
