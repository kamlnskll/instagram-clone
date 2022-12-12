import React from 'react';
import { FavoriteBorderOutlined, Favorite } from '@mui/icons-material';

export const FavoriteUnselected = () => <FavoriteBorderOutlined className='cursor-pointer' />
export const FavoriteSelected = () => <Favorite className='cursor-pointer text-red-600' />