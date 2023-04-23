import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Filter(props: { items: string[]; displayFilteredItems: Function; label: string, emptyLabel: string, value: string}) {
    return (
        <FormControl style={{margin: "10px", textAlign: "left"}} fullWidth>
        <InputLabel id="select-label">{props.label}</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={props.value}
          label={props.label}
          onChange={(e) => {
            const currItem = e.target.value
            props.displayFilteredItems(currItem)
        }}
        >
            <MenuItem key={props.emptyLabel} value={''}>{props.emptyLabel}</MenuItem>
            {props.items.map((item) => {
                return <MenuItem key={item} value={item}>{item}</MenuItem>
            })}
        </Select>
      </FormControl>
    );
  }
  
  export default Filter;