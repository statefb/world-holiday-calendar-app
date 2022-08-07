import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import moment from "moment";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ButtonCancel from "./ButtonCancel";
import ButtonOK from "./ButtonOK";
import Holidays from "date-holidays";

export interface DialogRegionProps {
  open: boolean;
  selectedRegions: any[];
  setSelectedRegions: any;
  onClose: () => void;
}

function setValueAsKeyValueList(obj: any, setFunc: any) {
  const tmp = [];
  for (const [key, value] of Object.entries(obj)) {
    tmp.push({
      key: key as string,
      value: value as string,
    });
  }
  setFunc(tmp);
}

export default function DialogRegion(props: DialogRegionProps) {
  const { open, onClose, setSelectedRegions, selectedRegions } = props;
  const [countries, setCountries] = useState<{ key: string; value: string }[]>(
    []
  );
  const [states, setStates] = useState<{ key: string; value: string }[]>([]);
  const [regions, setRegions] = useState<{ key: string; value: string }[]>([]);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [region, setRegion] = useState("");

  const hd = new Holidays();

  useEffect(() => {
    const c = hd.getCountries() as any;
    setValueAsKeyValueList(c, setCountries);
  }, [open]);

  const handleOK = () => {
    // OKボタン押下時
    if (country === "") {
      onClose();
      return;
    } else if (states.length !== 0 && state === "") {
      onClose();
      return;
    } else if (regions.length !== 0 && region === "") {
      onClose();
      return;
    }
    setSelectedRegions([
      ...selectedRegions.filter((r) => {
        return (
          r.country !== country || r.state !== state || r.region !== region
        );
      }),
      {
        country: country,
        state: state,
        region: region,
        countryName: hd.getCountries()[country],
        stateName: hd.getStates(country) ? hd.getStates(country)[state] : "",
        regionName: hd.getRegions(country, state)
          ? hd.getRegions(country, state)[region]
          : "",
      },
    ]);

    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle>追加対象リージョン</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <FormControl>
            <InputLabel id="country-label">国</InputLabel>
            <Select
              labelId="country-label"
              label="国"
              value={country}
              onChange={(event) => {
                setCountry(event.target.value);
                // reset
                setState("");
                setStates([]);
                setRegion("");
                setRegions([]);

                const s = hd.getStates(event.target.value);
                if (s !== undefined) {
                  setValueAsKeyValueList(s, setStates);
                }
              }}
            >
              {countries.map((c, idx) => {
                return (
                  <MenuItem value={c.key} key={idx}>
                    {c.value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="states-label">州</InputLabel>
            <Select
              labelId="states-label"
              label="州"
              value={state}
              onChange={(event) => {
                setState(event.target.value);
                // reset
                setRegion("");
                setRegions([]);

                const r = hd.getRegions(country, event.target.value);
                if (r !== undefined) {
                  setValueAsKeyValueList(r, setRegions);
                }
              }}
              disabled={states.length === 0}
            >
              {states.map((s, idx) => {
                return (
                  <MenuItem value={s.key} key={idx}>
                    {s.value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="regions-label">地域</InputLabel>
            <Select
              labelId="regions-label"
              label="地域"
              value={region}
              onChange={(event) => {
                setRegion(event.target.value);
              }}
              disabled={regions.length === 0}
            >
              {regions.map((r, idx) => {
                return (
                  <MenuItem value={r.key} key={idx}>
                    {r.value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Stack>
      </DialogContent>
      <DialogActions>
        <ButtonOK onClick={handleOK} text="追加"></ButtonOK>
        <ButtonCancel onClick={onClose} text="キャンセル"></ButtonCancel>
      </DialogActions>
    </Dialog>
  );
}
