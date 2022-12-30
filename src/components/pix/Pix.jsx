import React from 'react'
import Grid from '@mui/material/Grid'
import '@fontsource/roboto/300.css'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'


export default function Pix() {
    return (
        <>
            <Grid container justifyContent={'center'} sx={{ bgcolor: 'black' }}>
                <Typography mt={3} fontFamily={'roboto'} color={'white'}>
                    React Pix
                </Typography>
            </Grid>
            <br />
            <Grid container justifyContent={'center'} spacing={3}>

                <Grid item>

                    <TextField id="nomeFavorecido"
                        fullwidth
                        label="Nome do Favorecido"
                        variant="outlined"
                    />

                </Grid>
                <Grid item>

                    <TextField id="cidadeFavorecido"
                        fullwidth
                        label="Cidade do Favorecido"
                        variant="outlined"
                    />

                </Grid>
                <Grid item>

                    <TextField id="valoPix"
                        fullwidth
                        label="Valor R$"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </>
    )
}
