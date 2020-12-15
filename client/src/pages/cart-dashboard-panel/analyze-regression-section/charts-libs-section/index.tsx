import React, { useState } from "react";
import { Grid, Card, CardContent } from "@material-ui/core";

import MinusAddon from "../../../../components/Button/MinusAddon";
import PlusAddon from "../../../../components/Button/PlusAddon";
import SelectedChartSection from "./selected-chart-section";
import * as Constants from "../../../../constants";
import useStyles from "../../../../utils/styles";

function ChartsLibsSection(props: any) {
  const [selected, setSelected] = useState([] as any);
  const [anchorEl, setAnchorEl] = useState(null as any);
  const classes = useStyles();

  const handleSelected = (id: any, type: string) => {
    if (!selected.includes(id) && type === "add") {
      setSelected((prevState: any) => [...prevState, id]);
    } else if (type === "remove") {
      setSelected(selected.filter((item: any) => item !== id));
    }
    setAnchorEl(null);
  };

  return (
    <>
      {selected.length === 0 && (
        <Grid item md={6}>
          <PlusAddon
            type={1}
            selected={selected}
            anchorEl={anchorEl}
            onAnchorEl={(value: any) => setAnchorEl(value)}
            onSelected={(value: any) => handleSelected(value, "add")}
          />
        </Grid>
      )}
      {selected.map((item: any, idx: number) => (
        <Grid
          item
          md={6}
          key={item}
          style={{
            paddingLeft: "2rem",
            paddingRight: idx % 2 === 0 ? "2rem" : "0.8rem",
          }}
        >
          <Card className={classes.dashCard}>
            <CardContent>
              <MinusAddon
                id={item}
                type={1}
                selected={selected}
                anchorEl={anchorEl}
                onAnchorEl={(value: any) => setAnchorEl(value)}
                onSelected={(value: any) => handleSelected(value, "remove")}
              />
              <Grid item md={12}>
                <SelectedChartSection
                  id={item}
                  data={
                    props.traces[
                      Constants.MENU_ITEMS[props.dataSet][item].dataset
                    ]
                  }
                />
              </Grid>
              {idx === selected.length - 1 && (
                <PlusAddon
                  type={1}
                  selected={selected}
                  anchorEl={anchorEl}
                  onAnchorEl={(value: any) => setAnchorEl(value)}
                  onSelected={(value: any) => handleSelected(value, "add")}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
      {selected.length % 2 === 0 && <Grid item md={6} />}
    </>
  );
}

export default ChartsLibsSection;
