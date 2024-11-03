import React from 'react';
import { Button as MuiButton, Chip as MuiChip, Stack as MuiStack, styled, SxProps, Theme } from '@mui/material';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

export interface ProductProps {
  text: string;
  price: number;
  currency?: string;
  icon?: React.ReactNode;
  description?: string;
  tags?: React.ReactNode[];
  sx?: SxProps<Theme>
}

const StyledProduct = styled(MuiButton)(({ theme }) => ({
  '&.MuiButton-root': {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2.5, 3),
    marginBottom: theme.spacing(1),
    boxShadow: theme.shadows[1],
    display: 'block',
    textAlign: 'left',
    textTransform: 'none',
    lineHeight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 3),
    },
  },
}));

const StyledProductWrapText = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StyledProductPrice = styled('div')(() => ({
  whiteSpace: 'nowrap',
}));

const StyledProductText = styled('div')(() => ({
  flex: 1,
}));

const StyledProductDescription = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const StyledProductTag = styled(MuiChip)(({ theme }) => ({
  '&.MuiChip-root': {
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(1, 0),
    fontSize: theme.typography.caption.fontSize,
    height: 'auto',
  },
}));

export const Product = (
  {
    currency = '€',
    text = '',
    icon = <MdOutlineAddShoppingCart />,
    price,
    description,
    tags = [],
    sx
  }: ProductProps) => (
  <StyledProduct sx={sx}>
    <StyledProductWrapText>
      {icon}
      <StyledProductText>{text}</StyledProductText>
      <StyledProductPrice>{currency}{price}</StyledProductPrice>
    </StyledProductWrapText>
    {description && (
      <StyledProductDescription>
        {description}
      </StyledProductDescription>
    )}
    {!!tags?.length && (
      <MuiStack direction="row" spacing={1} marginTop={2}>
        {tags.map((tag, index) => (
          <StyledProductTag key={index} label={tag} />
        ))}
      </MuiStack>
    )}
  </StyledProduct>
);
