import React, { useEffect, useState } from 'react';
import {
  Backdrop as MuiBackdrop, Fade,
  Popper as MuiPopper,
  PopperPlacementType as MuiPopperPlacementType,
  styled,
  SxProps,
  Theme,
} from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export interface PopperProps {
  open: boolean;
  anchorEl?: null | HTMLElement;
  sx?: SxProps<Theme>;
  placement?: MuiPopperPlacementType;
  children?: (props: {animate: boolean})=> React.ReactNode;
}


const StyledBackdrop = styled(MuiBackdrop)(({ theme }) => ({
  zIndex: theme.zIndex.modal,
}));

const StyledPopper = styled(MuiPopper)(({ theme }) => ({
  zIndex: theme.zIndex.modal,
}));

export const Popper = ({ open, anchorEl, placement = 'auto', sx, children }: PopperProps) => {
  const [animate, setAnimate] = useState(false);

  // handle click outside the Popper
  const handleClickAway = () => {
    anchorEl?.click();
  };

  // enable animation content inside Popper
  useEffect(() => {
    if (open) {
      // Delay the start of the animation until the Popper is mounted in the DOM
      requestAnimationFrame(() => setAnimate(true));
    } else {
      setAnimate(false);
    }
  }, [open]);

  return (
    <StyledBackdrop open={open}>
      <StyledPopper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        sx={sx}
        transition
      >
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Fade {...TransitionProps} timeout={200}>
              <div>
                {children?.({animate})}
              </div>
            </Fade>
          </ClickAwayListener>
          )}
      </StyledPopper>
    </StyledBackdrop>
  );
};
