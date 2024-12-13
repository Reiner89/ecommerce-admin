import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { countries } from './SelectorPaises';
import { CountryType } from './CountryTipe';


export default function CountrySelect() {
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{
                width: 310,
                "& .MuiAutocomplete-option:hover": {
                    backgroundColor: "transparent", // Quitar efecto de hover
                },
            }}
            options={countries}
            autoHighlight
            getOptionLabel={(option: CountryType) => option.label}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <Box
                        key={key}
                        component="li"
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                    >
                        <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                        />
                        {option.label} ({option.code}) +{option.phone}
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Elige tu Pais"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                />
            )}
        />

    );
}
