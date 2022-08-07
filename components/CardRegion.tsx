import { Button, Card, CardContent, Chip, Stack } from "@mui/material";
import { useState } from "react";
import { RegionSetting } from "../lib/types/region";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import DialogRegion from "./DialogRegion";

function getLabelFromRegion(region: RegionSetting) {
  let label = region.country;
  if (region.state !== "") label += " " + region.state;
  if (region.region !== "") label += " " + region.region;
  return label;
}

export interface CardRegionProps {
  selectedRegions: any[];
  setSelectedRegions: any;
}

export default function CardRegion(props: CardRegionProps) {
  const { selectedRegions, setSelectedRegions } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card sx={{ m: 1 }} elevation={5}>
        <CardContent>
          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              color="info"
              onClick={() => setOpen(true)}
            >
              <FlagCircleIcon />
              追加
            </Button>
            <DialogRegion
              open={open}
              selectedRegions={selectedRegions}
              setSelectedRegions={setSelectedRegions}
              onClose={() => {
                setOpen(false);
              }}
            ></DialogRegion>

            {selectedRegions.map((region, idx) => {
              return (
                <Chip
                  key={idx}
                  label={getLabelFromRegion(region)}
                  onDelete={(ev) => {
                    setSelectedRegions(
                      selectedRegions.filter((r) => {
                        return region !== r;
                      })
                    );
                  }}
                />
              );
            })}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
