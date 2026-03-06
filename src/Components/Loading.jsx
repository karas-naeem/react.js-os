import { useContext } from 'react';
import { LightDarkModeContext } from '../Context/LightDarkMode/LightDarkMode';
import { CircularProgress } from '@mui/material';

export default function Loading()
{
    const {DarkOrLight} = useContext(LightDarkModeContext)
    return <CircularProgress size="5rem" sx={{
        color:DarkOrLight ? "blueviolet" : "#68a3eb",
    }}/>
}