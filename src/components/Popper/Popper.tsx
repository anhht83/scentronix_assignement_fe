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
  anchorRef?: React.MutableRefObject<any> | null;
  sx?: SxProps<Theme>;
  placement?: MuiPopperPlacementType;
  children?: (props: {animate: boolean})=> React.ReactNode;
}


const StyledBackdrop = styled(MuiBackdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const StyledPopper = styled(MuiPopper)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 2,
}));

export const Popper = ({ open, anchorRef, placement = 'auto', sx, children }: PopperProps) => {
  const [animate, setAnimate] = useState(false);

  // handle click outside the Popper
  const handleClickAway = () => {
    anchorRef?.current?.click();
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
        anchorEl={anchorRef?.current}
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
